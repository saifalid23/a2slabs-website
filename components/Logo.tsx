import React from "react";

interface LogoProps {
    height?: number;
    className?: string;
    showWordmark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ height = 32, className = "", showWordmark = true }) => {
    // Calculate width based on requested height to maintain aspect ratio
    // Symbol aspect ratio is approx 1:1, Wordmark + Symbol is approx 4:1
    const width = showWordmark ? height * 4 : height;

    return (
        <div className={`flex items-center gap-3 ${className}`} style={{ height }}>
            <svg
                viewBox="0 0 100 100"
                height={height}
                width={height}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
            >
                {/* Minimal Monogram / Monark */}
                <path
                    d="M50 15L80 32.5V67.5L50 85L20 67.5V32.5L50 15Z"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinejoin="round"
                />
                <path
                    d="M50 35L63 42.5V57.5L50 65L37 57.5V42.5L50 35Z"
                    fill="currentColor"
                    fillOpacity="0.2"
                    stroke="currentColor"
                    strokeWidth="3"
                />
                <circle cx="50" cy="50" r="4" fill="currentColor" />
            </svg>

            {showWordmark && (
                <span className="flex items-baseline font-sans uppercase tracking-[0.1em] text-white" style={{ fontSize: height * 0.65 }}>
                    <span className="font-extrabold">A2S</span>
                    <span className="font-light ml-1 text-zinc-400">LABS</span>
                </span>
            )}
        </div>
    );
};

export default Logo;
