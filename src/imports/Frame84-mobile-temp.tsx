import { motion, AnimatePresence } from "motion/react";

function Frame84({ activeTab }: { activeTab: number }) {
  const testimonials = [
    {
      quote: "Linquo has transformed how we design and deliver solutions for our clients. It's become an essential part of our toolset.",
      author: "Josh Beck, Director of Engineering @ Beck Tech Co",
    },
    {
      quote:
        "Simply copy and paste the embed code into our <head> tag. We had live chat running across all our products in less than an hour.",
      author: "Sarah Chen, Lead Developer @ TechFlow Solutions",
    },
    {
      quote:
        "Our conversion rate increased by 40% after implementing Linquo. The real-time support makes all the difference.",
      author: "Michael Torres, E-commerce Manager @ Shopwise",
    },
    {
      quote:
        "Managing client communications has never been easier. Linquo helps me stay organized and professional across all projects.",
      author:
        "Emma Rodriguez, Freelance Designer @ Rodriguez Creative",
    },
  ];

  const currentTestimonial = testimonials[activeTab];

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex flex-col gap-[24px] w-full"
        >
          <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[18px] text-white w-full">
            <p className="leading-[24px]">{currentTestimonial.quote}</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px] w-full">
            <p className="leading-[16px]">{currentTestimonial.author}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Frame84;
