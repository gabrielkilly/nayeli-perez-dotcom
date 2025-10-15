"use client"
import { BasicCardContent } from "@/app/project/[projectId]/content/ProjectContent";
import { fontWorkSans } from "@/components/Fonts";
import Image from "next/image";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import { SvgUp, SvgDown, SvgNaycon } from "@/components/Svg";

interface BasicCardProps {
    cardContent: BasicCardContent,
    cssName?: string
}

export default function BasicCard({ cardContent, cssName }: BasicCardProps) {
    const { title, description, imageSrc, videoSrc, textClassName, bgClassName, iconIdentifier, footerNote } = cardContent;
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    const handleImageClick = () => {
        if (imageSrc) {
            setIsCarouselOpen(true);
        }
    };

    const getIcon = (iconIdentifier?: string) => {
        switch (iconIdentifier) {
            case "up":
                return <SvgUp colorCssValue={`var(--type-alt`} />;
            case "down":
                return <SvgDown colorCssValue="var(--type-alt)" />;
            case "naycon":
                return <SvgNaycon colorCssValue="var(--type-alt)" />
            default:
                return null;
        }
    };

    return (
        <div className={`${textClassName} self-stretch px-6 py-8 ${bgClassName} rounded-lg inline-flex flex-col justify-between gap-2 ${cssName}`}>
            <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-start gap-2.5">
                    {iconIdentifier && (
                        <div className="px-px pt-[5px] pb-px flex justify-start items-center gap-2">
                            {getIcon(iconIdentifier)}
                        </div>
                    )}
                    <h4 className={`flex-1 text-base font-bold ${fontWorkSans.className} leading-normal`}>{title}</h4>
                </div>
                <p className={`text-sm font-normal ${fontWorkSans.className} leading-tight whitespace-break-spaces ${iconIdentifier ? 'pl-7' : ''}`}>{description}</p>
            </div>

            {imageSrc && (
                <div className="w-full flex justify-center">
                    <Image
                        src={imageSrc}
                        alt="Image"
                        width={500}
                        height={500}
                        className="object-cover obect-center w-full h-auto mt-3 cursor-pointer max-w-xl"
                        onClick={handleImageClick}
                    />
                </div>
            )}

            {videoSrc && (
                <video className ="object-cover w-full h-auto mt-3" autoPlay muted loop preload="auto" controls>
                    <source src={videoSrc}/>
                    Your browser does not support the video tag.
                </video>
            )}

            {footerNote && (
                <div className="flex items-start gap-2.5">
                    {iconIdentifier && (
                        <div className="px-px pt-[5px] pb-px flex justify-start items-center gap-2">
                            {getIcon(iconIdentifier)}
                        </div>
                    )}
                    <h4 className={`flex-1 text-base font-bold ${fontWorkSans.className} leading-normal`}>{footerNote}</h4>
                </div>
            )}

            {imageSrc && (
                <ImageCarousel
                    images={[imageSrc]}
                    isOpen={isCarouselOpen}
                    onClose={() => setIsCarouselOpen(false)}
                    initialIndex={0}
                    hideControls={true}
                />
            )}
        </div>
    )
}