"use client";
import { PresentationPagerContent } from "@/app/project/[projectId]/content/ProjectContent";
import { fontWorkSans } from "@/components/Fonts";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

interface PresentationPagerProps {
    pagerContent: PresentationPagerContent
}

export default function PresentationPager({ pagerContent }: PresentationPagerProps) {
  const {
    items,
    buttonBgColorCssClassName: backgroundColorCssClassName,
    buttonBgSelectedColorCssClassName,
    buttonTextColorCssClassName,
    buttonTextColorSelectedCssClassName
 } = pagerContent;

  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  const handleItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleImageClick = () => {
    setIsCarouselOpen(true);
  };

  
  
  return (
    <div className={`flex flex-col md:flex-row justify-between items-center gap-8 my-4`}>
        <div className="w-full flex-col">
            {items.map((item, index) => {
                const buttonTextColorClassName = selectedItemIndex === index ? buttonTextColorSelectedCssClassName : buttonTextColorCssClassName
                const bgClassName = selectedItemIndex === index ? buttonBgSelectedColorCssClassName : backgroundColorCssClassName
                return (
                    <motion.div
                        key={index}
                        className={`pr-4 pl-3 py-3 my-1.5 relative overflow-hidden rounded-lg shadow-[0px_1px_3px_0px_rgba(0,0,0,0.15)] outline outline-1 outline-border-subtle inline-flex flex-col justify-start items-center gap-2 ${buttonTextColorClassName} ${bgClassName}`}
                        onClick={() => handleItemClick(index)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                    >
                        <p className={`self-stretch justify-startpl-1 text-base font-normal ${fontWorkSans.className} leading-normal whitespace-break-spaces`}>{item.description}</p>
                        <AnimatePresence>
                            {selectedItemIndex === index && (
                                <motion.div
                                    className="w-1.5 h-full left-0 top-0 absolute bg-[#AC5C8A]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.1 }}
                                />
                            )}
                        </AnimatePresence>
                    </motion.div>
                )
            })}
        </div>
        <div className="w-full flex-auto relative min-h-[250px] md:min-h-[400px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedItemIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <Image
                        unoptimized //TODO remove this when using real images
                        src={items[selectedItemIndex].imageSrc}
                        alt={`Image ${selectedItemIndex + 1}`}
                        width={500}
                        height={500}
                        className="object-contain w-full h-full max-h-[250px] md:max-h-[400px] cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={handleImageClick}
                    />
                </motion.div>
            </AnimatePresence>
        </div>

        <ImageCarousel
            images={items.map(item => item.imageSrc)}
            isOpen={isCarouselOpen}
            onClose={() => setIsCarouselOpen(false)}
            initialIndex={selectedItemIndex}
            hideControls={true}
        />
    </div>
  );
}