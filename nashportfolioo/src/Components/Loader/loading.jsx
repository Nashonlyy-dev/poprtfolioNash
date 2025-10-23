
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useProgress, Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import * as THREE from 'three';

// --- Orb + Particles (Three) ---------------------------------------------
function InnerOrb({ mouse }) {
  const ref = useRef();
  useFrame((state, delta) => {
    // subtle rotation + mouse parallax
    ref.current.rotation.y += delta * 0.6;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (mouse.current[1] - 0.5) * 0.6, 0.05);
    ref.current.rotation.z = THREE.MathUtils.lerp(ref.current.rotation.z, (mouse.current[0] - 0.5) * 0.6, 0.05);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <meshStandardMaterial
        color="#0ff2ff"
        emissive={'#0ff2ff'}
        emissiveIntensity={1.6}
        roughness={0.05}
        metalness={0.8}
      />
    </mesh>
  );
}

function OrbShell() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y -= delta * 0.12;
  });
  return (
    <mesh ref={ref} scale={[1.6, 1.6, 1.6]}>
      <icosahedronGeometry args={[1, 3]} />
      <meshBasicMaterial
        color="#7afcff"
        transparent
        opacity={0.08}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

function ParticleCloud({ count = 200 }) {
  const ref = useRef();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 2.4 + Math.random() * 4.0;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attachObject={['attributes', 'position']} array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.018} sizeAttenuation vertexColors={false} color={'#8ff'} />
    </points>
  );
}

// lightweight fallback - shows percent during asset loading
function LoaderHtml() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-center select-none">
        <div className="text-xs text-[#9dfbff] tracking-wider">{Math.round(progress)}%</div>
      </div>
    </Html>
  );
}

// --- Main Loader Component -----------------------------------------------
export default function ExtremeCyberLoader({ active = true, onFinish = () => {} }) {
  const [visible, setVisible] = useState(active);
  const [ready, setReady] = useState(false);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const mouse = useRef([0.5, 0.5]);

  // track pointer for parallax
  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = [e.clientX / window.innerWidth, e.clientY / window.innerHeight];
    };
    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  // neon flicker with GSAP while visible
  useEffect(() => {
    if (!textRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(textRef.current, { opacity: 0.65, duration: 0.12, ease: 'power1.inOut' });
      tl.to(textRef.current, { opacity: 1, duration: 0.18, ease: 'sine.inOut' });
      tl.to(textRef.current, { filter: 'drop-shadow(0 0 22px #00f5ff)', duration: 0.25 }, '<');
    }, overlayRef);

    return () => ctx.revert();
  }, [visible]);

  // mimic listening to asset load: we'll use a tiny debounce so it doesn't flash
  // If your project uses useProgress or onLoad callbacks, call setReady(true) there
  useEffect(() => {
    if (!active) {
      // when active prop turns false externally, begin hide sequence
      setReady(true);
    }
  }, [active]);

  // when 'ready' is true -> animate out and then set visible false + call onFinish
  useEffect(() => {
    if (!ready) return;
    // short delay so user sees 100% if assets report instantly
    const t = setTimeout(() => {
      // animate overlay out using gsap to keep the feel
      gsap.to(overlayRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.9,
        ease: 'power2.inOut',
        onComplete: () => {
          setVisible(false);
          onFinish();
        },
      });
    }, 420); // tiny breathing room

    return () => clearTimeout(t);
  }, [ready, onFinish]);

  // allow user to skip loader by click (handy during dev)
  const handleSkip = () => setReady(true);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={overlayRef}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        style={{ pointerEvents: 'auto' }}
        onDoubleClick={handleSkip}
      >
       

        {/* UI: neon text + subtle chrome bar */}
        <div className="relative z-[10000] flex flex-col items-center gap-4 pointer-events-auto">
          <div className="rounded-2xl px-6 py-3 bg-black/40 backdrop-blur-sm border border-[#08f7ff33] shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-tr from-[#00d2ff] to-[#6efff9] shadow-lg transform-gpu" />

              <div className="flex flex-col items-start">
                <div ref={textRef} className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-[#9ffeff] drop-shadow-lg">
                  Loading
                </div>
                <div className="text-xs text-[#9dfbff] opacity-80 -mt-1">Preparing portfolio</div>
              </div>
            </div>
          </div>

          {/* progress bar */}
          <div className="w-64 md:w-96 h-2 rounded-full bg-[#ffffff0d] overflow-hidden shadow-inner">
            <ProgressBar onReady={() => setReady(true)} />
          </div>

          {/* small helper text */}
          <div className="text-xs text-[#77f7ff88] opacity-90">Double-click to skip • Smooth exit</div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// A progress bar component that ties to three/drei useProgress (auto) but also falls back to a nice fake progress
function ProgressBar({ onReady }) {
  const { progress, active } = useProgress();
  const barRef = useRef();
  const fakeRef = useRef(0);

  useEffect(() => {
    // animate width whenever progress changes
    if (barRef.current) {
      const target = Math.max(progress, fakeRef.current);
      gsap.to(barRef.current, { width: `${target}%`, duration: 0.5, ease: 'power2.out' });
    }

    // when progress reaches 100 or active becomes false, trigger onReady
    if (progress >= 100 || !active) {
      const t = setTimeout(() => onReady && onReady(), 500);
      return () => clearTimeout(t);
    }
  }, [progress, active, onReady]);

  // gentle fake progress in case progress stays low (keep things feeling "alive")
  useEffect(() => {
    const id = setInterval(() => {
      if (fakeRef.current < 78) fakeRef.current += Math.random() * 3.2;
      else if (fakeRef.current < 95) fakeRef.current += Math.random() * 1.0;
      if (barRef.current) gsap.to(barRef.current, { width: `${Math.min(fakeRef.current, 95)}%`, duration: 0.9, ease: 'power1.out' });
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="h-full w-full bg-transparent rounded-full overflow-hidden">
      <div ref={barRef} className="h-full bg-gradient-to-r from-[#00d2ff] via-[#6efff9] to-[#88ffff] rounded-full" style={{ width: '6%' }} />
    </div>
  );
}
