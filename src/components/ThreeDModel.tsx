import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box, Torus, Cylinder } from '@react-three/drei';
import * as THREE from 'three';

interface ThreeDModelProps {
  type: 'hat' | 'accessory' | 'tool' | 'clothing';
  isHovered: boolean;
  index: number;
}

export const ThreeDModel = ({ type, isHovered, index }: ThreeDModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.1;
      
      // Scale animation on hover
      const targetScale = isHovered ? 1.5 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      
      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime + index * 2) * 0.3;
    }
  });

  const getModelByType = () => {
    switch (type) {
      case 'hat':
        return (
          <>
            <Cylinder args={[1, 1.2, 0.8, 16]} position={[0, 0.4, 0]} castShadow receiveShadow>
              <meshStandardMaterial color="#8B5CF6" metalness={0.7} roughness={0.3} />
            </Cylinder>
            <Cylinder args={[1.4, 1.4, 0.1, 16]} position={[0, 0, 0]} castShadow receiveShadow>
              <meshStandardMaterial color="#A855F7" metalness={0.5} roughness={0.4} />
            </Cylinder>
          </>
        );
      
      case 'accessory':
        return (
          <Torus args={[1, 0.3, 16, 32]} castShadow receiveShadow>
            <meshStandardMaterial color="#06B6D4" metalness={0.8} roughness={0.2} />
          </Torus>
        );
      
      case 'tool':
        return (
          <>
            <Box args={[0.3, 2, 0.3]} position={[0, 0, 0]} castShadow receiveShadow>
              <meshStandardMaterial color="#EF4444" metalness={0.6} roughness={0.4} />
            </Box>
            <Box args={[1.2, 0.3, 0.3]} position={[0, 0.8, 0]} castShadow receiveShadow>
              <meshStandardMaterial color="#DC2626" metalness={0.8} roughness={0.2} />
            </Box>
          </>
        );
      
      case 'clothing':
        return (
          <Sphere args={[1, 32, 32]} castShadow receiveShadow>
            <meshStandardMaterial color="#10B981" metalness={0.4} roughness={0.6} />
          </Sphere>
        );
      
      default:
        return (
          <Box args={[1, 1, 1]} castShadow receiveShadow>
            <meshStandardMaterial color="#6B7280" />
          </Box>
        );
    }
  };

  return (
    <group ref={groupRef}>
      {getModelByType()}
    </group>
  );
};