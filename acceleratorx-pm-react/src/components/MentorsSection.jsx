import { MENTORS } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function MentorsSection({ onOpenEnquiry }) {
  return (
    <section id="mentors" className="bg-[#09162b] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Product industry mentors"
          title="Learn from Product Leaders"
          description="Learn from product professionals featured in the AI Product Management program brochure."
        />

        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {MENTORS.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-[8px] bg-[#f4f7ff] px-3.5 py-[22px] text-center text-[#152746]"
            >
              <div className="mx-auto mb-3 grid h-[130px] w-full place-items-center rounded-[4px] border border-[rgba(104,163,255,0.22)] bg-gradient-to-br from-[rgba(47,111,231,0.2)] to-[rgba(64,158,255,0.08)] text-[34px] font-black text-[#172847]">
                {mentor.initials}
              </div>
              <strong className="block text-[13px] font-bold text-[#172847]">
                {mentor.name}
              </strong>
              <span className="text-[11px] text-[#607494]">
                {mentor.role}
                <br />
                {mentor.company}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-[18px] text-center text-[11px] text-[#9fb1d1]">
          Mentor profiles and designations are reproduced from the supplied program brochure; reconfirm availability for the active cohort.
        </p>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
