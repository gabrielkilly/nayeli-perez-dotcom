"use client"
import { ImageCard as ImageCardContent } from "@/app/project/[projectId]/content/ProjectContent";
import Image from "next/image";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";

interface ImageCardProps {
    cardContent: ImageCardContent;
    cssName?: string;
}

export default function ImageCard({ cardContent, cssName }: ImageCardProps) {
    const { bgClassName, src } = cardContent;
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    const handleImageClick = () => {
        setIsCarouselOpen(true);
    };

    return (
        <>
            <div
                className={`self-stretch ${bgClassName} rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] border border-border-subtle inline-flex flex-col justify-between gap-2 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${cssName}`}
                onClick={handleImageClick}
            >
                <Image
                    width={600}
                    height={600}
                    src={src}
                    alt="Image"
                    className="object-cover object-center w-full h-auto"
                />
            </div>

            <ImageCarousel
                images={[src]}
                isOpen={isCarouselOpen}
                onClose={() => setIsCarouselOpen(false)}
                initialIndex={0}
                hideControls={true}
            />
        </>
    );
}
