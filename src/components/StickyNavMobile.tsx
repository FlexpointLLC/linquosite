import { useState } from "react";
import svgPaths from "../imports/svg-ijlanusy8x";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

function Logo2() {
  return (
    <div className="absolute left-1/2 size-[20.97px] top-0 translate-x-[-50%]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_63642_7711)" id="Logo">
          <path clipRule="evenodd" d={svgPaths.p32110d80} fill="var(--fill-0, white)" fillRule="evenodd" id="Subtract" />
          <rect fill="var(--fill-0, white)" height="3.72055" id="Rectangle 42" rx="0.507348" transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 11.2441 6.0498)" width="1.0147" />
          <rect fill="var(--fill-0, white)" height="3.72055" id="Rectangle 43" rx="0.507348" transform="matrix(-0.999126 0.0417903 0.0417903 0.999126 6.16406 6.29565)" width="1.0147" />
        </g>
        <defs>
          <clipPath id="clip0_63642_7711">
            <rect fill="white" height="20.9704" width="20.9704" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 overflow-clip relative size-[20.97px]" data-name="Logo">
      <Logo2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Logo3 />
      <div className="[grid-area:1_/_1] h-[16.594px] ml-[24.17px] mt-[1.722px] relative w-[56.211px]" data-name="Linquo">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 17">
            <g id="Linquo">
              <path d={svgPaths.p2570d580} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1452d680} fill="var(--fill-0, white)" />
              <path d={svgPaths.p37864380} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3061c080} fill="var(--fill-0, white)" />
              <path d={svgPaths.p39135880} fill="var(--fill-0, white)" />
              <path d={svgPaths.p39160600} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <Group4 />
    </div>
  );
}

interface StickyNavMobileProps {
  scale: number;
}

export default function StickyNavMobile({ scale }: StickyNavMobileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
      }}
    >
      <div className="backdrop-blur-[10.2px] backdrop-filter bg-[rgba(14,17,22,0.5)] w-[390px]">
        <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[24px] py-[16px] relative rounded-[inherit] w-[390px]">
          <Frame29 />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" 
            data-name="IconSet"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="size-[24px]" color="#CACFD8" />
            ) : (
              <div className="relative shrink-0 size-[24px]" data-name="Weight=Regular">
                <div className="absolute inset-[21.88%_12.5%]" data-name="Vector">
                  <div className="absolute inset-0" style={{ "--fill-0": "#CACFD8" } as React.CSSProperties}>
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14">
                      <path d={svgPaths.p186000} fill="var(--fill-0, white)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </button>
        </div>
        <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(225,228,234,0.05)] border-solid inset-0 pointer-events-none shadow-[0px_16px_32px_-12px_rgba(14,18,27,0.1)]" />
      </div>

      {isMenuOpen && (
        <div className="backdrop-blur-[10.2px] backdrop-filter bg-[rgba(14,17,22,0.95)] w-[390px] border-t border-[rgba(225,228,234,0.05)]">
          <div className="px-[24px] py-[20px]">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="products" className="border-[rgba(225,228,234,0.05)]">
                <AccordionTrigger className="text-white hover:text-white/80">
                  Products
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-[12px] pl-[16px]">
                    <a href="https://www.linquo.app/products" className="text-[#cacfd8] hover:text-white transition-colors">Linquo Overview</a>
                    <a href="https://www.linquo.app/products/news" className="text-[#cacfd8] hover:text-white transition-colors">News</a>
                    <a href="https://www.linquo.app/products/mobile-apps" className="text-[#cacfd8] hover:text-white transition-colors">Mobile Apps</a>
                    <a href="https://www.linquo.app/products/inbox" className="text-[#cacfd8] hover:text-white transition-colors">Inbox</a>
                    <a href="https://www.linquo.app/products/integrations" className="text-[#cacfd8] hover:text-white transition-colors">Integrations</a>
                    <a href="https://www.linquo.app/products/agent" className="text-[#cacfd8] hover:text-white transition-colors">Agent</a>
                    <a href="https://www.linquo.app/products/ai-chatbot" className="text-[#cacfd8] hover:text-white transition-colors">AI Chatbot</a>
                    <a href="https://www.linquo.app/products/notification" className="text-[#cacfd8] hover:text-white transition-colors">Notification</a>
                    <a href="https://www.linquo.app/products/faq" className="text-[#cacfd8] hover:text-white transition-colors">FAQ</a>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="platforms" className="border-[rgba(225,228,234,0.05)]">
                <AccordionTrigger className="text-white hover:text-white/80">
                  Platforms
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-[12px] pl-[16px]">
                    <a href="https://www.linquo.app/integrations/webflow" className="text-[#cacfd8] hover:text-white transition-colors">Webflow</a>
                    <a href="https://www.linquo.app/integrations/framer" className="text-[#cacfd8] hover:text-white transition-colors">Framer</a>
                    <a href="https://www.linquo.app/integrations/nextjs" className="text-[#cacfd8] hover:text-white transition-colors">Next.js</a>
                    <a href="https://www.linquo.app/integrations/react" className="text-[#cacfd8] hover:text-white transition-colors">React</a>
                    <a href="https://www.linquo.app/integrations/wordpress" className="text-[#cacfd8] hover:text-white transition-colors">WordPress</a>
                    <a href="https://www.linquo.app/integrations/wix" className="text-[#cacfd8] hover:text-white transition-colors">Wix</a>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="resources" className="border-[rgba(225,228,234,0.05)]">
                <AccordionTrigger className="text-white hover:text-white/80">
                  Resources
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-[12px] pl-[16px]">
                    <a href="https://www.linquo.app/docs" className="text-[#cacfd8] hover:text-white transition-colors">Documentation</a>
                    <a href="https://www.linquo.app/docs/api" className="text-[#cacfd8] hover:text-white transition-colors">API Reference</a>
                    <a href="https://linquo.webflow.io/blog" target="_blank" rel="noopener noreferrer" className="text-[#cacfd8] hover:text-white transition-colors">Blog</a>
                    <a href="https://www.linquo.app/support" className="text-[#cacfd8] hover:text-white transition-colors">Support</a>
                    <a href="https://www.linquo.app/tutorials" className="text-[#cacfd8] hover:text-white transition-colors">Tutorials</a>
                    <a href="https://www.linquo.app/examples" className="text-[#cacfd8] hover:text-white transition-colors">Code Examples</a>
                    <a href="https://www.linquo.app/videos" className="text-[#cacfd8] hover:text-white transition-colors">Video Guides</a>
                    <a href="https://www.linquo.app/community" className="text-[#cacfd8] hover:text-white transition-colors">Community</a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="flex flex-col gap-[12px] mt-[20px] pt-[20px] border-t border-[rgba(225,228,234,0.05)]">
              <a href="/pricing" className="text-white hover:text-white/80 transition-colors">Pricing</a>
              <a href="/about" className="text-white hover:text-white/80 transition-colors">About</a>
            </div>

            <div className="flex flex-col gap-[12px] mt-[20px] pt-[20px] border-t border-[rgba(225,228,234,0.05)]">
              <a 
                href="https://admin.linquo.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-[10px] px-[20px] rounded-[8px] border border-[rgba(225,228,234,0.1)] text-white hover:bg-[rgba(225,228,234,0.05)] transition-colors"
              >
                Login
              </a>
              <a 
                href="https://admin.linquo.app/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-[10px] px-[20px] rounded-[8px] bg-white text-[#0e1116] hover:bg-white/90 transition-colors"
              >
                Start for Free
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
