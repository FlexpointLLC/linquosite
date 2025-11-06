import { Article, Briefcase, List, Handshake, Book, ChatCircle } from "phosphor-react";

// Resource menu items with icons and descriptions
function ResourceItem({ icon, title, description, href, target }: { icon: JSX.Element, title: string, description: string, href: string, target?: string }) {
  return (
    <a 
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-80"
    >
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
    </a>
  );
}

export default function FrameResourcesMenu() {
  return (
    <div className="bg-[#0b0c0d] relative rounded-[12px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch grid grid-cols-3 gap-[24px] overflow-clip p-[24px] relative size-full">
          <ResourceItem 
            icon={<Article size={20} weight="regular" color="#CACFD8" />}
            title="Blogs"
            description="Read our latest updates and insights."
            href="https://linquo.webflow.io/blog"
            target="_blank"
          />
          <ResourceItem 
            icon={<Briefcase size={20} weight="regular" color="#CACFD8" />}
            title="Career"
            description="Join our growing team."
            href="/career"
          />
          <ResourceItem 
            icon={<List size={20} weight="regular" color="#CACFD8" />}
            title="Change log"
            description="See what's new and improved."
            href="https://linquo.canny.io/changelog"
            target="_blank"
          />
          <ResourceItem 
            icon={<Handshake size={20} weight="regular" color="#CACFD8" />}
            title="Become a partner"
            description="Partner with us and grow together."
            href="/partner"
          />
          <ResourceItem 
            icon={<Book size={20} weight="regular" color="#CACFD8" />}
            title="Documentation"
            description="Complete guides and API reference."
            href="/doc"
          />
          <ResourceItem 
            icon={<ChatCircle size={20} weight="regular" color="#CACFD8" />}
            title="Support"
            description="Get help when you need it."
            href="/contact-us"
          />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#18191b] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

