import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 500 }) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Cyan to green gradient
      const t = Math.random();
      colors[i * 3] = 0 + t * 0;
      colors[i * 3 + 1] = 0.9 + t * 0.1;
      colors[i * 3 + 2] = 1 - t * 0.5;
    }
    
    return { positions, colors };
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const icosaRef = useRef<THREE.Mesh>(null);
  const octaRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
      torusRef.current.position.y = Math.sin(t * 0.5) * 2;
    }
    
    if (icosaRef.current) {
      icosaRef.current.rotation.x = t * 0.3;
      icosaRef.current.rotation.z = t * 0.2;
      icosaRef.current.position.y = Math.cos(t * 0.4) * 1.5 + 3;
    }
    
    if (octaRef.current) {
      octaRef.current.rotation.y = t * 0.4;
      octaRef.current.rotation.z = t * 0.2;
      octaRef.current.position.y = Math.sin(t * 0.6) * 1.5 - 3;
    }
  });

  return (
    <>
      <mesh ref={torusRef} position={[8, 0, -5]}>
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.3} />
      </mesh>
      
      <mesh ref={icosaRef} position={[-8, 3, -8]}>
        <icosahedronGeometry args={[1.5, 0]} />
        <meshBasicMaterial color="#00ff88" wireframe transparent opacity={0.25} />
      </mesh>
      
      <mesh ref={octaRef} position={[6, -3, -6]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.25} />
      </mesh>
    </>
  );
}

export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#050810']} />
        <fog attach="fog" args={['#050810', 15, 50]} />
        <ambientLight intensity={0.5} />
        <Particles count={800} />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
