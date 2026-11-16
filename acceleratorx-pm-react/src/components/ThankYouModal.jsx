import { useEffect, useRef } from 'react';

export default function ThankYouModal({ isOpen, onClose, onBackToProgram }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', handleKeyDown);
    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <section
      aria-live="polite"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[20001] grid min-h-[100dvh] w-full place-items-center overflow-y-auto bg-[rgba(3,9,22,0.78)] p-4 text-[#edf4ff] backdrop-blur-[9px] sm:p-6"
    >
      <div className="relative w-[min(560px,100%)] rounded-[22px] border border-[rgba(112,163,255,0.3)] bg-gradient-to-br from-[#102344] to-[#0b1830] px-[22px] pb-[26px] pt-[54px] text-center text-[#edf4ff] shadow-[0_28px_90px_rgba(0,0,0,0.48)] sm:px-[34px] sm:pb-[34px] sm:pt-[46px]">
        <button
          ref={closeBtnRef}
          type="button"
          aria-label="Close thank-you message"
          onClick={onClose}
          className="absolute right-3.5 top-[13px] grid h-[38px] w-[38px] cursor-pointer place-items-center rounded-full border border-[rgba(160,190,235,0.24)] bg-[rgba(255,255,255,0.06)] text-[25px] leading-none text-[#f4f7ff] transition hover:border-[rgba(147,197,253,0.65)] hover:bg-[rgba(96,165,250,0.18)]"
        >
          ×
        </button>

        <div
          aria-hidden="true"
          className="mx-auto mb-[18px] grid h-16 w-16 place-items-center rounded-full bg-[#e5f7eb] text-[30px] font-black text-[#168044]"
        >
          ✓
        </div>

        <h1 className="mb-2.5 text-[clamp(30px,4vw,42px)] font-bold text-[#f4f7ff]">
          Thank you for your interest!
        </h1>

        <p className="mx-auto mb-6 max-w-[520px] text-[#a9bddc]">
          Your details have been submitted. An AcceleratorX program advisor will reach out to you shortly.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onBackToProgram}
            className="inline-flex min-w-[145px] cursor-pointer items-center justify-center rounded-[7px] border border-[rgba(153,190,255,0.25)] bg-gradient-to-br from-[#2563eb] to-[#4b8cff] px-[19px] py-3 text-[14px] font-extrabold text-white shadow-[0_9px_28px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,99,235,0.34)]"
          >
            Back to Program
          </button>

          <a
            href="https://wa.me/919916859555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[145px] items-center justify-center rounded-[7px] bg-[#168b54] px-[19px] py-3 text-[14px] font-extrabold text-white shadow-[0_9px_28px_rgba(22,139,84,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#199e60]"
          >
            Chat on WhatsApp
          </a>
        </div>

        <p className="mx-auto mt-5 max-w-[520px] text-[11px] text-[#a9bddc]">
          We look forward to helping you take the next step in your AI product management journey.
        </p>
      </div>
    </section>
  );
}
