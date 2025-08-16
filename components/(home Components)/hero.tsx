"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { Renderer, Program, Mesh, Triangle, Color } from "ogl"

interface ThreadsProps {
  color?: [number, number, number]
  amplitude?: number
  distance?: number
  enableMouseInteraction?: boolean
}

const vertexShader = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}`

const fragmentShader = `
precision highp float;

uniform float iTime;
uniform vec3 iResolution;
uniform vec3 uColor;
uniform float uAmplitude;
uniform float uDistance;
uniform vec2 uMouse;

#define PI 3.1415926538

const int u_line_count = 20;
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
}`

function throttle(fn: (...args: any[]) => void, wait: number) {
  let lastTime = 0
  return (...args: any[]) => {
    const now = Date.now()
    if (now - lastTime >= wait) {
      fn(...args)
      lastTime = now
    }
  }
}

const Threads: React.FC<ThreadsProps> = ({
  color = [0.173, 0.455, 0.737], // #2C74BC in RGB
  amplitude = 1,
  distance = 0,
  enableMouseInteraction = false,
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const lastFrameTime = useRef<number>(0)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const renderer = new Renderer({ alpha: true })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)
    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    container.appendChild(gl.canvas)

    const geometry = new Triangle(gl)
    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new Color(0, 0, 0) },
        uColor: { value: new Color(...color) },
        uAmplitude: { value: amplitude },
        uDistance: { value: distance },
        uMouse: { value: new Float32Array([0.5, 0.5]) },
      },
    })

    const mesh = new Mesh(gl, { geometry, program })

    const resize = throttle(() => {
      const { clientWidth, clientHeight } = container
      renderer.setSize(clientWidth, clientHeight)
      program.uniforms.iResolution.value.r = clientWidth
      program.uniforms.iResolution.value.g = clientHeight
      program.uniforms.iResolution.value.b = clientWidth / clientHeight
    }, 100)

    window.addEventListener("resize", resize, { passive: true })
    resize()

    const currentMouse = [0.5, 0.5]
    let targetMouse = [0.5, 0.5]

    const handleMouseMove = throttle((e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = 1.0 - (e.clientY - rect.top) / rect.height
      targetMouse = [x, y]
    }, 50)

    const handleMouseLeave = () => {
      targetMouse = [0.5, 0.5]
    }

    if (enableMouseInteraction) {
      container.addEventListener("mousemove", handleMouseMove, {
        passive: true,
      })
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    function update(t: number) {
      if (t - lastFrameTime.current < 33.33) {
        animationFrameId.current = requestAnimationFrame(update)
        return
      }
      lastFrameTime.current = t

      if (enableMouseInteraction) {
        const smoothing = 0.05
        currentMouse[0] += smoothing * (targetMouse[0] - currentMouse[0])
        currentMouse[1] += smoothing * (targetMouse[1] - currentMouse[1])
        program.uniforms.uMouse.value[0] = currentMouse[0]
        program.uniforms.uMouse.value[1] = currentMouse[1]
      } else {
        program.uniforms.uMouse.value[0] = 0.5
        program.uniforms.uMouse.value[1] = 0.5
      }

      program.uniforms.iTime.value = t * 0.001
      renderer.render({ scene: mesh })
      animationFrameId.current = requestAnimationFrame(update)
    }

    animationFrameId.current = requestAnimationFrame(update)

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
      window.removeEventListener("resize", resize)
      if (enableMouseInteraction) {
        container.removeEventListener("mousemove", handleMouseMove)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
      if (container.contains(gl.canvas)) container.removeChild(gl.canvas)
      gl.getExtension("WEBGL_lose_context")?.loseContext()
    }
  }, [color, amplitude, distance, enableMouseInteraction])

  return <div ref={containerRef} className="w-full h-full relative" {...rest} />
}

const HeroSection: React.FC = () => {
  useEffect(() => {
    const styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `
    document.head.appendChild(styleSheet)
    return () => document.head.removeChild(styleSheet)
  }, [])

  return (
    <div className="relative w-full  py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Threads
          color={[0.173, 0.455, 0.737]} // #2C74BC
          amplitude={typeof window !== "undefined" && window.innerWidth < 768 ? 0.8 : 1.2}
          distance={typeof window !== "undefined" && window.innerWidth < 768 ? 0.2 : 0.3}
          enableMouseInteraction={typeof window !== "undefined" && window.innerWidth >= 768}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center  px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Badge */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#2C74BC]/10 text-[#2C74BC] text-xs sm:text-sm font-medium border border-[#2C74BC]/20">
              Solutions That Succeed
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-gray-900">Crafting Solutions</span>
            <br />
            <span className="bg-gradient-to-r from-[#2C74BC] via-[#2C74BC]/80 to-[#2C74BC] bg-clip-text text-transparent">
              That Lead to Success
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 font-regular max-w-3xl mx-auto px-2 sm:px-0">
            Empowering businesses with optimal next-generation solutions that drive innovation, efficiency, and
            sustainable growth in the digital era
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white bg-[#2C74BC] hover:bg-[#2C74BC]/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg text-sm sm:text-base">
              Explore Our Solutions
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>

            <button className="w-full sm:w-auto relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-[#2C74BC] border-2 border-[#2C74BC] hover:bg-[#2C74BC] hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm sm:text-base">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className=" pt-12 sm:pt-12 sm: left-1/2 transform translate-x-1 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#2C74BC]/40 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-[#2C74BC] rounded-full mt-1.5 sm:mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#2C74BC]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-[#2C74BC]/3 rounded-full blur-3xl"></div>
    </div>
  )
}

export default HeroSection
