export default function Logo({ height = 40 }: { height?: number }) {
  return (
    <svg 
      height={height} 
      viewBox="0 0 200 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      {/* Outer subtle Hexagon Frame */}
      <path 
        d="M24 4L41.3205 14V34L24 44L6.67949 34V14L24 4Z" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeOpacity="0.2"
      />
      {/* Inner Hexagon Core */}
      <path 
        d="M24 12L34.3923 18V30L24 36L13.6077 30V18L24 12Z" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      
      {/* Central Node Dot */}
      <circle cx="24" cy="24" r="2.5" fill="currentColor" />

      {/* Wordmark A2S */}
      <text 
        x="52" 
        y="30" 
        fontFamily="var(--font-inter), sans-serif" 
        fontSize="20" 
        fontWeight="bold" 
        fill="currentColor"
        letterSpacing="-0.02em"
      >
        A2S
      </text>
      
      {/* Wordmark LABS */}
      <text 
        x="98" 
        y="30" 
        fontFamily="var(--font-mono), monospace" 
        fontSize="16" 
        fontWeight="400" 
        fill="currentColor"
        fillOpacity="0.5"
        letterSpacing="0.05em"
      >
        LABS
      </text>
    </svg>
  );
}
