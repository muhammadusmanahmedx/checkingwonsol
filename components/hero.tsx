
"use client";
import React, { forwardRef, useMemo, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree, RootState } from "@react-three/fiber";
import { Color, Mesh, ShaderMaterial } from "three";
import { IUniform } from "three";

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

interface UniformValue<T = number | Color> {
  value: T;
}

interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: IUniform;
}

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane(
  { uniforms },
  ref
) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      mesh.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_state: RootState, delta: number) => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: SilkUniforms;
      };
      material.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

const Silk: React.FC<SilkProps> = ({
  speed = 8,
  scale = 0.8,
  color = "#4F46E5",
  noiseIntensity = 1.5,
  rotation = 0,
}) => {
  const meshRef = useRef<Mesh>(null);

  const uniforms = useMemo<SilkUniforms>(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  return (
    <Canvas dpr={[1, 2]} frameloop="always" className="w-full h-full">
      <SilkPlane ref={meshRef} uniforms={uniforms} />
    </Canvas>
  );
};

const GlassNavbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2.5 shadow-2xl">
        <div className="flex items-center justify-between space-x-8">
          <div className="text-white font-bold text-lg">
            OptimalGen
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="#home" 
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-blue-200 transition-colors duration-300 font-medium text-sm"
            >
              Contact
            </a>
            <div className="w-px h-4 bg-white/30"></div>
            <a 
              href="#connect" 
              className="text-blue-200 hover:text-white transition-colors duration-300 font-semibold text-sm underline decoration-blue-200 underline-offset-2"
            >
              Connect Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default function SilkLandingPage() {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* Silk Background */}
      <div className="absolute inset-0">
        <Silk
          speed={3.9}
          scale={0.8}
          color="#4F46E5"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      
      {/* Glass Navbar */}
      <GlassNavbar />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            World of Optimal
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Next-Gen Solutions
            </span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-2xl md:text-3xl font-light mb-16 text-blue-100">
            Crafting Solutions That Lead to Success
          </p>
          
          <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 shadow-xl">
            Start Your Project Today
          </button>
        </div>
      </div>
    </div>
  );
}