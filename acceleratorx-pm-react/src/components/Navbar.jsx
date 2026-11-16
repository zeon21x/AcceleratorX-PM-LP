export default function Navbar({ onOpenEnquiry }) {
  return (
    <header className="sticky top-0 z-40 border-b border-[rgba(111,159,255,0.17)] bg-[rgba(5,13,29,0.94)] text-[#f3f7ff] backdrop-blur-[18px]">
      <div className="mx-auto flex h-14 w-[min(1210px,calc(100%-28px))] items-center justify-between gap-2.5 sm:h-[72px] sm:w-[min(1210px,calc(100%-44px))] sm:gap-6">
        <a
          href="#top"
          className="text-[18px] font-extrabold tracking-[0.07em] text-white sm:text-[20px]"
        >
          ACCELERATOR<span className="text-[#6da2ff]">X</span>
        </a>

        <nav className="hidden items-center gap-[26px] text-[13px] text-[#c0cde5] md:flex">
          <a href="#curriculum" className="transition-colors hover:text-[#78aaff]">
            Curriculum
          </a>
          <a href="#mentors" className="transition-colors hover:text-[#78aaff]">
            Mentors
          </a>
          <a href="#projects" className="transition-colors hover:text-[#78aaff]">
            Projects
          </a>
          <a href="#certification" className="transition-colors hover:text-[#78aaff]">
            Certification
          </a>
          <a href="#faq" className="transition-colors hover:text-[#78aaff]">
            FAQs
          </a>
        </nav>

        <button
          type="button"
          onClick={(e) => onOpenEnquiry(e.currentTarget)}
          className="inline-flex cursor-pointer items-center justify-center rounded-[7px] border border-[rgba(153,190,255,0.25)] bg-gradient-to-br from-[#2563eb] to-[#4b8cff] px-3 py-2 text-[12px] font-extrabold text-white shadow-[0_9px_28px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,99,235,0.34)] sm:px-[17px] sm:py-[10px] sm:text-[14px]"
        >
          Apply Now
        </button>
      </div>
    </header>
  );
}
