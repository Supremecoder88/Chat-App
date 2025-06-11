const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative overflow-hidden">
      {/* Floating Chat Bubble Animation */}
      <svg
        className="absolute left-1/2 top-10 -translate-x-1/2 animate-float z-0 opacity-30"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="60" cy="60" rx="50" ry="40" fill="#6366f1" />
        <ellipse cx="90" cy="100" rx="15" ry="8" fill="#6366f1" />
      </svg>
      <div className="max-w-xs text-center z-10 flex flex-col items-center">
        {/* Animated Grid of Boxes */}
        <div className="grid grid-cols-3 gap-2 mb-8 w-40 h-40 mx-auto">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 animate-bounce-box${i % 3}`}
              style={{
                animationDelay: `${i * 0.15}s`,
                background:
                  i % 3 === 0
                    ? 'linear-gradient(135deg, #6366f1 60%, #a5b4fc 100%)'
                    : i % 3 === 1
                    ? 'linear-gradient(135deg, #f472b6 60%, #f9a8d4 100%)'
                    : 'linear-gradient(135deg, #34d399 60%, #6ee7b7 100%)',
                opacity: 0.85,
              }}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
      {/* Keyframes for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes bounceBox0 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px) scale(1.08); }
        }
        @keyframes bounceBox1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px) scale(1.12); }
        }
        @keyframes bounceBox2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px) scale(1.04); }
        }
        .animate-bounce-box0 { animation: bounceBox0 2.2s infinite; }
        .animate-bounce-box1 { animation: bounceBox1 2.5s infinite; }
        .animate-bounce-box2 { animation: bounceBox2 2s infinite; }
      `}
      </style>
    </div>
  );
};

export default AuthImagePattern;