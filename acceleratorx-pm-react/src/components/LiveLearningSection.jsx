import { LIVE_LEARNING_CARDS } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function LiveLearningSection({ onOpenEnquiry }) {
  return (
    <section className="bg-gradient-to-br from-[#0b1b39] to-[#102b58] py-14 text-[#f5f8ff] sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Live learning"
          title="Live Classes and Mentor Connect"
          description="Learn through four sessions each week, with practical exercises, product discussions and guidance from industry professionals."
        />

        <div className="grid grid-cols-1 gap-[15px] md:grid-cols-3">
          {LIVE_LEARNING_CARDS.map((card) => (
            <article
              key={card.title}
              className="rounded-[8px] border border-[rgba(113,166,255,0.24)] bg-gradient-to-br from-[#102c59] to-[#0b1c39] p-[22px] text-[#eaf1ff]"
            >
              <div className="text-[11px] font-extrabold uppercase text-[#83b4ff]">
                {card.tag}
              </div>
              <h3 className="mb-[7px] mt-2.5 text-[17px] font-bold text-[#f1f6ff]">
                {card.title}
              </h3>
              <p className="text-[13px] text-[#b4c8e9]">{card.description}</p>
            </article>
          ))}
        </div>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
