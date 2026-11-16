import { HERO_DATA } from '../data/programData';
import ApplicationForm from './ApplicationForm';

export default function Hero({ onFormSuccess }) {
  return (
    <section className="hero-bg relative flex items-center overflow-hidden pb-[38px] pt-[42px] text-[#f5f8ff] sm:py-[66px] sm:pb-[62px] md:min-h-[calc(100svh-72px-58px)]">
      <div className="relative z-10 mx-auto grid w-[min(1210px,calc(100%-30px))] grid-cols-1 items-center gap-[27px] sm:w-[min(1210px,calc(100%-44px))] md:grid-cols-[minmax(0,1.18fr)_minmax(310px,0.72fr)] md:gap-[54px]">
        <div className="min-w-0">
          <div className="mb-[7px] flex flex-wrap items-center gap-2 text-[16px] font-normal text-[#c5d9ff]">
            {HERO_DATA.eyebrowBrand} × {HERO_DATA.eyebrowPartner} {HERO_DATA.eyebrowContext}
          </div>

          <div className="mb-[13px] text-[10px] font-extrabold tracking-[0.19em] text-[#6fa4ff] sm:mb-[17px]">
            {HERO_DATA.programLabel}
          </div>

          <h1 className="mb-[17px] max-w-[620px] text-[39px] font-bold leading-[1.04] tracking-[-0.055em] text-[#f7faff] sm:text-[clamp(43px,5.2vw,66px)]">
            {HERO_DATA.title}
          </h1>

          <p className="mb-[19px] max-w-[590px] text-[16px] leading-[1.7] text-[#b8c9e4]">
            {HERO_DATA.description}
          </p>

          <div className="my-[19px] mb-[21px] flex flex-wrap gap-1.5 sm:gap-2">
            {HERO_DATA.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-[4px] border border-[rgba(135,174,240,0.18)] bg-[rgba(110,158,242,0.08)] px-2 py-[5px] text-[10px] text-[#d4e1f7] sm:px-[10px] sm:py-[6px] sm:text-[11px]"
              >
                {chip}
              </span>
            ))}
          </div>

          <div
            aria-label="AcceleratorX program outcomes and learner metrics"
            className="mt-5 grid w-full max-w-[650px] grid-cols-3 border-t border-[rgba(132,170,231,0.2)] pt-[14px] sm:mt-[30px] sm:pt-[18px]"
          >
            {HERO_DATA.metrics.map((metric, idx) => (
              <div
                key={metric.label}
                className={`min-w-0 py-0.5 ${
                  idx === 0
                    ? 'pr-2.5 sm:pr-[18px]'
                    : idx === HERO_DATA.metrics.length - 1
                      ? 'pl-2.5 sm:pl-5'
                      : 'border-x border-[rgba(132,170,231,0.18)] px-2.5 sm:pl-5 sm:pr-[18px]'
                }`}
              >
                <strong className="block text-[20px] font-bold leading-[1.12] tracking-[-0.035em] text-[#f4f7ff] sm:text-[24px]">
                  {metric.value}
                </strong>
                <span className="mt-1.5 block text-[9px] leading-[1.45] tracking-[0.01em] text-[#9fb4d5] sm:text-[11px]">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <ApplicationForm idPrefix="hero" onSubmitSuccess={onFormSuccess} />
      </div>
    </section>
  );
}
