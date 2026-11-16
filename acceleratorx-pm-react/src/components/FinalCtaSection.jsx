export default function FinalCtaSection({ onOpenEnquiry }) {
  return (
    <section className="flex min-h-[42svh] items-center border-t border-[rgba(111,164,255,0.2)] bg-[radial-gradient(ellipse_at_78%_0%,rgba(46,112,233,0.24),transparent_43%),linear-gradient(125deg,#030918,#0b2043)] py-12 text-center text-[#f4f8ff] sm:min-h-[48svh] sm:py-16">
      <div className="mx-auto w-[min(1160px,calc(100%-40px))] text-center">
        <h2 className="mb-2.5 text-[29px] font-bold text-[#f4f7ff] sm:text-[36px]">
          Build Your AI Product Career
        </h2>
        <p className="mx-auto mb-[22px] max-w-[650px] text-[#a9bee2]">
          Build, launch and showcase a product while developing the skills to work across modern product teams and AI-led applications.
        </p>
        <button
          type="button"
          onClick={(e) => onOpenEnquiry(e.currentTarget)}
          className="mx-auto inline-flex cursor-pointer items-center justify-center rounded-[7px] border border-[rgba(153,190,255,0.25)] bg-gradient-to-br from-[#2563eb] to-[#4b8cff] px-[19px] py-3 text-[14px] font-extrabold text-white shadow-[0_9px_28px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,99,235,0.34)]"
        >
          Talk to an Advisor
        </button>
      </div>
    </section>
  );
}
