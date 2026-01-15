import React from 'react';
import { Server, Globe, Cpu, Bot, Zap, GraduationCap, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const icons: Record<string, React.FC<LucideProps>> = {
    Server,
    Globe,
    Cpu,
    Bot,
    Zap,
    GraduationCap
  };

  const IconComponent = icons[name] || Bot;
  return <IconComponent {...props} />;
};
