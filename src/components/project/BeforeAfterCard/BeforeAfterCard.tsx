"use client"
import { BeforeAfterCardContent } from "@/app/project/[projectId]/content/ProjectContent";
import { fontLora, fontWorkSans } from "@/components/Fonts";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

interface BeforeAfterCardProps {
    cardContent: BeforeAfterCardContent
}

export default function BeforeAfterCard({ cardContent }: BeforeAfterCardProps) {
    const { title, beforeImageSrc, afterImageSrc } = cardContent;
    const [activeButton, setActiveButton] = useState<"before" | "after">("after");
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    const handleButtonClick = (button: "before" | "after") => {
        setActiveButton(button);
    };

    const handleImageClick = () => {
        setIsCarouselOpen(true);
    };
    
    const getButtonClassName = (button: "before" | "after") => {
        if (activeButton === button) {
            return "text-type-alt bg-pine-5";
        } else {
            return "text-type-1 bg-neutral-2 hover:bg-neutral-3";
        }
    }

    const image =
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={activeButton}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
            >
                <Image
                    unoptimized
                    className="w-full object-contain object-top rounded-lg shadow-[0px_5px_41px_0px_rgba(177,140,36,0.10)] border border-border-medium border-opacity-60 relative top-4 md:top-2 cursor-pointer"
                    width={800}
                    height={800}
                    alt={`Picture of ${activeButton}`}
                    src={activeButton === "before" ? beforeImageSrc : afterImageSrc}
                    onClick={handleImageClick}
                />
            </motion.div>
        </AnimatePresence>

    return (
        <>
            <div className="flex flex-col gap-4 py-4 justify-center">
                <h3 className={`text-type-2 text-xl md:text-2xl font-normal ${fontLora.className} leading-loose`}><i>{title}</i></h3>
                <div className="w-full px-3 md:px-4 pt-3 md:pt-4 pb-4 md:pb-6 bg-neutral-4 rounded-lg flex flex-col justify-center items-center gap-4 md:gap-8">
                    <div className="w-full flex gap-3 md:gap-4">
                        <button
                        onClick={() => handleButtonClick("after")}
                        className={`flex-1 p-3 md:p-4 rounded ${getButtonClassName("after")} border border-border-standard inline-flex flex-col justify-center items-center gap-2 transition-colors`}>
                            <p className={`text-center text-sm md:text-base font-bold ${fontWorkSans.className} leading-normal`}>After</p>
                        </button>
                        <button
                        onClick={() => handleButtonClick("before")}
                        className={`flex-1 p-3 md:p-4 rounded ${getButtonClassName("before")} border border-border-standard inline-flex flex-col justify-center items-center gap-2 transition-colors`}>
                            <p className={`text-center text-sm md:text-base font-bold ${fontWorkSans.className} leading-normal`}>Before</p>
                        </button>
                    </div>

                    <div className={`w-full md:w-4/5 gap-2 overflow-hidden aspect-[4/3] md:aspect-[80/109] relative`}>
                        {image}
                    </div>
                </div>
            </div>

            <ImageCarousel
                images={[afterImageSrc, beforeImageSrc]}
                isOpen={isCarouselOpen}
                onClose={() => setIsCarouselOpen(false)}
                initialIndex={activeButton === "after" ? 0 : 1}
                hideControls
            />
        </>
    )
}

// export default function BeforeAfterCard({ cardContent }: BeforeAfterCardProps) {
//     const { title, beforeImageSrc, afterImageSrc } = cardContent;
//     return (
//         <div className="flex flex-col px-6 py-8 bg-neutral-2 rounded-lg inline-flex justify-center items-center gap-6">
//             <h3 className={`self-stretch opacity-60 justify-start text-type-2 text-sm font-semibold ${fontWorkSans.className} uppercase leading-tight`}>{title}</h3>
//             <div className="flex flex-col md:flex-row gap-4 justify-around items-between w-full">
//                 <div className="flex flex-col items-center gap-4">
//                     <h4 className={`justify-start text-type-3 text-sm font-medium ${fontWorkSans.className} uppercase leading-none`}>Before</h4>
//                     <Image
//                         unoptimized //TODO remove this when using real images
//                         src={beforeImageSrc}
//                         alt="Before image"
//                         width={500}
//                         height={500}
//                         className="object-cover w-full h-auto"
//                         />
//                 </div>
//                 <div className="border-[0.675px] border-border-subtle border-dotted"/>
//                 <div className="flex flex-col items-center gap-4">
//                     <h4 className={`justify-start text-type-3 text-sm font-medium ${fontWorkSans.className} uppercase leading-none`}>After</h4>
//                     <Image
//                         unoptimized //TODO remove this when using real images
//                         src={afterImageSrc}
//                         alt="After image"
//                         width={500}
//                         height={500}
//                         className="object-cover w-full h-auto"
//                         />
//                 </div>

//             </div>
//         </div>
//     )
// }