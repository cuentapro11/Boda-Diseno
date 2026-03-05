const OrnamentalCorners = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {/* Top-left */}
    <svg className="absolute top-0 left-0 w-16 h-16 text-gold-light" viewBox="0 0 64 64" fill="none">
      <path d="M4 4 L4 24 Q4 4 24 4 L4 4Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="8" cy="8" r="3" fill="currentColor" opacity="0.5" />
      <path d="M12 4 Q8 8 4 12" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M20 4 Q10 10 4 20" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
    {/* Top-right */}
    <svg className="absolute top-0 right-0 w-16 h-16 text-gold-light" viewBox="0 0 64 64" fill="none">
      <path d="M60 4 L60 24 Q60 4 40 4 L60 4Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="56" cy="8" r="3" fill="currentColor" opacity="0.5" />
      <path d="M52 4 Q56 8 60 12" stroke="currentColor" strokeWidth="0.5" fill="none" />
      <path d="M44 4 Q54 10 60 20" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
    </svg>
    {/* Bottom-left */}
    <svg className="absolute bottom-0 left-0 w-16 h-16 text-gold-light" viewBox="0 0 64 64" fill="none">
      <path d="M4 60 L4 40 Q4 60 24 60 L4 60Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="8" cy="56" r="3" fill="currentColor" opacity="0.5" />
      <path d="M12 60 Q8 56 4 52" stroke="currentColor" strokeWidth="0.5" fill="none" />
    </svg>
    {/* Bottom-right */}
    <svg className="absolute bottom-0 right-0 w-16 h-16 text-gold-light" viewBox="0 0 64 64" fill="none">
      <path d="M60 60 L60 40 Q60 60 40 60 L60 60Z" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="56" cy="56" r="3" fill="currentColor" opacity="0.5" />
      <path d="M52 60 Q56 56 60 52" stroke="currentColor" strokeWidth="0.5" fill="none" />
    </svg>
  </div>
);

export default OrnamentalCorners;
