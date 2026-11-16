import { useState } from 'react';
import { TOOLS_LIST } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

function ToolCard({ tool }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex min-h-[108px] flex-col items-center justify-center gap-2.5 rounded-[8px] border border-[rgba(116,160,239,0.18)] bg-[#0d1b34] px-2.5 py-4 text-center font-extrabold text-[#dce8ff]">
      {!imgError ? (
        <img
          src={tool.icon}
          alt={`${tool.name} logo`}
          loading="lazy"
          onError={() => setImgError(true)}
          className="h-[34px] w-[34px] object-contain opacity-[0.82] [filter:grayscale(1)_brightness(0)_invert(1)]"
        />
      ) : (
        <span className="text-[11px] font-bold text-[#8fa6cc]">{tool.name}</span>
      )}
      <span className="text-[12px] font-bold">{tool.name}</span>
    </div>
  );
}

export default function ToolsSection({ onOpenEnquiry }) {
  return (
    <section className="bg-[#09162b] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Product tools and frameworks"
          title="Tools Used by Modern Product Teams"
          description="Work with product, project management, documentation, design, analytics, API testing and AI tools embedded across the program."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {TOOLS_LIST.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>

        <p className="mt-4 text-center text-[10px] text-[#8fa6cc]">
          Brand icons are sourced from Simple Icons. SQL is a technology category rather than a single company brand; its database symbol is illustrative.
        </p>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
