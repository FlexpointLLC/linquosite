import { 
  Globe, 
  Code, 
  DeviceMobile, 
  Browser, 
  FileText, 
  Wrench 
} from "@phosphor-icons/react";

function PlatformIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="bg-[#18191b] overflow-clip relative rounded-[8px] shrink-0 size-[40px]">
      <div className="absolute content-stretch flex items-center justify-center left-1/2 rounded-[8px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="IconSet">
        <div className="relative shrink-0 size-[20px]" data-name="Weight=Regular">
          {icon}
        </div>
      </div>
    </div>
  );
}

function PlatformText({ title, description }: { title: string; description: string }) {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start leading-[0] min-h-px min-w-px not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-white tracking-[-0.0112px] w-full">
        <p className="leading-[20px]">{title}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#99a0ae] text-[12px] w-full">
        <p className="leading-[16px]">{description}</p>
      </div>
    </div>
  );
}

function PlatformItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <PlatformIcon icon={icon} />
      <PlatformText title={title} description={description} />
    </div>
  );
}

function PlatformItems() {
  return (
    <>
      <PlatformItem
        icon={<Globe size={20} color="#CACFD8" weight="regular" />}
        title="Webflow"
        description="Seamless integration with Webflow sites."
      />
      <PlatformItem
        icon={<Code size={20} color="#CACFD8" weight="regular" />}
        title="Framer"
        description="Add chat support to your Framer projects."
      />
      <PlatformItem
        icon={<DeviceMobile size={20} color="#CACFD8" weight="regular" />}
        title="Next.js"
        description="React-based chat widget for Next.js apps."
      />
      <PlatformItem
        icon={<Browser size={20} color="#CACFD8" weight="regular" />}
        title="React"
        description="Easy integration with React applications."
      />
      <PlatformItem
        icon={<FileText size={20} color="#CACFD8" weight="regular" />}
        title="WordPress"
        description="Plugin for WordPress websites."
      />
      <PlatformItem
        icon={<Wrench size={20} color="#CACFD8" weight="regular" />}
        title="Wix"
        description="Add chat support to your Wix site."
      />
    </>
  );
}

export default function PlatformMegaMenu() {
  return (
    <div className="bg-[#0b0c0d] relative rounded-[12px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch grid grid-cols-3 gap-[24px] overflow-clip p-[24px] relative size-full">
          <PlatformItems />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#18191b] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

