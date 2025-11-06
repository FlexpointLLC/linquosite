import { Globe, Browser, Rocket, Code, Atom, SquaresFour } from "phosphor-react";

// Platform menu items with icons and descriptions
function PlatformItem({ icon, title, description }: { icon: JSX.Element, title: string, description: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#18191b] overflow-clip relative rounded-[8px] shrink-0 size-[40px]">
        <div className="absolute content-stretch flex items-center justify-center left-1/2 rounded-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="relative shrink-0 size-[20px] text-[#CACFD8]">
            {icon}
          </div>
        </div>
      </div>
      <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-white tracking-[-0.0112px] w-full">
          <p className="leading-[20px]">{title}</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#99a0ae] text-[12px] w-full">
          <p className="leading-[16px]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function FramePlatformsMenu() {
  return (
    <div className="bg-[#0b0c0d] relative rounded-[12px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch grid grid-cols-3 gap-[24px] overflow-clip p-[24px] relative size-full">
          <PlatformItem 
            icon={<Globe size={20} weight="regular" color="#CACFD8" />}
            title="WordPress"
            description="Plugin-based integration for WordPress sites."
          />
          <PlatformItem 
            icon={<Browser size={20} weight="regular" color="#CACFD8" />}
            title="Wix"
            description="Add chat to your Wix site in seconds."
          />
          <PlatformItem 
            icon={<Rocket size={20} weight="regular" color="#CACFD8" />}
            title="Next.js"
            description="Works seamlessly with SSR and edge runtimes."
          />
          <PlatformItem 
            icon={<Code size={20} weight="regular" color="#CACFD8" />}
            title="HTML"
            description="Simple embed code for any HTML site."
          />
          <PlatformItem 
            icon={<Atom size={20} weight="regular" color="#CACFD8" />}
            title="React"
            description="React component for easy integration."
          />
          <PlatformItem 
            icon={<SquaresFour size={20} weight="regular" color="#CACFD8" />}
            title="Framer"
            description="Native integration for Framer sites."
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#18191b] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

