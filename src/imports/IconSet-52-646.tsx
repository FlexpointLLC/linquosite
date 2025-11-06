import svgPaths from "./svg-syecelsfae";

export default function IconSet() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] size-full" data-name="IconSet">
      <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
        <div className="absolute inset-[9.375%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p23520500} fill="var(--fill-0, #CACFD8)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}