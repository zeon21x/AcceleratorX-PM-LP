import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function ExperienceVideoSection({ onOpenEnquiry }) {
  return (
    <section className="bg-[#070f20] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Your learning journey"
          title="What Happens After You Enrol?"
          description="Get a first look at the AcceleratorX learning experience—from accessing your LMS and learning resources to using the tools and platforms that support your progress throughout the program."
          className="mb-7"
        />

        <div className="relative mx-auto mt-[22px] aspect-video w-[min(100%,960px)] overflow-hidden rounded-[12px] border border-[rgba(115,166,235,0.28)] bg-[#050b18] shadow-[0_20px_52px_rgba(0,0,0,0.28)] sm:mt-8 sm:rounded-[18px]">
          <iframe
            src="https://www.youtube.com/embed/P4V_-oVC-l4?playsinline=1&controls=1&rel=0"
            title="What Happens After You Enrol? — AcceleratorX"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="eager"
            referrerPolicy="origin"
            className="absolute inset-0 block h-full w-full border-0"
          />
        </div>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
