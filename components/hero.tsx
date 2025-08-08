"use client";
import React, { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";

interface ThreadsProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 40;
const float u_line_width = 7.0;
const float u_line_blur = 10.0;

float Perlin2D(vec2 P) {
    vec2 Pi = floor(P);
    vec4 Pf_Pfmin1 = P.xyxy - vec4(Pi, Pi + 1.0);
    vec4 Pt = vec4(Pi.xy, Pi.xy + 1.0);
    Pt = Pt - floor(Pt * (1.0 / 71.0)) * 71.0;
    Pt += vec2(26.0, 161.0).xyxy;
    Pt *= Pt;
    Pt = Pt.xzxz * Pt.yyww;
    vec4 hash_x = fract(Pt * (1.0 / 951.135664));
    vec4 hash_y = fract(Pt * (1.0 / 642.949883));
    vec4 grad_x = hash_x - 0.49999;
    vec4 grad_y = hash_y - 0.49999;
    vec4 grad_results = inversesqrt(grad_x * grad_x + grad_y * grad_y)
        * (grad_x * Pf_Pfmin1.xzxz + grad_y * Pf_Pfmin1.yyww);
    grad_results *= 1.4142135623730950;
    vec2 blend = Pf_Pfmin1.xy * Pf_Pfmin1.xy * Pf_Pfmin1.xy
               * (Pf_Pfmin1.xy * (Pf_Pfmin1.xy * 6.0 - 15.0) + 10.0);
    vec4 blend2 = vec4(blend, vec2(1.0 - blend));
    return dot(grad_results, blend2.zxzx * blend2.wwyy);
}

float pixel(float count, vec2 resolution) {
    return (1.0 / max(resolution.x, resolution.y)) * count;
}

float lineFn(vec2 st, float width, float perc, float offset, vec2 mouse, float time, float amplitude, float distance) {
    float split_offset = (perc * 0.4);
    float split_point = 0.1 + split_offset;

    float amplitude_normal = smoothstep(split_point, 0.7, st.x);
    float amplitude_strength = 0.5;
    float finalAmplitude = amplitude_normal * amplitude_strength
                           * amplitude * (1.0 + (mouse.y - 0.5) * 0.2);

    float time_scaled = time / 10.0 + (mouse.x - 0.5) * 1.0;
    float blur = smoothstep(split_point, split_point + 0.05, st.x) * perc;

    float xnoise = mix(
        Perlin2D(vec2(time_scaled, st.x + perc) * 2.5),
        Perlin2D(vec2(time_scaled, st.x + time_scaled) * 3.5) / 1.5,
        st.x * 0.3
    );

    float y = 0.5 + (perc - 0.5) * distance + xnoise / 2.0 * finalAmplitude;

    float line_start = smoothstep(
        y + (width / 2.0) + (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        y,
        st.y
    );

    float line_end = smoothstep(
        y,
        y - (width / 2.0) - (u_line_blur * pixel(1.0, iResolution.xy) * blur),
        st.y
    );

    return clamp(
        (line_start - line_end) * (1.0 - smoothstep(0.0, 1.0, pow(perc, 0.3))),
        0.0,
        1.0
    );
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = fragCoord / iResolution.xy;

    float line_strength = 1.0;
    for (int i = 0; i < u_line_count; i++) {
        float p = float(i) / float(u_line_count);
        line_strength *= (1.0 - lineFn(
            uv,
            u_line_width * pixel(1.0, iResolution.xy) * (1.0 - p),
            p,
            (PI * 1.0) * p,
            uMouse,
            iTime,
            uAmplitude,
            uDistance
        ));
    }

    float colorVal = 1.0 - line_strength;
    fragColor = vec4(uColor * colorVal, colorVal);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

const Threads: React.FC<ThreadsProps> = ({
  color = [0.2, 0.4, 0.8], // Nice blue color
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const renderer = new Renderer({ alpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    container.appendChild(gl.canvas);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: {
          value: new Color(
            gl.canvas.width,
            gl.canvas.height,
            gl.canvas.width / gl.canvas.height
          ),
        },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      program.uniforms.iResolution.value.r = clientWidth;
      program.uniforms.iResolution.value.g = clientHeight;
      program.uniforms.iResolution.value.b = clientWidth / clientHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    let currentMouse = [0.5, 0.5];
    let targetMouse = [0.5, 0.5];

    function handleMouseMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      targetMouse = [x, y];
    }
    function handleMouseLeave() {
      targetMouse = [0.5, 0.5];
    }
    if (enableMouseInteraction) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    function update(t: number) {
      if (enableMouseInteraction) {
        const smoothing = 0.05;
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0]);
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1]);
        program.uniforms.uMouse.value[0] = currentMouse[0];
        program.uniforms.uMouse.value[1] = currentMouse[1];
      } else {
        program.uniforms.uMouse.value[0] = 0.5;
        program.uniforms.uMouse.value[1] = 0.5;
      }
      program.uniforms.iTime.value = t * 0.001;

      renderer.render({ scene: mesh });
      animationFrameId.current = requestAnimationFrame(update);
    }
    animationFrameId.current = requestAnimationFrame(update);

    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener("resize", resize);

      if (enableMouseInteraction) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [color, amplitude, distance, enableMouseInteraction]);

  return (
    <div ref={containerRef} className="w-full h-full relative" {...rest} />
  );
};

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Background Thread Animation */}
      <div className="absolute inset-0 z-0">
        <Threads
          amplitude={1.2}
          distance={0.3}
          enableMouseInteraction={true}
        />
      </div>

      {/* Header Navigation */}
      <header className="relative z-20 flex items-center justify-between px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-gray-800">
            LOGO
          </div>
        </div>

        {/* Center Navigation with Glass Effect */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-8 px-8 py-3 rounded-full bg-blue-600/80 backdrop-blur-lg border border-blue-500/30 shadow-lg">
            <a href="#" className="text-white hover:text-blue-100 transition-colors font-medium">Home</a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors font-medium">Services</a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors font-medium">About</a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors font-medium">Portfolio</a>
            <a href="#" className="text-white hover:text-blue-100 transition-colors font-medium">Contact</a>
          </div>
        </nav>

        {/* CTA Button */}
        <button className="text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25 hover:-translate-y-1" 
                style={{ 
                  boxShadow: '0 10px 20px rgba(37, 99, 235, 0.3), 0 6px 6px rgba(37, 99, 235, 0.2), inset 0 -2px 0 rgba(0, 0, 0, 0.1)',
                  background: 'linear-gradient(145deg, #3b82f6, #2563eb)'
                }}>
          Get Services Now
        </button>
      </header>

      {/* Floating Professional Icons - Only Mouse */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Mouse/Cursor Icon */}
        <div className="absolute top-1/3 right-20 animate-pulse" style={{ animationDelay: '1s', animationDuration: '3.5s' }}>
          <div className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" stroke="#3b82f6" strokeWidth="2" fill="none"/>
              <path d="M13 13l6 6" stroke="#3b82f6" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center -mt-16">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-blue-600">
            World of Optimal
            <br />
            Next-Gen Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
            Crafting solutions that lead to success
          </p>

          {/* Additional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/25" 
                    style={{ 
                      boxShadow: '0 12px 24px rgba(37, 99, 235, 0.3), 0 8px 8px rgba(37, 99, 235, 0.2), inset 0 -3px 0 rgba(0, 0, 0, 0.1)',
                      background: 'linear-gradient(145deg, #3b82f6, #2563eb)'
                    }}>
              Explore Our Work
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 bg-white hover:bg-blue-600 shadow-xl hover:shadow-blue-500/25" 
                    style={{ 
                      boxShadow: '0 8px 16px rgba(37, 99, 235, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.2)'
                    }}>
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-white/10 via-transparent to-white/5"></div>
    </div>
  );
};

export default HeroSection;