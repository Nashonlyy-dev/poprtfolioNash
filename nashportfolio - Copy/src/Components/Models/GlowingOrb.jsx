import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function GlowingOrb(props) {
  const ref = useRef(null)
  useFrame(()=> {
    if (ref.current) ref.current.rotation.y += 0.001
  })
  const { scene } = useGLTF('src/assets/magical_orb.glb')
  return <primitive ref={ref} object={scene} scale={3} {...props} />
}
