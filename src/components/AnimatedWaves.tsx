export function AnimatedWaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.08 }} />
            <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0.08 }} />
          </linearGradient>
        </defs>
        
        <path
          fill="url(#grad1)"
          d="M0,400 C320,450 640,350 960,400 C1280,450 1440,400 1440,400 L1440,800 L0,800 Z"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0,400 C320,450 640,350 960,400 C1280,450 1440,400 1440,400 L1440,800 L0,800 Z;
              M0,350 C320,400 640,450 960,380 C1280,350 1440,420 1440,420 L1440,800 L0,800 Z;
              M0,400 C320,450 640,350 960,400 C1280,450 1440,400 1440,400 L1440,800 L0,800 Z
            "
          />
        </path>
        
        <path
          fill="url(#grad2)"
          d="M0,480 C360,520 720,440 1080,480 C1320,500 1440,480 1440,480 L1440,800 L0,800 Z"
        >
          <animate
            attributeName="d"
            dur="15s"
            repeatCount="indefinite"
            values="
              M0,480 C360,520 720,440 1080,480 C1320,500 1440,480 1440,480 L1440,800 L0,800 Z;
              M0,460 C360,480 720,520 1080,460 C1320,440 1440,500 1440,500 L1440,800 L0,800 Z;
              M0,480 C360,520 720,440 1080,480 C1320,500 1440,480 1440,480 L1440,800 L0,800 Z
            "
          />
        </path>
        
        <path
          fill="url(#grad1)"
          d="M0,560 C400,590 800,530 1200,560 C1360,575 1440,560 1440,560 L1440,800 L0,800 Z"
          opacity="0.5"
        >
          <animate
            attributeName="d"
            dur="20s"
            repeatCount="indefinite"
            values="
              M0,560 C400,590 800,530 1200,560 C1360,575 1440,560 1440,560 L1440,800 L0,800 Z;
              M0,540 C400,560 800,590 1200,540 C1360,530 1440,580 1440,580 L1440,800 L0,800 Z;
              M0,560 C400,590 800,530 1200,560 C1360,575 1440,560 1440,560 L1440,800 L0,800 Z
            "
          />
        </path>
      </svg>
    </div>
  );
}
