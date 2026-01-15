import { LayerType, LayerInfo } from './types';
import { Server, Globe, Cpu, Bot, Zap, GraduationCap } from 'lucide-react';
import React from 'react';

export const LAYER_DATA: Record<LayerType, LayerInfo> = {
  [LayerType.PHYSICAL]: {
    id: LayerType.PHYSICAL,
    title: "1. 物理层 (Physical Layer)",
    subtitle: "原子世界 / Atoms",
    description: "AI的身体基础。所有那些“云端”的数据，其实都住在巨大的数据中心里。成千上万台装满GPU的超级计算机，正在日夜不停地计算。",
    analogy: "这就像AI的大脑实体。就像你的大脑由神经元和血管组成，AI的大脑是由硅芯片、电缆和巨大的风扇组成的。",
    topics: ["数据中心 (Data Center)", "GPU/TPU (算力)", "电力与散热"],
    icon: "Server",
    color: "#ef4444" // Red
  },
  [LayerType.NETWORK]: {
    id: LayerType.NETWORK,
    title: "2. 传输层 (Network Layer)",
    subtitle: "连接通道 / Connection",
    description: "数据需要高速公路。光纤以光速传输信号，TCP/IP协议保证数据包裹准确送达，不丢包，不迷路。",
    analogy: "想象一下超级快递系统。TCP/IP是打包规则和快递单，光纤是每秒能绕地球7圈的高速铁路。",
    topics: ["光纤 (Fiber Optics)", "TCP/IP 协议", "5G/6G"],
    icon: "Globe",
    color: "#f59e0b" // Amber
  },
  [LayerType.VIRTUAL_DATA]: {
    id: LayerType.VIRTUAL_DATA,
    title: "3. 虚拟世界 (Virtual World)",
    subtitle: "比特世界 / Bits",
    description: "现实世界被数字化了。文字、图片、视频都变成了0和1。这里构建了AI训练所需要的海量数据集。",
    analogy: "这是AI的图书馆。我们把整个互联网的书籍、图片都数字化，放进这个无限大的图书馆里供AI学习。",
    topics: ["大数据 (Big Data)", "数字化 (Digitization)", "向量空间"],
    icon: "Cpu",
    color: "#3b82f6" // Blue
  },
  [LayerType.INTELLIGENCE]: {
    id: LayerType.INTELLIGENCE,
    title: "4. 智能体 (Intelligence)",
    subtitle: "大脑模型 / The Model",
    description: "这是奇迹发生的地方。通过深度学习，大模型(LLM)涌现出了逻辑、推理和创造力。它不再只是存储，而是开始思考。",
    analogy: "这就像从“死记硬背”进化到了“融会贯通”。模型读完了图书馆所有的书，现在能写出自己的故事了。",
    topics: ["大语言模型 (LLM)", "神经网络", "智能体 (Agent)"],
    icon: "Zap",
    color: "#8b5cf6" // Violet
  },
  [LayerType.APPLICATION]: {
    id: LayerType.APPLICATION,
    title: "5. 应用与具身 (Application)",
    subtitle: "行动与交互 / Action",
    description: "AI进入我们的生活。可以是手机里的助手，也可以是拥有钢铁躯体的机器人（具身智能），在物理世界干活。",
    analogy: "AI穿上了“战甲”。在手机里它是Siri的超级进化版，装进机器人里它就是《瓦力》或《大白》。",
    topics: ["具身智能 (Embodied AI)", "自动驾驶", "AI 助手"],
    icon: "Bot",
    color: "#10b981" // Emerald
  },
  [LayerType.FUTURE]: {
    id: LayerType.FUTURE,
    title: "你的未来 (Your Path)",
    subtitle: "如何准备 / Learning",
    description: "作为初中生，你不需要现在就造火箭，但你需要懂得如何驾驭AI。逻辑思维比死记硬背更重要。",
    analogy: "别担心AI抢饭碗，学会用AI的人会成为未来的魔法师。",
    topics: ["数学 = 逻辑基础", "编程 = 与机器对话", "想象力 = 提出好问题"],
    icon: "GraduationCap",
    color: "#ec4899" // Pink
  }
};
