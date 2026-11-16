export default function SectionCTA({ label = 'Enquire About This Program', onOpenEnquiry }) {
  return (
    <div className="mx-auto mt-7 flex max-w-[1160px] flex-col items-center justify-center border-t border-[rgba(111,164,255,0.17)] pt-5 text-center">
      <button
        type="button"
        onClick={(e) => onOpenEnquiry(e.currentTarget)}
        className="inline-flex min-h-[44px] min-w-[190px] cursor-pointer items-center justify-center rounded-[7px] border border-[rgba(153,190,255,0.25)] bg-gradient-to-br from-[#2563eb] to-[#4b8cff] px-[22px] py-[11px] text-[13px] font-extrabold text-white shadow-[0_9px_28px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,99,235,0.34)] max-[560px]:w-[min(100%,320px)]"
      >
        {label}
      </button>
    </div>
  );
}
