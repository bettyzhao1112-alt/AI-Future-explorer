import React from 'react';
import { LayerInfo } from '../types';
import { Icon } from './Icon';
import { ExternalLink, MessageCircleQuestion } from 'lucide-react';

interface InfoPanelProps {
  info: LayerInfo;
  onExplainTopic: (topic: string) => void;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ info, onExplainTopic }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-xl p-6 h-full flex flex-col animate-in slide-in-from-right duration-500 shadow-xl shadow-slate-200/50">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="p-3 rounded-lg shadow-md"
          style={{ backgroundColor: `${info.color}15`, color: info.color }}
        >
          <Icon name={info.icon} size={32} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-800">{info.title}</h2>
          <p className="text-slate-500 font-mono text-sm">{info.subtitle}</p>
        </div>
      </div>

      <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar flex-grow">
        <section>
          <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
            📖 它是啥？
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {info.description}
          </p>
        </section>

        <section className="bg-slate-50 p-4 rounded-lg border-l-4 shadow-sm" style={{ borderColor: info.color }}>
          <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
            💡 举个栗子 (Analogy)
          </h3>
          <p className="text-slate-600 italic text-sm md:text-base">
            "{info.analogy}"
          </p>
        </section>

        <section>
          <h3 className="text-lg font-bold text-slate-800 mb-3">
            🔑 核心概念 (点击学习)
          </h3>
          <div className="flex flex-wrap gap-2">
            {info.topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-0.5 shadow-sm rounded-full">
                 <a 
                  href={topic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-3 py-1.5 rounded-l-full text-xs md:text-sm font-medium border-y border-l flex items-center gap-1.5 transition-all hover:bg-slate-50"
                  style={{ 
                    borderColor: `${info.color}30`,
                    color: info.color,
                    backgroundColor: `${info.color}05`
                  }}
                  title="查看外部资料"
                >
                  {topic.title}
                  <ExternalLink size={12} className="opacity-70 group-hover:opacity-100" />
                </a>
                <button
                  onClick={() => onExplainTopic(topic.title)}
                  className="px-2 py-1.5 rounded-r-full text-xs md:text-sm font-medium border-y border-r border-l flex items-center transition-all hover:brightness-95 active:scale-95 hover:bg-opacity-80"
                  style={{ 
                    backgroundColor: `${info.color}15`,
                    borderColor: `${info.color}30`,
                    color: info.color,
                    borderLeftColor: `${info.color}30`
                  }}
                  title="让AI详细讲解"
                >
                  <MessageCircleQuestion size={14} />
                  <span className="ml-1 text-xs">详解</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};