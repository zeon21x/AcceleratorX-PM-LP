import { useState } from 'react';
import { CAPSTONE_DATA, CURRICULUM_MODULES } from '../data/programData';
import SectionHeader from './SectionHeader';

function RoadmapToolChip({ tool }) {
  const [imgError, setImgError] = useState(false);

  return (
    <span
      role="img"
      aria-label={tool.name}
      title={tool.name}
      className="inline-flex min-h-[42px] max-w-full flex-[0_1_auto] items-center justify-start gap-2 rounded-[12px] border border-[#d8e2f0] bg-white px-[11px] py-2 shadow-[0_2px_8px_rgba(15,35,65,0.06)] transition duration-150 hover:-translate-y-0.5 hover:border-[#8db6f5] hover:shadow-[0_6px_16px_rgba(25,75,145,0.12)] sm:min-h-[46px] sm:min-w-[108px] sm:gap-2.5 sm:px-3.5 sm:py-[9px]"
    >
      {tool.genericBadge ? (
        <span
          aria-hidden="true"
          className="grid h-[25px] w-[25px] min-w-[25px] flex-[0_0_25px] place-items-center rounded-[7px] bg-[#2457b8] text-[10px] font-extrabold text-white"
        >
          {tool.genericBadge}
        </span>
      ) : !imgError ? (
        <img
          src={tool.icon}
          alt={tool.name}
          loading="lazy"
          onError={() => setImgError(true)}
          className="block h-[25px] w-[25px] max-w-[25px] flex-[0_0_25px] object-contain"
        />
      ) : (
        <span className="grid h-[25px] w-[25px] min-w-[25px] flex-[0_0_25px] place-items-center rounded-[7px] bg-[#2457b8] text-[10px] font-extrabold text-white">
          {tool.fallback}
        </span>
      )}
      <span className="inline-block min-w-0 break-words text-[13px] font-bold leading-[1.25] text-[#172b4d] sm:text-[14px]">
        {tool.name}
      </span>
    </span>
  );
}

