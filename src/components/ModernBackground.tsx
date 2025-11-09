export function ModernBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Dot grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Radial gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" 
        style={{ animationDuration: '4s' }} 
      />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" 
        style={{ animationDuration: '6s', animationDelay: '1s' }} 
      />
      <div className="absolute bottom-0 left-1/2 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[100px] animate-pulse" 
        style={{ animationDuration: '5s', animationDelay: '2s' }} 
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </div>
  );
}
