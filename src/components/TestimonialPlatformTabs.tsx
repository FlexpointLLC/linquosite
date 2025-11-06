function PlatformTab({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`basis-0 ${isActive ? "bg-[#2f333e] shadow-[0px_2px_4px_0px_rgba(14,18,27,0.03),0px_6px_10px_0px_rgba(14,18,27,0.06)]" : ""} grow min-h-px min-w-[65px] relative rounded-[8px] shrink-0 transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <div className="flex flex-row items-center justify-center min-w-inherit size-full">
        <div className="box-border content-center flex flex-wrap gap-[4px] items-center justify-center min-w-inherit p-[4px] relative w-full">
          <div className="content-stretch flex flex-col items-center justify-center relative rounded-[8px] shrink-0">
            <p className={`font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-center ${isActive ? "text-white" : "text-[#99a0ae]"} tracking-[-0.0112px] w-full transition-colors duration-300 ease-in-out`}>
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialPlatformTabs({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (tab: number) => void }) {
  const platforms = ["Webflow", "Framer", "Next.js", "React"];
  
  return (
    <div className="bg-[#171b21] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[3px] items-center p-[4px] relative w-full">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0 transition-all duration-200"
            >
              <PlatformTab
                label={platform}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
