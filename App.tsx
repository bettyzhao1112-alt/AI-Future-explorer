import React, { useState, useRef } from 'react';
import { LayerType, ChatMessage } from './types';
import { LAYER_DATA } from './constants';
import { ArchitectureMap } from './components/ArchitectureMap';
import { InfoPanel } from './components/InfoPanel';
import { AIChat } from './components/AIChat';
import { Sparkles } from 'lucide-react';
import { sendMessageToGemini } from './services/geminiService';

const App: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<LayerType>(LayerType.INTELLIGENCE);
  
  // Chat State
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '嗨！我是AI老师 🤖。关于刚才那个图，或者AI的未来，你有什么想问的吗？大胆问！', timestamp: Date.now() }
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  
  // Ref to scroll to chat on "Explain Further"
  const chatSectionRef = useRef<HTMLElement>(null);

  const handleChatSend = async (text: string) => {
    const userMessage: ChatMessage = { role: 'user', text: text, timestamp: Date.now() };
    setChatMessages(prev => [...prev, userMessage]);
    setIsChatLoading(true);

    try {
      const responseText = await sendMessageToGemini(text, chatMessages);
      
      const botMessage: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setChatMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { role: 'model', text: "抱歉，由于网络原因，我暂时无法回答。请稍后再试。", timestamp: Date.now() };
      setChatMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleExplainTopic = (topicTitle: string) => {
    const query = `能不能详细讲讲“${topicTitle}”？用简单有趣的语言解释一下它是干什么的。`;
    
    // Scroll chat into view if on mobile or small screen
    if (chatSectionRef.current) {
      chatSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    handleChatSend(query);
  };

  return (
    <div className="min-h-screen bg-cyber-dark text-slate-800 selection:bg-cyber-accent selection:text-white font-sans">
      
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-gradient-to-br from-cyber-accent to-cyber-glow rounded-lg shadow-sm">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyber-accent to-cyber-glow">
              AI Future Explorer
            </h1>
          </div>
          <div className="text-xs md:text-sm text-slate-500 hidden sm:block">
            给未来创造者的AI讲座 🚀
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4 max-w-7xl mx-auto">
        
        {/* Intro Section */}
        <section className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            从<span className="text-cyber-accent">原子</span>到<span className="text-cyber-glow">智能</span>的旅程
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            点击下方的架构图，探索AI是如何从地底下的光纤和芯片，一步步变成能和你对话的超级大脑的。👇
          </p>
        </section>

        {/* Main Interactive Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[800px] mb-12">
          
          {/* Left: Visualization (Map) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-4 shadow-xl shadow-slate-200/50 flex items-center justify-center relative">
            <div className="absolute top-4 left-4 z-20 bg-slate-100/80 backdrop-blur px-3 py-1 rounded-full text-xs text-slate-600 border border-slate-200">
              交互式图谱 - 点击区域查看详情
            </div>
            <ArchitectureMap activeLayer={activeLayer} onLayerSelect={setActiveLayer} />
          </div>

          {/* Right: Info Panel */}
          <div className="lg:col-span-5 h-[500px] lg:h-full">
            <InfoPanel 
              info={LAYER_DATA[activeLayer]} 
              onExplainTopic={handleExplainTopic}
            />
          </div>
        </div>

        {/* Chat Section */}
        <section ref={chatSectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24">
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">🤔 还没听懂？</h3>
            <p className="text-slate-600">
              这里有一个专门为你准备的AI助教。你可以问它任何奇怪的问题，比如：
            </p>
            <ul className="space-y-2 text-sm text-cyber-accent font-medium">
              <li className="cursor-pointer hover:underline hover:text-cyber-glow transition-colors" onClick={() => handleChatSend("如果拔掉数据中心的电源会怎样？")}>
                "如果拔掉数据中心的电源会怎样？"
              </li>
              <li className="cursor-pointer hover:underline hover:text-cyber-glow transition-colors" onClick={() => handleChatSend("具身智能会不会像终结者一样？")}>
                "具身智能会不会像终结者一样？"
              </li>
              <li className="cursor-pointer hover:underline hover:text-cyber-glow transition-colors" onClick={() => handleChatSend("我现在数学不好，以后还能做AI吗？")}>
                "我现在数学不好，以后还能做AI吗？"
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8">
            <AIChat 
              messages={chatMessages}
              onSendMessage={handleChatSend}
              isLoading={isChatLoading}
            />
          </div>
        </section>

      </main>

      <footer className="border-t border-slate-200 py-8 mt-12 text-center text-slate-500 text-sm">
        <p>© 2024 AI Future Explorer. Designed for the Next Generation.</p>
      </footer>
    </div>
  );
};

export default App;