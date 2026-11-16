import { FEEDBACK_CARDS } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function MentorshipSection({ onOpenEnquiry }) {
  return (
    <section className="bg-[#0b1931] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Mentorship"
          title="Get Feedback on Your Product Work"
          description="Receive guidance as you make product decisions, work through case studies and build your own product."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEEDBACK_CARDS.map((card) => (
            <article
              key={card.num}
              className="rounded-[8px] border border-[rgba(116,160,239,0.18)] bg-[#0c1a33] p-[19px] text-[#eaf1ff]"
            >
              <div className="grid h-[34px] w-[34px] place-items-center rounded-[8px] border border-[rgba(104,163,255,0.22)] bg-gradient-to-br from-[rgba(47,111,231,0.2)] to-[rgba(64,158,255,0.08)] text-[13px] font-black text-[#83b6ff]">
                {card.num}
              </div>
              <h3 className="mb-[7px] mt-2.5 text-[14px] font-bold text-[#f1f6ff]">
                {card.title}
              </h3>
              <p className="text-[12px] text-[#9fb1d1]">{card.description}</p>
            </article>
          ))}
        </div>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
