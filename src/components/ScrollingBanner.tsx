const ScrollingBanner = ({ text, direction = "left" }: { text: string; direction?: "left" | "right" }) => {
    return (
      <div className="w-full overflow-hidden bg-muted/30 text-muted-foreground py-3 border-y border-border">
        <div 
          className="flex whitespace-nowrap animate-scroll"
          style={{
            animation: direction === "left" ? "scroll-left 40s linear infinite" : "scroll-right 40s linear infinite"
          }}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-sm md:text-base font-mono uppercase tracking-[0.2em] mx-8">
              {text}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </div>
    );
  };
  
  export default ScrollingBanner;
  