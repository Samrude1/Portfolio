'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';

interface NodeData {
  position: [number, number, number];
  connections: number[];
  size: number; // Varying sizes for depth
  speed: number; // Individual animation speed
}

// Seeded random for deterministic generation
function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

// Get theme colors from CSS variables
function getThemeColors() {
  if (typeof window === 'undefined') return {
    nodePrimary: '#8b5cf6',
    nodeSecondary: '#666666',
    connection: '#06b6d4',
    background: '#030303'
  };

  const root = document.documentElement;
  const mode = root.getAttribute('data-mode') || 'dark';

  // Get background color - cream for light mode, dark for dark mode
  const background = mode === 'light' ? '#F5F3EF' : '#030303';

  return {
    nodePrimary: getComputedStyle(root).getPropertyValue('--node-primary').trim() || (mode === 'light' ? '#000000' : '#2563eb'),
    nodeSecondary: getComputedStyle(root).getPropertyValue('--node-secondary').trim() || (mode === 'light' ? '#333333' : '#1e40af'),
    connection: getComputedStyle(root).getPropertyValue('--connection').trim() || (mode === 'light' ? '#000000' : '#3b82f6'),
    background
  };
}

function NeuralNetwork() {
  const nodesRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const [colors, setColors] = useState(getThemeColors());

  // Update colors when theme changes
  useEffect(() => {
    const updateColors = () => setColors(getThemeColors());

    // Watch for theme changes
    const observer = new MutationObserver(updateColors);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mode']
    });

    return () => observer.disconnect();
  }, []);

  // Generate neural network structure with deterministic random
  const { nodes, linePositions } = useMemo(() => {
    const random = seededRandom(12345);
    const layers = [6, 10, 12, 10, 6]; // 5 layers for more depth
    const nodesList: NodeData[] = [];
    const lines: number[] = [];

    let nodeIndex = 0;
    const layerSpacing = 3.5;
    const nodeSpacing = 1.1;

    // Create nodes for each layer
    layers.forEach((nodeCount, layerIndex) => {
      const xPos = (layerIndex - layers.length / 2) * layerSpacing;
      const startY = -(nodeCount - 1) * nodeSpacing / 2;

      for (let i = 0; i < nodeCount; i++) {
        const yPos = startY + i * nodeSpacing;
        const zPos = (random() - 0.5) * 3;

        // Varying node sizes for depth
        const sizeVariation = random();
        const size = sizeVariation < 0.3 ? 0.06 : sizeVariation < 0.7 ? 0.09 : 0.12;

        nodesList.push({
          position: [xPos, yPos, zPos],
          connections: [],
          size,
          speed: 0.8 + random() * 0.4 // Individual speeds
        });

        // Connect to next layer
        if (layerIndex < layers.length - 1) {
          const nextLayerStart = nodeIndex + nodeCount;
          const nextLayerCount = layers[layerIndex + 1];

          // Connect to 2-4 random nodes in next layer
          const connectionCount = Math.floor(random() * 3) + 2;
          const currentNodeIndex = nodesList.length - 1;
          for (let j = 0; j < connectionCount; j++) {
            const targetNode = nextLayerStart + Math.floor(random() * nextLayerCount);
            nodesList[currentNodeIndex].connections.push(targetNode);
          }
        }

        nodeIndex++;
      }
    });

    // Create line positions from connections
    nodesList.forEach((node, idx) => {
      node.connections.forEach(targetIdx => {
        if (targetIdx < nodesList.length) {
          lines.push(...node.position);
          lines.push(...nodesList[targetIdx].position);
        }
      });
    });

    return { nodes: nodesList, linePositions: new Float32Array(lines) };
  }, []);

  // Much more lively animations
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (nodesRef.current) {
      nodes.forEach((node, i) => {
        const matrix = new THREE.Matrix4();

        // More dramatic pulsing (faster and more pronounced)
        const pulse = 1 + Math.sin(time * 3 * node.speed + i * 0.3) * 0.3;

        // Floating movement
        const floatY = Math.sin(time * 0.8 * node.speed + i) * 0.15;
        const floatZ = Math.cos(time * 0.6 * node.speed + i * 0.5) * 0.1;

        const pos = new THREE.Vector3(
          node.position[0],
          node.position[1] + floatY,
          node.position[2] + floatZ
        );

        matrix.setPosition(pos);
        matrix.scale(new THREE.Vector3(node.size * pulse, node.size * pulse, node.size * pulse));
        nodesRef.current!.setMatrixAt(i, matrix);
      });
      nodesRef.current.instanceMatrix.needsUpdate = true;
    }

    // Continuous rotation (more noticeable)
    if (nodesRef.current && linesRef.current) {
      const rotation = time * 0.08; // Faster rotation
      nodesRef.current.rotation.y = rotation;
      linesRef.current.rotation.y = rotation;

      // Slight tilt for more dynamic feel
      nodesRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
      linesRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <group>
      {/* Neural Network Nodes */}
      <instancedMesh ref={nodesRef} args={[undefined, undefined, nodes.length]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={colors.nodePrimary}
          emissive={colors.nodePrimary}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </instancedMesh>

      {/* Connections with animated opacity */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={colors.connection}
          opacity={0.25}
          transparent
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

export default function ThreeScene() {
  const [bgColor, setBgColor] = useState('#030303');

  useEffect(() => {
    const updateBgColor = () => {
      const mode = document.documentElement.getAttribute('data-mode') || 'dark';
      setBgColor(mode === 'light' ? '#F5F3EF' : '#030303');
    };

    updateBgColor();

    const observer = new MutationObserver(updateBgColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mode']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />

        <color attach="background" args={[bgColor]} />

        {/* Enhanced Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06b6d4" />
        <pointLight position={[0, 10, -10]} intensity={0.6} color="#d946ef" />

        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
