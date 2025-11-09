import { Card } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-zinc-900/50 border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:bg-zinc-900/80 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 transition-all duration-300 group-hover:from-indigo-500/5 group-hover:to-purple-500/5" />
      <div className="relative p-6">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 transition-transform duration-300 group-hover:scale-110">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-white">{title}</h3>
          <p className="text-zinc-400">{description}</p>
        </div>
      </div>
    </Card>
  );
}
