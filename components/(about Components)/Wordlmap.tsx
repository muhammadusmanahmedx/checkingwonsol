"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
    color?: string;
  }>;
  lineColor?: string;
}

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#1a5490", // Darker version of #2C74BC for better visibility
    shape: "circle",
    backgroundColor: "white",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] bg-white rounded-lg relative font-sans">
      {" "}
      {/* Changed background to white */}
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full pointer-events-none select-none"
        alt="world map"
        height={495}
        width={1056}
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          {dots.map((dot, i) => {
            const connectionColor = dot.color || lineColor;
            return (
              <linearGradient
                key={`gradient-${i}`}
                id={`path-gradient-${i}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="5%" stopColor={connectionColor} stopOpacity="1" />
                <stop
                  offset="95%"
                  stopColor={connectionColor}
                  stopOpacity="1"
                />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            );
          })}
        </defs>

        {dots.map((dot, i) => {
          const connectionColor = dot.color || lineColor;
          return (
            <g key={`points-group-${i}`}>
              <g>
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="3"
                  fill={connectionColor}
                />
                <circle
                  cx={projectPoint(dot.start.lat, dot.start.lng).x}
                  cy={projectPoint(dot.start.lat, dot.start.lng).y}
                  r="3"
                  fill={connectionColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="10"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
              <g>
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="3"
                  fill={connectionColor}
                />
                <circle
                  cx={projectPoint(dot.end.lat, dot.end.lng).x}
                  cy={projectPoint(dot.end.lat, dot.end.lng).y}
                  r="3"
                  fill={connectionColor}
                  opacity="0.5"
                >
                  <animate
                    attributeName="r"
                    from="3"
                    to="10"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    from="0.5"
                    to="0"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </g>
          );
        })}

        <g>
          <circle
            cx={projectPoint(30.3753, 69.3451).x}
            cy={projectPoint(30.3753, 69.3451).y}
            r="8"
            fill="#22c55e"
            className="drop-shadow-lg"
          />
          <circle
            cx={projectPoint(30.3753, 69.3451).x}
            cy={projectPoint(30.3753, 69.3451).y}
            r="8"
            fill="#22c55e"
            opacity="0.3"
          >
            <animate
              attributeName="r"
              from="8"
              to="18"
              dur="2s"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              from="0.3"
              to="0"
              dur="2s"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke={`url(#path-gradient-${i})`}
                strokeWidth="2"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.5,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        {dots.map((dot, i) => (
          <g key={`labels-${i}`}>
            <text
              x={projectPoint(dot.start.lat, dot.start.lng).x}
              y={projectPoint(dot.start.lat, dot.start.lng).y - 15}
              textAnchor="middle"
              className="text-xs fill-gray-700 font-medium" // Changed text color for white background
              style={{ fontSize: "12px" }}
            >
              {dot.start.label}
            </text>
            <text
              x={projectPoint(dot.end.lat, dot.end.lng).x}
              y={projectPoint(dot.end.lat, dot.end.lng).y - 15}
              textAnchor="middle"
              className="text-xs fill-gray-700 font-medium" // Changed text color for white background
              style={{ fontSize: "12px" }}
            >
              {dot.end.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
