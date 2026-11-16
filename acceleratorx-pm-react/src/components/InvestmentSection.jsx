import { PRICING_FEATURES } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function InvestmentSection({ onOpenEnquiry }) {
  return (
    <section className="bg-[#070f20] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Program investment"
          title="AI Product Management Program Fee"
          description="An 18-week product management learning path with core PM foundations, AI product execution, case studies and a build-first product experience."
        />

        <div className="relative mx-auto max-w-[740px] overflow-hidden rounded-[10px] bg-gradient-to-br from-[#f8fbff] to-[#eaf2ff] p-[25px] text-center text-[#12284c] shadow-[0_26px_65px_rgba(0,0,0,0.3)] sm:p-[38px]">
          <div className="absolute inset-x-0 top-0 h-[5px] bg-gradient-to-r from-[#2563eb] to-[#60a5fa]" />

          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#2769dc]">
            AcceleratorX + IBM
          </div>
          <div className="my-2 text-[42px] font-black tracking-[-0.04em] text-[#10254a]">
            ₹59,999 <span className="text-[15px] font-semibold">+ GST</span>
          </div>

          <ul className="my-5 list-disc columns-1 pl-[18px] text-left text-[13px] text-[#476084] sm:columns-2">
            {PRICING_FEATURES.map((feat) => (
              <li key={feat} className="my-[7px] break-inside-avoid">
                {feat}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={(e) => onOpenEnquiry(e.currentTarget)}
            className="inline-flex min-w-[160px] cursor-pointer items-center justify-center rounded-[7px] border border-[rgba(153,190,255,0.25)] bg-gradient-to-br from-[#2563eb] to-[#4b8cff] px-[19px] py-3 text-[14px] font-extrabold text-white shadow-[0_9px_28px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,99,235,0.34)]"
          >
            Apply Now
          </button>
        </div>

        <SectionCTA label="Enquire About the Fee" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