export default function CurriculumSection({ onOpenBrochureModal }) {
  return (
    <section
      id="curriculum"
      className="relative bg-[#050b19] pb-16 pt-14 sm:pb-[clamp(76px,8vw,112px)] sm:pt-[72px]"
    >
      <div className="mx-auto w-[min(1180px,calc(100%-24px))] sm:w-[min(1180px,calc(100%-48px))]">
        <SectionHeader
          kicker="18-week curriculum · Core PM + AI Product Management"
          title="Explore the Product Management Roadmap"
          description="Four sessions per week across core product management, AI product execution, weekly case studies and capstone preparation."
          centered
          className="mb-[34px] max-w-[780px]"
        />

        <div className="grid min-w-0 grid-cols-1 items-stretch gap-3.5 rounded-[14px] bg-[#f1f5fc] p-3 shadow-[0_22px_55px_rgba(0,0,0,0.28)] sm:gap-[22px] sm:rounded-[18px] sm:p-[22px] md:grid-cols-2">
          {CURRICULUM_MODULES.map((mod) => (
            <article
              key={mod.number}
              className="flex w-full min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#e0e8f4] bg-white p-5 text-[#162744] sm:p-[clamp(20px,2.2vw,28px)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[10px] font-black tracking-[0.14em] text-[#347dff]">
                  {mod.weeks}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-[10px] border border-[rgba(104,163,255,0.22)] bg-gradient-to-br from-[rgba(47,111,231,0.2)] to-[rgba(64,158,255,0.08)] text-[12px] font-black text-[#347dff]">
                  {mod.number}
                </span>
              </div>

              <h3 className="mb-[9px] break-words text-[20px] font-bold leading-[1.28] text-[#142543] sm:text-[clamp(18px,1.55vw,22px)]">
                {mod.title}
              </h3>

              <p className="mb-[15px] break-words text-[14px] leading-[1.65] text-[#667997]">
                {mod.description}
              </p>

              <div className="mt-3 grid min-w-0 grid-cols-1 gap-[9px] border-t border-[#e4eaf4] pt-3.5">
                <strong className="text-[11px] uppercase leading-[1.4] tracking-[0.08em] text-[#347dff]">
                  What you&apos;ll learn
                </strong>
                <span className="break-words text-[13px] leading-[1.65] text-[#667997]">
                  {mod.learnings}
                </span>
              </div>

              <div className="mt-3 grid min-w-0 grid-cols-1 gap-3 border-t border-[#e4eaf4] pb-3 pt-3.5">
                <strong className="text-[11px] uppercase leading-[1.4] tracking-[0.08em] text-[#347dff]">
                  Tools
                </strong>
                <div
                  aria-label="Tools used in this module"
                  className="flex w-full min-w-0 flex-wrap items-center justify-start gap-2 pb-2 pt-1 sm:gap-2.5"
                >
                  {mod.tools.map((tool) => (
                    <RoadmapToolChip key={tool.name} tool={tool} />
                  ))}
                </div>
              </div>

              <div className="mt-auto grid gap-1 rounded-[10px] border border-[#dbe7fb] bg-[#eef4ff] p-[15px]">
                <strong className="text-[11px] uppercase leading-[1.4] tracking-[0.08em] text-[#347dff]">
                  Applied project
                </strong>
                <span className="break-words text-[13px] leading-[1.65] text-[#526b91]">
                  {mod.project}
                </span>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-6 grid min-w-0 grid-cols-1 items-center gap-[18px] rounded-[10px] border border-[rgba(116,160,239,0.25)] bg-[radial-gradient(ellipse_at_90%_0%,rgba(56,126,246,0.24),transparent_43%),linear-gradient(130deg,#0b1c39,#102d5a)] p-[22px] text-white sm:gap-6 sm:p-[clamp(22px,3vw,34px)] md:grid-cols-[minmax(0,1.5fr)_minmax(240px,0.8fr)]">
          <div className="min-w-0">
            <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8bbaff]">
              {CAPSTONE_DATA.kicker}
            </div>
            <h3 className="my-2 break-words text-[clamp(21px,2.2vw,29px)] font-bold leading-[1.2]">
              {CAPSTONE_DATA.title}
            </h3>
            <p className="text-[13px] leading-[1.7] text-[#e4dcf5]">
              {CAPSTONE_DATA.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-[7px]">
              {CAPSTONE_DATA.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-[30px] border border-[rgba(116,160,239,0.35)] px-2.5 py-1.5 text-[10px] text-[#dceaff]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 gap-3 rounded-[12px] border border-[rgba(116,160,239,0.2)] bg-[rgba(64,129,245,0.1)] p-[18px]">
            <strong className="mb-0.5 text-[13px]">Final deliverables</strong>
            {CAPSTONE_DATA.outcomes.map((outcome) => (
              <span
                key={outcome}
                className="relative break-words pl-[17px] text-[12px] leading-[1.5] text-[#e7def8] before:absolute before:left-0 before:text-[#c7b4ff] before:content-['✓']"
              >
                {outcome}
              </span>
            ))}
          </div>
        </article>

        <div className="mx-auto mt-6 flex w-[min(100%,900px)] flex-col items-stretch justify-between gap-4 rounded-[8px] border border-[#dce7fa] bg-[#f3f7ff] px-[22px] py-[18px] text-left sm:flex-row sm:items-center">
          <div className="grid min-w-0 flex-1 gap-[3px]">
            <strong className="text-[15px] text-[#142b50]">
              Want the complete program details?
            </strong>
            <span className="text-[12px] text-[#61799f]">
              Download the full AI Product Management brochure.
            </span>
          </div>
          <a
            href="/AI_PM_Nano_Degree_Brochure.pdf"
            onClick={(e) => {
              e.preventDefault();
              onOpenBrochureModal('/AI_PM_Nano_Degree_Brochure.pdf', e.currentTarget);
            }}
            className="inline-flex w-full shrink-0 cursor-pointer items-center justify-center rounded-[7px] border border-[rgba(153,190,255,0.25)] bg-gradient-to-br from-[#2563eb] to-[#4b8cff] px-[19px] py-3 text-center text-[14px] font-extrabold text-white shadow-[0_9px_28px_rgba(37,99,235,0.25)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(37,99,235,0.34)] sm:w-auto"
          >
            ↓ Download Full Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
