import { TESTIMONIALS } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function TestimonialsSection({
  title = 'What Our Learners Say',
  early = false,
  onOpenEnquiry,
}) {
  return (
    <section
      className={
        early
          ? 'border-t border-[rgba(96,165,250,0.18)] bg-[#07152b] py-10 sm:py-12'
          : 'bg-[#0b1931] py-14 sm:py-[72px]'
      }
    >
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Learner experiences"
          title={title}
          description="Hear from learners about their experience with AcceleratorX and the work they have gone on to do."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <article
              key={index}
              className={`rounded-[8px] border p-[22px] ${
                early
                  ? 'border-[rgba(125,181,255,0.18)] bg-[#0d2040] text-[#f4f7ff]'
                  : 'border-[rgba(116,160,239,0.18)] bg-[#0d1b34] text-[#eaf1ff]'
              }`}
            >
              <div className="mb-2 tracking-[2px] text-[#83b5ff]">★★★★★</div>
              <p
                className={`mb-3 text-[13px] ${
                  early ? 'text-[#c0cde2]' : 'text-[#9fb1d1]'
                }`}
              >
                {item.quote}
              </p>
              <strong className="text-[13px] text-[#f4f7ff]">{item.author}</strong>
              <small
                className={`block text-[11px] ${
                  early ? 'text-[#9aacc8]' : 'text-[#8b8499]'
                }`}
              >
                {item.meta}
              </small>
            </article>
          ))}
        </div>

        {onOpenEnquiry && (
          <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
        )}
      </div>
    </section>
  );
}
