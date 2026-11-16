import { FAQS } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function FaqSection({ onOpenEnquiry }) {
  return (
    <section id="faq" className="bg-[#0b1931] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="FAQs"
          title="Frequently Asked Questions"
          description="Find answers about the AI Product Management program, learning format, curriculum and certification."
        />

        <div className="mx-auto max-w-[900px]">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="faq-details my-[9px] mb-2 rounded-[7px] border border-[rgba(116,160,239,0.18)] bg-[#0d1b34] px-[18px] py-4 text-[#eaf1ff]"
            >
              <summary className="flex cursor-pointer items-center justify-between text-[14px] font-extrabold text-[#f0f5ff]">
                <span>{item.q}</span>
              </summary>
              <p className="mt-3 text-[13px] text-[#a4b6d6]">{item.a}</p>
            </details>
          ))}
        </div>

        <SectionCTA label="Talk to an Advisor" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
