export enum LayerType {
  PHYSICAL = 'PHYSICAL',
  NETWORK = 'NETWORK',
  VIRTUAL_DATA = 'VIRTUAL_DATA',
  INTELLIGENCE = 'INTELLIGENCE',
  APPLICATION = 'APPLICATION',
  FUTURE = 'FUTURE'
}

export interface LayerInfo {
  id: LayerType;
  title: string;
  subtitle: string;
  description: string;
  analogy: string; // "Middle School" analogy
  topics: string[];
  icon: string;
  color: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
