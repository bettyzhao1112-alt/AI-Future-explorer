import React from 'react';
import { LayerInfo } from '../types';
import { Icon } from './Icon';

interface InfoPanelProps {
  info: LayerInfo;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ info }) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-xl p-6 h-full flex flex-col animate-in slide-in-from-right duration-500">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="p-3 rounded-lg shadow-lg"
          style={{ backgroundColor: `${info.color}20`, color: info.color }}
        >
          <Icon name={info.icon} size={32} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-100">{info.title}</h2>
          <p className="text-slate-400 font-mono text-sm">{info.subtitle}</p>
        </div>
      </div>

      <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-grow">
        <section>
          <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            📖 它是啥？
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm md:text-base">
            {info.description}
          </p>
        </section>

        <section className="bg-slate-900/50 p-4 rounded-lg border-l-4" style={{ borderColor: info.color }}>
          <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
            💡 举个栗子 (Analogy)
          </h3>
          <p className="text-slate-300 italic text-sm md:text-base">
            "{info.analogy}"
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-white mb-3">
            🔑 核心概念
          </h3>
          <div className="flex flex-wrap gap-2">
            {info.topics.map((topic, index) => (
              <span 
                key={index}
                className="px-3 py-1 rounded-full text-xs md:text-sm font-medium border"
                style={{ 
                  backgroundColor: `${info.color}10`, 
                  borderColor: `${info.color}40`,
                  color: info.color 
                }}
              >
                {topic}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
