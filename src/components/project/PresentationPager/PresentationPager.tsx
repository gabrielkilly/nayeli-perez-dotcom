import { PresentationPagerContent } from "@/app/project/[projectId]/content/ProjectContent";
import { fontWorkSans } from "@/components/Fonts";
import Image from "next/image";
import { useState } from "react";

interface PresentationPagerProps {
    pagerContent: PresentationPagerContent
}

export default function PresentationPager({ pagerContent }: PresentationPagerProps) {
  const { items } = pagerContent;

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full flex-initial flex-col">
            {items.map((item, index) => (
                <div key={index} className={`pr-4 pl-3 py-3 my-1.5 relative overflow-hidden rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.15)] inline-flex flex-col justify-start items-center gap-2 ${selectedItemIndex === index ? "bg-neutral-1-overlay" : "bg-neutral-2"}`} onClick={() => handleItemClick(index)}>
                    <p className={`self-stretch justify-start text-type-1 pl-1 text-base font-normal ${fontWorkSans.className} leading-normal whitespace-break-spaces`}>{item.description}</p>
                    {
                        selectedItemIndex === index ? (
                            <div className="w-24 h-4 left-0 top-[4px] absolute origin-top-left rotate-90 opacity-100 outline outline-[10px] outline-offset-[-5px] outline-khaki-4" />
                        ) : null
                    }
                </div>
            ))}
        </div>
        <div className="w-full flex-auto">
            <Image  
                src={items[selectedItemIndex].imageSrc}
                alt={`Image ${selectedItemIndex + 1}`}
                width={500}
                height={500}
                className="object-cover w-full h-auto"
                />
        </div>
    </div>
  );
}