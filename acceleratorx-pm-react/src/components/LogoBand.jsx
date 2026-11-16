import { ALUMNI_COMPANIES } from '../data/programData';

export default function LogoBand() {
  return (
    <section className="bg-[#f5f8ff] py-[25px] text-[#112344]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <h3 className="mb-[18px] text-center text-[12px] font-bold uppercase tracking-[0.12em] text-[#53698e]">
          Our alumni work across companies such as
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {ALUMNI_COMPANIES.map((company) => (
            <div
              key={company.name}
              className="flex min-h-[76px] min-w-[125px] flex-col items-center justify-center gap-[7px] rounded-[5px] border border-[#e0e8f5] bg-white px-4 py-[13px] text-center text-[12px] font-bold tracking-[-0.02em] text-[#324b75]"
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`}
                alt={`${company.name} logo`}
                loading="lazy"
                className="h-7 w-auto max-w-[108px] object-contain"
              />
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
