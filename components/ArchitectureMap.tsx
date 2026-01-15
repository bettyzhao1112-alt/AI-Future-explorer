import React from 'react';
import { LayerType } from '../types';

interface ArchitectureMapProps {
  activeLayer: LayerType;
  onLayerSelect: (layer: LayerType) => void;
}

export const ArchitectureMap: React.FC<ArchitectureMapProps> = ({ activeLayer, onLayerSelect }) => {
  
  // Helper to determine opacity based on selection
  const getOpacity = (layer: LayerType) => {
    return activeLayer === layer ? 1 : 0.4;
  };

  const getStroke = (layer: LayerType) => {
     return activeLayer === layer ? '#38bdf8' : '#334155';
  }

  return (
    <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] opacity-10 pointer-events-none">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border border-slate-700 aspect-square" />
        ))}
      </div>

      <svg viewBox="0 0 800 1000" className="w-full h-auto max-h-[85vh] drop-shadow-2xl z-10 select-none">
        <defs>
          <linearGradient id="fiberGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* --- Connecting Lines (The Data Flow) --- */}
        {/* Animated flow line up the middle */}
        <path 
          d="M400 900 L400 100" 
          stroke="url(#fiberGradient)" 
          strokeWidth="4" 
          fill="none"
          strokeDasharray="20,10"
          className="animate-flow"
        />

        {/* --- LEVEL 1: PHYSICAL (Bottom) --- */}
        <g 
          onClick={() => onLayerSelect(LayerType.PHYSICAL)} 
          className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          opacity={getOpacity(LayerType.PHYSICAL)}
        >
          <rect x="200" y="800" width="400" height="120" rx="10" fill="#1e293b" stroke={getStroke(LayerType.PHYSICAL)} strokeWidth="3" />
          <text x="400" y="840" textAnchor="middle" fill="#ef4444" fontSize="24" fontWeight="bold">物理层 (Physical)</text>
          <text x="400" y="870" textAnchor="middle" fill="#94a3b8" fontSize="16">数据中心 | GPU | 算力</text>
          {/* Server Icons */}
          <rect x="230" y="890" width="40" height="10" rx="2" fill="#ef4444" className="animate-pulse" />
          <rect x="280" y="890" width="40" height="10" rx="2" fill="#ef4444" className="animate-pulse" style={{animationDelay: '0.2s'}} />
          <rect x="330" y="890" width="40" height="10" rx="2" fill="#ef4444" className="animate-pulse" style={{animationDelay: '0.4s'}} />
        </g>

        {/* --- LEVEL 2: NETWORK (Lower Mid) --- */}
        <g 
          onClick={() => onLayerSelect(LayerType.NETWORK)} 
          className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          opacity={getOpacity(LayerType.NETWORK)}
        >
          {/* Cables */}
          <path d="M400 800 L400 680" stroke="#f59e0b" strokeWidth="8" strokeOpacity="0.5" />
          <rect x="250" y="680" width="300" height="80" rx="20" fill="#1e293b" stroke={getStroke(LayerType.NETWORK)} strokeWidth="3" />
          <text x="400" y="715" textAnchor="middle" fill="#f59e0b" fontSize="24" fontWeight="bold">传输层 (Network)</text>
          <text x="400" y="740" textAnchor="middle" fill="#94a3b8" fontSize="16">光纤 | TCP/IP | 5G</text>
          {/* Packet Animation */}
          <circle cx="400" cy="780" r="6" fill="#f59e0b">
            <animate attributeName="cy" from="800" to="680" dur="1s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* --- LEVEL 3: VIRTUAL WORLD (Middle) --- */}
        <g 
          onClick={() => onLayerSelect(LayerType.VIRTUAL_DATA)} 
          className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          opacity={getOpacity(LayerType.VIRTUAL_DATA)}
        >
          <path d="M200 600 L600 600 L550 450 L250 450 Z" fill="#1e293b" stroke={getStroke(LayerType.VIRTUAL_DATA)} strokeWidth="3" />
          <text x="400" y="520" textAnchor="middle" fill="#3b82f6" fontSize="24" fontWeight="bold">虚拟世界 (Virtual)</text>
          <text x="400" y="550" textAnchor="middle" fill="#94a3b8" fontSize="16">010101 | 大数据 | 向量</text>
          {/* Binary Rain Effect representation */}
          <text x="300" y="580" fill="#3b82f6" fontSize="12" opacity="0.6">1 0 1 1</text>
          <text x="500" y="580" fill="#3b82f6" fontSize="12" opacity="0.6">0 1 0 0</text>
        </g>

        {/* --- LEVEL 4: INTELLIGENCE (Upper Mid) --- */}
        <g 
          onClick={() => onLayerSelect(LayerType.INTELLIGENCE)} 
          className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          opacity={getOpacity(LayerType.INTELLIGENCE)}
        >
          <circle cx="400" cy="350" r="80" fill="#1e293b" stroke={getStroke(LayerType.INTELLIGENCE)} strokeWidth="4" />
          <circle cx="400" cy="350" r="70" fill="none" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="5,5" className="animate-[spin_10s_linear_infinite]" />
          <text x="400" y="355" textAnchor="middle" fill="#8b5cf6" fontSize="24" fontWeight="bold">智能体</text>
          <text x="400" y="380" textAnchor="middle" fill="#a78bfa" fontSize="14">Agent / LLM</text>
          <path d="M400 270 L400 430 M320 350 L480 350" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* --- LEVEL 5: APPLICATION (Top Left) --- */}
        <g 
          onClick={() => onLayerSelect(LayerType.APPLICATION)} 
          className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          opacity={getOpacity(LayerType.APPLICATION)}
        >
          <rect x="100" y="100" width="200" height="100" rx="10" fill="#1e293b" stroke={getStroke(LayerType.APPLICATION)} strokeWidth="3" />
          <text x="200" y="140" textAnchor="middle" fill="#10b981" fontSize="20" fontWeight="bold">具身智能</text>
          <text x="200" y="170" textAnchor="middle" fill="#94a3b8" fontSize="14">机器人 | 自动驾驶</text>
          {/* Connection to Brain */}
          <path d="M300 150 Q 350 150, 370 280" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
        </g>

        {/* --- LEVEL 6: FUTURE (Top Right) --- */}
        <g 
          onClick={() => onLayerSelect(LayerType.FUTURE)} 
          className="cursor-pointer transition-all duration-300 hover:scale-[1.02]"
          opacity={getOpacity(LayerType.FUTURE)}
        >
          <rect x="500" y="100" width="200" height="100" rx="10" fill="#1e293b" stroke={getStroke(LayerType.FUTURE)} strokeWidth="3" />
          <text x="600" y="140" textAnchor="middle" fill="#ec4899" fontSize="20" fontWeight="bold">你的未来</text>
          <text x="600" y="170" textAnchor="middle" fill="#94a3b8" fontSize="14">学习方向 | 创造</text>
          {/* Connection to Brain */}
          <path d="M500 150 Q 450 150, 430 280" fill="none" stroke="#ec4899" strokeWidth="2" strokeDasharray="5,5" />
        </g>

      </svg>
    </div>
  );
};
