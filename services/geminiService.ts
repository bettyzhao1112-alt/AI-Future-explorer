import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// Note: In a real production app, ensure API keys are not exposed to the client directly if possible,
// or use a proxy. For this demo, we use process.env.API_KEY as requested.
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure process.env.API_KEY.";
  }

  try {
    const model = 'gemini-3-flash-preview'; 
    
    // Construct system instruction to act as a teacher
    const systemInstruction = `
      你是一个风趣幽默、知识渊博的初中科技老师，正在给学生讲关于“AI从物理到虚拟”的课。
      你的目标是激发学生的好奇心，用他们听得懂的语言（游戏、动漫、生活类比）来解释复杂的AI概念。
      
      请遵循以下原则：
      1. **简单易懂**：不要堆砌术语，解释TCP/IP用“快递”，解释算力用“大脑肌肉”。
      2. **鼓励性**：鼓励学生提问，告诉他们数学和逻辑很重要，但想象力更重要。
      3. **关联性**：将问题关联到我们展示的架构图（物理层 -> 网络 -> 虚拟 -> 智能 -> 应用）。
      4. **简短**：回答不要太长，控制在200字以内，像聊天一样。
      5. **表情包**：适当使用Emoji 🤖 🚀 🧠。

      目前的课程内容涵盖：数据中心、光纤、TCP/IP、虚拟世界、智能体、具身智能。
    `;

    // Convert history to Gemini format (limiting context window for efficiency)
    const recentHistory = history.slice(-6); 
    
    // We use a simple generateContent call with system instruction in config
    // Since we don't have persistent chat session in this simple service wrapper,
    // we construct the prompt with history context manually or use the Chat API.
    // Let's use the Chat API for better state management simulation.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: recentHistory.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessage({ message: message });
    return result.text || "抱歉，我的大脑断线了，请重试一下 🤯";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "网络有点拥堵，老师的声音没传过来，请再问一次！📡";
  }
};
