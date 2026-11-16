import { OVERVIEW_CARDS } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function OverviewSection({ onOpenEnquiry }) {
  return (
    <section className="bg-[#070f20] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="About the program"
          title="AI Product Management Nano Degree"
          description="A build-first program that develops product thinking, execution skills and the ability to apply AI across the product lifecycle."
        />

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
          {OVERVIEW_CARDS.map((card) => (
            <article
              key={card.num}
              className="min-h-[210px] rounded-[8px] border border-[rgba(116,160,239,0.18)] bg-[#0d1b34] p-[22px] text-[#eaf1ff]"
            >
              <div className="grid h-[34px] w-[34px] place-items-center rounded-[8px] border border-[rgba(104,163,255,0.22)] bg-gradient-to-br from-[rgba(47,111,231,0.2)] to-[rgba(64,158,255,0.08)] text-[13px] font-black text-[#83b6ff]">
                {card.num}
              </div>
              <h3 className="mb-[7px] mt-2.5 text-[17px] font-bold text-[#f1f6ff]">
                {card.title}
              </h3>
              <p className="text-[13px] text-[#9fb1d1]">{card.description}</p>
            </article>
          ))}
        </div>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
