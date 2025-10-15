"use client"
import { ItemGridImage as ItemGridImageContent } from "@/app/project/[projectId]/content/ProjectContent";
import Image from "next/image";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from "html-react-parser";
import Link from "next/link";
import { useState } from "react";
import ImageCarousel from "./ImageCarousel";

interface ItemGridImageProps {
    imageContent: ItemGridImageContent;
    cssName?: string;
}

export default function ItemGridImage({ imageContent, cssName }: ItemGridImageProps) {
    const { src, linkedString } = imageContent;
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);

    const options: HTMLReactParserOptions = {
        replace(domNode) {
            if (domNode instanceof Element && domNode.attribs && domNode.name === 'a') {
                return <Link className="underline" target="_blank" href={domNode.attribs.href}>
                    {domToReact(domNode.children as DOMNode[], options)}
                </Link>
            }
        },
    };

    const handleImageClick = () => {
        if (!linkedString) {
            setIsCarouselOpen(true);
        }
    };

    return (
        <>
            <div className={`self-stretch relative aspect-[21/16] ${!linkedString ? 'cursor-pointer' : ''} ${cssName}`} onClick={handleImageClick}>
                <Image
                    width={600}
                    height={600}
                    src={src}
                    alt="Image"
                    className="object-cover object-center w-full h-full aspect-[21/16] rounded-lg"
                />

                {linkedString &&
                    <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#B4CFB0] text-sm italic font-medium whitespace-nowrap">{parse(linkedString, options)}</p>
                }
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
