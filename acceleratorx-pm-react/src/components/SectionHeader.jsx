export default function SectionHeader({
  kicker,
  title,
  description,
  centered = false,
  hideDivider = false,
  className = '',
}) {
  return (
    <div
      className={`mb-7 max-w-[760px] sm:mb-8 ${
        centered ? 'mx-auto text-center' : 'text-left'
      } ${className}`}
    >
      {kicker && (
        <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#70a7ff]">
          {kicker}
        </div>
      )}
      <h2 className="my-2.5 mb-3.5 text-[clamp(29px,3.5vw,42px)] font-bold leading-[1.08] tracking-[-0.05em] text-[#f4f7ff]">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-[700px] text-[15px] leading-[1.65] text-[#9fb2d4] sm:text-[16px] ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
      {!hideDivider && (
        <div
          className={`mt-4 h-[2px] w-[42px] rounded-[3px] bg-gradient-to-r from-[#3478f6] to-[#73b7ff] ${
            centered ? 'mx-auto' : ''
          }`}
        />
      )}
    </div>
  );
}
