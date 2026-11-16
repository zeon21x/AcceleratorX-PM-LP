export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="border-t border-[rgba(111,164,255,0.17)] bg-[#030816] py-[30px] text-[12px] text-[#92a8ce]"
    >
      <div className="mx-auto flex w-[min(1210px,calc(100%-28px))] flex-wrap justify-between gap-5 sm:w-[min(1210px,calc(100%-44px))]">
        <div>
          <strong className="text-[#edf4ff]">ACCELERATORX</strong>
          <br />
          AI Product Management Program
        </div>
        <div>AcceleratorX.org · @acceleratorxorg</div>
        <div>Program information and fee are subject to confirmation for the active cohort.</div>
      </div>
    </footer>
  );
}
