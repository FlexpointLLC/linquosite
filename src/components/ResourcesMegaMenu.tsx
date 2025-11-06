import { 
  Book, 
  Code, 
  Article, 
  Headset,
  GraduationCap,
  FileCode,
  Video,
  Users
} from "@phosphor-icons/react";

function ResourceIcon({ icon }: { icon: React.ReactNode }) {
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

function ResourceText({ title, description }: { title: string; description: string }) {
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

function ResourceItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ResourceIcon icon={icon} />
      <ResourceText title={title} description={description} />
    </div>
  );
}

function ResourceItems() {
  return (
    <>
      <ResourceItem
        icon={<Book size={20} color="#CACFD8" weight="regular" />}
        title="Documentation"
        description="Complete guides and tutorials."
      />
      <ResourceItem
        icon={<Code size={20} color="#CACFD8" weight="regular" />}
        title="API Reference"
        description="Developer API documentation."
      />
      <ResourceItem
        icon={<Article size={20} color="#CACFD8" weight="regular" />}
        title="Blog"
        description="Latest updates and articles."
      />
      <ResourceItem
        icon={<Headset size={20} color="#CACFD8" weight="regular" />}
        title="Support"
        description="Get help from our team."
      />
      <ResourceItem
        icon={<GraduationCap size={20} color="#CACFD8" weight="regular" />}
        title="Tutorials"
        description="Step-by-step learning guides."
      />
      <ResourceItem
        icon={<FileCode size={20} color="#CACFD8" weight="regular" />}
        title="Code Examples"
        description="Ready-to-use code snippets."
      />
      <ResourceItem
        icon={<Video size={20} color="#CACFD8" weight="regular" />}
        title="Video Guides"
        description="Watch and learn visually."
      />
      <ResourceItem
        icon={<Users size={20} color="#CACFD8" weight="regular" />}
        title="Community"
        description="Join our developer community."
      />
    </>
  );
}

export default function ResourcesMegaMenu() {
  return (
    <div className="bg-[#0b0c0d] relative rounded-[12px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch grid grid-cols-3 gap-[24px] overflow-clip p-[24px] relative size-full">
          <ResourceItems />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#18191b] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

