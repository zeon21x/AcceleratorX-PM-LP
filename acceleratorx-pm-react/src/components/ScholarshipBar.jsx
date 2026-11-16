import { useEffect, useState } from 'react';

const STORAGE_KEY = 'acceleratorxScholarshipEnquiryTimer';

function getRemainingSeconds(deadline) {
  return Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
}

export default function ScholarshipBar({ onOpenEnquiry }) {
  const [secondsLeft, setSecondsLeft] = useState(() => {
    const saved = Number(sessionStorage.getItem(STORAGE_KEY));
    if (saved) {
      return getRemainingSeconds(saved);
    }
    const nextDeadline = Date.now() + 15 * 60 * 1000;
    sessionStorage.setItem(STORAGE_KEY, String(nextDeadline));
    return 15 * 60;
  });

  useEffect(() => {
    let deadline = Number(sessionStorage.getItem(STORAGE_KEY));
    if (!deadline) {
      deadline = Date.now() + 15 * 60 * 1000;
      sessionStorage.setItem(STORAGE_KEY, String(deadline));
    }

    const update = () => {
      setSecondsLeft(getRemainingSeconds(deadline));
    };

    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const secs = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div
      role="region"
      aria-label="Scholarship information"
      className="fixed inset-x-0 bottom-0 z-[10000] min-h-[70px] border-t border-[rgba(102,158,255,0.3)] bg-[rgba(3,9,22,0.96)] text-[11px] text-[#eaf2ff] shadow-[0_-8px_30px_rgba(0,0,0,0.4)] backdrop-blur-[15px] sm:min-h-[58px]"
    >
      <div className="mx-auto flex min-h-[66px] w-full flex-wrap items-center justify-center gap-x-[9px] gap-y-1.5 px-2.5 py-[7px] sm:min-h-[52px] sm:w-[min(1160px,calc(100%-32px))] sm:flex-nowrap sm:gap-[13px] sm:whitespace-nowrap sm:px-0">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5df9e] px-[7px] py-1 text-[9px] font-black uppercase tracking-[0.04em] text-[#39234b] sm:px-[9px] sm:py-[5px] sm:text-[10px]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#c47b19]" />
          Limited scholarships
        </span>

        <span className="text-[10px] font-extrabold sm:text-[11px]">
          <strong className="text-[11px] font-extrabold sm:text-[12px]">13 of 20</strong> scholarships filled{' '}
          <span className="hidden text-[#9fb2d4] sm:inline">· 7 shown as remaining</span>
        </span>

        <span
          role="img"
          aria-label="13 of 20 scholarships filled"
          className="hidden h-[5px] w-12 overflow-hidden rounded-[20px] bg-[#2a3b5c] min-[390px]:block sm:w-[76px]"
        >
          <span className="block h-full w-[65%] rounded-[20px] bg-[#7a4acb]" />
        </span>

        <span className="hidden text-[10px] text-[#9fb2d4] sm:inline">Enquiry timer</span>

        <span
          aria-live="off"
          aria-label={secondsLeft === 0 ? 'Enquiry timer ended' : undefined}
          className="inline-block min-w-[43px] rounded-[5px] bg-[#3478f6] px-1.5 py-1 text-center font-black tabular-nums text-[10px] text-white sm:min-w-[48px] sm:px-2 sm:py-[5px] sm:text-[11px]"
        >
          {mins}:{secs}
        </span>

        <button
          type="button"
          onClick={(e) => onOpenEnquiry(e.currentTarget)}
          className="cursor-pointer rounded-[6px] bg-[#38234d] px-[9px] py-1.5 text-[10px] font-extrabold text-[#83b6ff] transition-colors hover:bg-[#492f63] sm:px-3 sm:py-2 sm:text-[11px]"
        >
          Enquire now <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
