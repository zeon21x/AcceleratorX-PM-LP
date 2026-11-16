import { BENEFIT_TRACKS } from '../data/programData';
import SectionCTA from './SectionCTA';

export default function BenefitsSection({ onOpenEnquiry }) {
  return (
    <section className="relative overflow-hidden bg-[#071326] py-14 sm:py-[72px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(96,165,250,0.28)] to-transparent" />

      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <div className="mx-auto mb-7 max-w-[760px] text-center sm:mb-[42px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(96,165,250,0.22)] bg-[rgba(37,99,235,0.08)] px-3 py-[7px] text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#78adff]">
            Program benefits
          </div>
          <h2 className="my-3.5 text-[clamp(29px,3.5vw,42px)] font-bold leading-[1.08] tracking-[-0.045em] text-[#f4f7ff]">
            Build the AI Product Advantage
          </h2>
          <p className="mx-auto max-w-[650px] text-[16px] leading-[1.65] text-[#a8bad6] sm:text-[17px]">
            Develop the judgement, execution skills and practical experience to take a product from idea to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-[22px]">
          {BENEFIT_TRACKS.map((track) => (
            <article
              key={track.index}
              className="relative min-w-0 rounded-[20px] border border-[rgba(115,166,235,0.19)] bg-[radial-gradient(ellipse_at_8%_0%,rgba(37,99,235,0.13),transparent_48%),linear-gradient(145deg,rgba(17,39,70,0.94),rgba(8,23,44,0.96))] p-[24px_22px_20px] shadow-[0_16px_44px_rgba(0,0,0,0.14),inset_0_1px_0_rgba(255,255,255,0.035)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(96,165,250,0.42)] hover:shadow-[0_22px_52px_rgba(0,0,0,0.2),0_0_0_1px_rgba(96,165,250,0.06)] sm:p-[30px_32px_26px]"
            >
              <div className="mb-[18px] flex items-center gap-3">
                <span className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-gradient-to-br from-[#3478e5] to-[#1e4fa8] text-[12px] font-extrabold tracking-[0.04em] text-[#dceaff] shadow-[0_6px_18px_rgba(37,99,235,0.24)]">
                  {track.index}
                </span>
                <span className="text-[11px] font-extrabold tracking-[0.16em] text-[#77adff]">
                  {track.label}
                </span>
              </div>

              <h3 className="m-0 text-[clamp(21px,2vw,27px)] font-bold leading-[1.2] tracking-[-0.035em] text-[#f3f7ff]">
                {track.title}
              </h3>

              <p className="mb-[22px] mt-2.5 max-w-[510px] text-[14px] leading-[1.65] text-[#9eb2cf] md:min-h-[48px]">
                {track.intro}
              </p>

              <ul className="benefit-counter-list m-0 list-none border-t border-[rgba(132,169,218,0.15)] p-0">
                {track.items.map((item) => (
                  <li
                    key={item}
                    className="benefit-counter-item flex items-start gap-[13px] border-b border-[rgba(132,169,218,0.12)] px-0.5 py-[15px] text-[15px] leading-[1.5] text-[#c1d0e5] last:border-b-0 last:pb-0.5"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
