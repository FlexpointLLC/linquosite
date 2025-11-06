import svgPaths from "./svg-gr9rts5bxb";
import imgImage38 from "figma:asset/8b3b47cfe246c5d6a37b10943f1a2d6a94aab339.png";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-white w-full">
        <p className="leading-[24px]">{`Linquo has transformed how we design and deliver solutions for our clients. It's become an essential part of our toolset.`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px]">Josh Beck, Director of Engineering @ Beck Tech Co</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white overflow-clip relative rounded-[12px] shrink-0 size-[195px]">
      <div className="absolute h-[292.109px] left-[0.09px] top-[-19.54px] w-[194.817px]" data-name="image 38">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage38} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#171b21] relative rounded-[16px] size-full">
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start justify-center overflow-clip pb-[24px] pt-[40px] px-[24px] relative size-full">
          <Frame2 />
          <div className="absolute h-[48px] left-[14px] top-[25px] w-[55px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 48">
              <path clipRule="evenodd" d={svgPaths.p3b80da80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" opacity="0.1" />
            </svg>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}