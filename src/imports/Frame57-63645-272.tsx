import svgPaths from "./svg-oss9b947l2";

function NextjsLogo() {
  return (
    <div className="absolute inset-[41.76%_12.16%_42.02%_12.16%]" data-name="Nextjs-logo 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 12">
        <g clipPath="url(#clip0_63642_7975)" id="Nextjs-logo 1">
          <path d={svgPaths.p25ff1000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p283ec800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3f6cdb00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3f6a50f0} fill="var(--fill-0, white)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p3206f300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_5" />
          <path d={svgPaths.pcf60300} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p35745900} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p9167300} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_63642_7975">
            <rect fill="white" height="12" width="56" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="overflow-clip relative rounded-[16px] size-full">
      <NextjsLogo />
    </div>
  );
}