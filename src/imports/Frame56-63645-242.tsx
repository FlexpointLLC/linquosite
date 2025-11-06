import svgPaths from "./svg-bum7nltmeh";

function Group() {
  return (
    <div className="absolute bottom-0 left-0 right-[-0.01%] top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="Group">
          <path d={svgPaths.p13cfb900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1d3d3500} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1432b3c0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pdc18d00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3ad60880} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function WordPressBlueLogo() {
  return (
    <div className="absolute left-[16px] overflow-clip size-[42px] top-[15.43px]" data-name="WordPress_blue_logo 1">
      <Group />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="overflow-clip relative rounded-[16px] size-full">
      <WordPressBlueLogo />
    </div>
  );
}