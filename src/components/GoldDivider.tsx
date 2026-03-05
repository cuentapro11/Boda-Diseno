const GoldDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center w-full max-w-2xl mx-auto py-2 ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-light to-gold opacity-60" />
    <div className="mx-3 flex items-center gap-1">
      <div className="w-1.5 h-1.5 bg-gold rounded-full opacity-50" />
      <div className="w-1 h-1 bg-gold-light rounded-full" />
      <svg className="w-6 h-4 text-gold" viewBox="0 0 24 16" fill="currentColor" opacity="0.7">
        <path d="M12 2C8 2 4 6 2 8C4 10 8 14 12 14C16 14 20 10 22 8C20 6 16 2 12 2ZM12 4C10 6 8 8 12 12C16 8 14 6 12 4Z" />
      </svg>
      <div className="w-1 h-1 bg-gold-light rounded-full" />
      <div className="w-1.5 h-1.5 bg-gold rounded-full opacity-50" />
    </div>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-light to-gold opacity-60" />
  </div>
);

export default GoldDivider;
