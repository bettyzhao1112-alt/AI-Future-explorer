import React, { useState } from 'react';
import { LayerType } from './types';
import { LAYER_DATA } from './constants';
import { ArchitectureMap } from './components/ArchitectureMap';
import { InfoPanel } from './components/InfoPanel';
import { AIChat } from './components/AIChat';
import { Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<LayerType>(LayerType.INTELLIGENCE);

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-200 selection:bg-cyber-accent selection:text-slate-900 font-sans">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-cyber-accent to-cyber-glow rounded-lg">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-accent to-cyber-glow">
              AI Future Explorer
            </h1>
          </div>
          <div className="text-xs md:text-sm text-slate-400 hidden sm:block">
            给未来创造者的AI讲座 🚀
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        
        {/* Intro Section */}
        <section className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            从<span className="text-cyber-accent">原子</span>到<span className="text-cyber-glow">智能</span>的旅程
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            点击下方的架构图，探索AI是如何从地底下的光纤和芯片，一步步变成能和你对话的超级大脑的。👇
          </p>
        </section>

        {/* Main Interactive Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[800px] mb-12">
          
          {/* Left: Visualization (Map) */}
          <div className="lg:col-span-7 bg-slate-800/30 rounded-2xl border border-slate-800 p-4 shadow-inner flex items-center justify-center relative">
            <div className="absolute top-4 left-4 z-20 bg-black/40 px-3 py-1 rounded-full text-xs text-slate-400 border border-slate-700">
              交互式图谱 - 点击区域查看详情
            </div>
            <ArchitectureMap activeLayer={activeLayer} onLayerSelect={setActiveLayer} />
          </div>

          {/* Right: Info Panel */}
          <div className="lg:col-span-5 h-[500px] lg:h-full">
            <InfoPanel info={LAYER_DATA[activeLayer]} />
          </div>
        </div>

        {/* Chat Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-bold text-white">🤔 还没听懂？</h3>
            <p className="text-slate-400">
              这里有一个专门为你准备的AI助教。你可以问它任何奇怪的问题，比如：
            </p>
            <ul className="space-y-2 text-sm text-cyber-accent">
              <li className="cursor-pointer hover:underline">"如果拔掉数据中心的电源会怎样？"</li>
              <li className="cursor-pointer hover:underline">"具身智能会不会像终结者一样？"</li>
              <li className="cursor-pointer hover:underline">"我现在数学不好，以后还能做AI吗？"</li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <AIChat />
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-800 py-8 mt-12 text-center text-slate-500 text-sm">
        <p>© 2024 AI Future Explorer. Designed for the Next Generation.</p>
      </footer>
    </div>
  );
};

export default App;
