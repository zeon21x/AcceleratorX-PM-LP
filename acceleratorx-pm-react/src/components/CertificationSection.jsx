import { CERTIFICATIONS } from '../data/programData';
import SectionHeader from './SectionHeader';
import SectionCTA from './SectionCTA';

export default function CertificationSection({ onOpenEnquiry }) {
  return (
    <section id="certification" className="bg-[#0b1931] py-14 sm:py-[72px]">
      <div className="mx-auto w-[min(1210px,calc(100%-28px))] sm:w-[min(1210px,calc(100%-44px))]">
        <SectionHeader
          kicker="Program credentials"
          title="AcceleratorX + IBM Certification"
          description="Complete the program and applicable certification requirements to earn the credentials associated with the AI Product Management learning path."
        />

        <div className="mx-auto grid max-w-[1000px] gap-[22px]">
          {CERTIFICATIONS.map((cert) => {
            const isIBM = cert.variant === 'ibm';
            return (
              <article
                key={cert.kicker}
                className="grid grid-cols-1 items-center gap-[15px] rounded-[9px] border border-[rgba(116,160,239,0.18)] bg-[#0d1b34] p-5 md:grid-cols-2 md:gap-[34px] md:p-[30px]"
              >
                <div className={`px-3 py-2.5 ${cert.reverse ? 'md:order-2' : ''}`}>
                  <div className="mb-[9px] text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#70a7ff]">
                    {cert.kicker}
                  </div>
                  <h3 className="mb-3 text-[21px] font-bold leading-[1.2] text-[#f1f6ff] md:text-[23px]">
                    {cert.title}
                  </h3>
                  <p className="max-w-[430px] text-[14px] text-[#9fb1d1]">
                    {cert.description}
                  </p>
                </div>

                <div
                  className={`flex min-h-[220px] items-center justify-center overflow-hidden rounded-[12px] bg-gradient-to-br from-[#122d59] to-[#0b1a34] p-[15px] md:min-h-[245px] ${
                    cert.reverse ? 'md:order-1' : ''
                  }`}
                >
                  <div className="certificate-paper relative flex min-h-[215px] w-[min(100%,390px)] flex-col items-center justify-center border border-[#ded7ec] bg-[#f9fbff] px-6 py-[23px] text-center text-[#1d355c] shadow-[0_12px_28px_rgba(36,16,79,0.13)]">
                    <div
                      className={`text-[10px] font-black ${
                        isIBM
                          ? 'tracking-[0.12em] text-[#1769aa]'
                          : 'tracking-[0.19em] text-[#1c3c73]'
                      }`}
                    >
                      {cert.brand}
                    </div>
                    <div
                      className={`my-3 h-[2px] w-[55px] ${
                        isIBM ? 'bg-[#70b6e8]' : 'bg-[#397ef0]'
                      }`}
                    />
                    <small className="text-[8px] uppercase tracking-[0.15em] text-[#817695]">
                      {cert.smallLabel}
                    </small>
                    <strong className="my-2 whitespace-pre-line font-serif text-[22px] leading-[1.1] text-[#1c3c73]">
                      {cert.certTitle}
                    </strong>
                    <div className="max-w-[245px] text-[10px] text-[#6d6480]">
                      {cert.certSubtitle}
                    </div>
                    <div className="mb-1 mt-2.5 font-serif text-[15px] italic text-[#513b7b]">
                      Learner Name
                    </div>
                    <div className="mt-[17px] flex w-full items-end justify-between text-[8px] text-[#766b8a]">
                      <span>{cert.footerLeft}</span>
                      <span
                        className={`grid h-[35px] w-[35px] place-items-center rounded-full border text-[8px] font-black ${
                          isIBM
                            ? 'border-[#4b9acb] text-[#1769aa]'
                            : 'border-[#8c70c6] text-[#6542a6]'
                        }`}
                      >
                        {cert.seal}
                      </span>
                      <span>{cert.footerRight}</span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-2 text-center text-[10px] text-[#8b8499]">
          Illustrative certificate previews. Final certificate artwork and issuer marks should be replaced with the approved certificate files.
        </div>

        <SectionCTA label="Enquire About This Program" onOpenEnquiry={onOpenEnquiry} />
      </div>
    </section>
  );
}
