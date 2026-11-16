import { useEffect, useRef } from 'react';
import ApplicationForm from './ApplicationForm';

export default function EnquiryModal({ isOpen, onClose, onSubmitSuccess }) {
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', handleKeyDown);
    const focusTimer = window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove('overflow-hidden');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(1,5,14,0.82)] p-5 backdrop-blur-[9px]"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-title"
        className="relative max-h-[calc(100svh-40px)] w-[min(100%,500px)] overflow-auto rounded-[20px] bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-[30px]"
      >
        <button
          type="button"
          aria-label="Close enquiry form"
          onClick={onClose}
          className="absolute right-3.5 top-3 z-10 h-[38px] w-[38px] cursor-pointer rounded-full border-0 bg-[#f1ecfa] text-[25px] leading-none text-[#32136f] transition-colors hover:bg-[#e5dcf8]"
        >
          ×
        </button>

        <ApplicationForm
          idPrefix="modal"
          titleId="enquiry-title"
          inputRef={firstInputRef}
          className="!border-0 !bg-transparent !p-0 !pt-2 !shadow-none"
          onSubmitSuccess={onSubmitSuccess}
        />
      </div>
    </div>
  );
}
