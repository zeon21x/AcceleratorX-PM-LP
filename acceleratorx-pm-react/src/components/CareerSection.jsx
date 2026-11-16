import { CAREER_ROLES, CAREER_SERVICES } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function CareerSection({ onOpenEnquiry }) {
  return (
    <section className="bg-[#070f20] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <div className="relative isolate grid grid-cols-1 items-center gap-[22px] overflow-hidden rounded-[20px] border border-[rgba(110,161,255,0.24)] bg-gradient-to-br from-[#102b56] to-[#0b1c39] p-[21px_16px] shadow-[0_22px_55px_rgba(0,25,23,0.18)] sm:p-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-[34px] lg:p-[38px]">
          <div className="relative z-10 flex flex-col justify-center py-1 pr-2 text-[#f5fffd]">
            <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#70a7ff]">
              Career support
            </div>
            <h3 className="my-3.5 max-w-[390px] text-[clamp(26px,3vw,36px)] font-bold leading-[1.08] tracking-[-0.04em] text-[#f5f8ff]">
              Prepare for Your Next Career Move
            </h3>
            <p className="max-w-[390px] text-[14px] leading-[1.75] text-[#b2c6e7]">
              Build confidence in product thinking, communicate trade-offs and showcase the product work you have completed.
            </p>
            <div className="mt-5 flex items-center gap-2.5 text-[11px] font-semibold text-[#9ec5be] sm:mt-[27px]">
              <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-[9px] border border-[rgba(0,230,203,0.24)] bg-[rgba(0,230,203,0.1)] text-[16px] text-[#00e6cb]">
                ✦
              </span>
              <span>Career guidance to help you prepare for product opportunities.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {CAREER_SERVICES.map((service) => (
              <div
                key={service.num}
                className="grid min-h-[116px] grid-cols-[32px_1fr_16px] items-start gap-[11px] rounded-[12px] border border-[rgba(115,166,235,0.22)] bg-[radial-gradient(ellipse_at_8%_0%,rgba(37,99,235,0.12),transparent_52%),linear-gradient(145deg,rgba(17,39,70,0.96),rgba(8,23,44,0.98))] p-[17px_14px] shadow-[0_12px_30px_rgba(0,0,0,0.13),inset_0_1px_0_rgba(255,255,255,0.035)] transition duration-200 hover:-translate-y-[3px] hover:border-[rgba(96,165,250,0.48)] hover:bg-[radial-gradient(ellipse_at_8%_0%,rgba(37,99,235,0.18),transparent_52%),linear-gradient(145deg,#142f54,#0a1d38)]"
              >
                <span className="grid h-[31px] w-[31px] place-items-center rounded-[8px] border border-[rgba(96,165,250,0.28)] bg-[rgba(37,99,235,0.14)] text-[10px] font-black text-[#8bbcff]">
                  {service.num}
                </span>
                <div>
                  <strong className="mb-1.5 mt-0.5 block text-[13px] leading-[1.35] text-[#f1f6ff]">
                    {service.title}
                  </strong>
                  <small className="block text-[11px] leading-[1.5] text-[#aebfda]">
                    {service.description}
                  </small>
                </div>
                <span className="self-start text-[16px] font-extrabold text-[#78adff]">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>

        <SectionHeader
          title="Prepare for Your Next Product Role"
          description="Build confidence in your product thinking, communicate your decisions and showcase the work you have built."
          className="mb-[22px] mt-12"
        />

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {CAREER_ROLES.map((role) => (
            <div
              key={role.title}
              className="rounded-[8px] border border-[rgba(116,160,239,0.18)] bg-[#0d1b34] px-3 py-[19px] text-center"
            >
              <strong className="block text-[16px] text-[#f1f6ff]">{role.title}</strong>
              <span className="text-[11px] text-[#9eb3d7]">{role.subtitle}</span>
            </div>
          ))}
        </div>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
