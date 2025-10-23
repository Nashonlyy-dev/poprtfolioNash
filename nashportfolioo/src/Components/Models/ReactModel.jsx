import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function ReactModel(props) {
  const ref = useRef(null)
  useFrame(()=> {
    if (ref.current) ref.current.rotation.y += 0.001
  })
  const { scene } = useGLTF('src/assets/react_logo.glb')
  return <primitive  object={scene} scale={0.3} {...props} />
}
