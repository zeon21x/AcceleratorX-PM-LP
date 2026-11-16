import { PROJECT_STEPS } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function ProjectsSection({ onOpenEnquiry }) {
  return (
    <section
      id="projects"
      className="relative bg-[#09162b] pb-14 pt-[62px] sm:pb-[72px] sm:pt-[clamp(72px,7vw,100px)]"
    >
      <div className="pointer-events-none absolute inset-x-[max(24px,calc((100%-1180px)/2))] top-0 h-px bg-gradient-to-r from-transparent via-[rgba(105,151,218,0.24)] to-transparent" />

      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Build Your Dream Product"
          title="Build a Product You Can Showcase"
          description="Apply product thinking and AI-led execution to a real product journey—from identifying a problem to launching and presenting your solution."
        />

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_STEPS.map((step) => (
            <article
              key={step.num}
              className="min-h-[170px] rounded-[8px] border border-[rgba(105,158,255,0.2)] bg-gradient-to-br from-[#0c1c38] to-[#081329] p-[22px] text-[#eaf1ff]"
            >
              <div className="grid h-[34px] w-[34px] place-items-center rounded-[8px] border border-[rgba(104,163,255,0.22)] bg-gradient-to-br from-[rgba(47,111,231,0.2)] to-[rgba(64,158,255,0.08)] text-[13px] font-black text-[#83b6ff]">
                {step.num}
              </div>
              <h3 className="mb-[7px] mt-2.5 text-[17px] font-bold text-[#f1f6ff]">
                {step.title}
              </h3>
              <p className="text-[13px] text-[#9fb1d1]">{step.description}</p>
            </article>
          ))}
        </div>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
