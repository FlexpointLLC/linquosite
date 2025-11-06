# Manual Edits Required for /imports/IPhone13141.tsx

## Edit 1: Fix Frame84 to use dynamic testimonial (Lines 2495 and 2498)

### Line 2495 - Change from:
```tsx
        <p className="leading-[24px]">{`Linquo has transformed how we design and deliver solutions for our clients. It's become an essential part of our toolset.`}</p>
```

### To:
```tsx
        <p className="leading-[24px]">{currentTestimonial.quote}</p>
```

### Line 2498 - Change from:
```tsx
        <p className="leading-[16px]">Josh Beck, Director of Engineering @ Beck Tech Co</p>
```

### To:
```tsx
        <p className="leading-[16px]">{currentTestimonial.author}</p>
```

## Edit 2: Add Frame140 component (Insert BEFORE Frame139, around line 4105)

Add this complete function:

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

## Edit 3: Add Frame140 to the render (Around line 4755)

### Find this section:
```tsx
      <Frame95 />
      <Frame198 />
      <Frame139 />
```

### Change to:
```tsx
      <Frame95 />
      <Frame140 activeTab={activeTab} setActiveTab={setActiveTab} />
      <Frame198 />
      <Frame139 />
```

## Notes:
- The import for TestimonialPlatformTabs has already been added at the top of the file
- The activeTab and setActiveTab state already exists in the IPhone component
- Frame175 already passes activeTab correctly
