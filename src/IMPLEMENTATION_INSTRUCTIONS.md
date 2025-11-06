# Implementation Instructions for Testimonial Tabs

## Changes Needed in `/imports/IPhone13141.tsx`

### 1. Add Import at the top of the file (after line 30)
Add this import:
```typescript
import { TestimonialPlatformTabs } from "../components/TestimonialPlatformTabs";
```

### 2. Fix Frame84 to use dynamic testimonial content

Find the Frame84 function (around line 2465-2501) and replace lines 2494-2497 with:

**REPLACE THIS:**
```tsx
        <p className="leading-[24px]">{`Linquo has transformed how we design and deliver solutions for our clients. It's become an essential part of our toolset.`}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px]">Josh Beck, Director of Engineering @ Beck Tech Co</p>
```

**WITH THIS:**
```tsx
        <p className="leading-[24px]">{currentTestimonial.quote}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#cacfd8] text-[12px] w-full">
        <p className="leading-[16px]">{currentTestimonial.author}</p>
```

### 3. Create new component for Platform Tabs Section

Add this new function BEFORE Frame139 (around line 4105):

```typescript
function Frame140({ activeTab, setActiveTab }: { activeTab: number; setActiveTab: (tab: number) => void }) {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[16px] items-start left-0 px-[24px] py-0 top-[14781px] w-[390px]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-white tracking-[-0.72px] w-full">
        <p className="leading-[32px] text-[24px]">
          <span>{`Choose your `}</span>
          <span className="bg-clip-text bg-gradient-to-r from-[#3c82f6] to-[#ef4544] via-[#955ae5] via-[53.673%]" style={{ WebkitTextFillColor: "transparent" }}>
            platform
          </span>
        </p>
      </div>
      <TestimonialPlatformTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
```

### 4. Update the main component render

Find the main IPhone function's return statement (around line 4750-4760) and add Frame140 right BEFORE Frame198:

**FIND:**
```tsx
      <Frame95 />
      <Frame198 />
      <Frame139 />
```

**CHANGE TO:**
```tsx
      <Frame95 />
      <Frame140 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame198 />
      <Frame139 />
```

### 5. Update Frame175 to pass activeTab

The Frame175 call should already have activeTab (around line 4752), but verify it looks like:
```tsx
      <Frame175 activeTab={activeTab} />
```

If not, update it to include the activeTab prop.

## Summary

These changes will:
1. Make Frame84 display dynamic testimonial content based on activeTab
2. Create clickable platform tabs (Webflow, Framer, Next.js, React) above the testimonials section
3. Wire up the state management so clicking tabs changes the displayed testimonial and image
4. Maintain the existing design aesthetic with proper styling and transitions

The tabs will have equal widths due to the `basis-0 grow` classes, and text is center-aligned with `text-center`.
