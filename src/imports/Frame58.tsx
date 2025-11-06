import svgPaths from "./svg-qvju3moo9y";
import { imgGroup } from "./svg-t1vdz";

function Group() {
  return (
    <div className="absolute bottom-0 left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[45.807px_18px] right-[0.42%] top-0" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 18">
        <g id="Group">
          <path d={svgPaths.p294bad80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p9397f00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1d6d2c00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute bottom-0 contents left-0 right-[0.42%] top-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function WixLogoB1() {
  return (
    <div className="absolute h-[18px] left-[14px] overflow-clip top-[27.7px] w-[46px]" data-name="Wix logoB 1">
      <ClipPathGroup />
    </div>
  );
}

export default function Frame58() {
  return (
    <div className="overflow-clip relative rounded-[16px] size-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <rect fill="url(#paint0_linear_frame58)" height="74" rx="16" width="74" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_frame58" x1="-2.74999e-07" x2="67.6849" y1="2.06124" y2="70.4998">
            <stop stopColor="#414C56" />
            <stop offset="0.642619" stopColor="#21262C" />
          </linearGradient>
        </defs>
      </svg>
      <WixLogoB1 />
    </div>
  );
}