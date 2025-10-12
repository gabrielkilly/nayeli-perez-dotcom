'use client'

import { IntroContent } from "@/app/project/[projectId]/content/ProjectContent"
import { fontFamiljenGrotesk, fontWorkSans } from "@/components/Fonts"
import { SvgBack } from "@/components/Svg"
import HeaderLabelCard from "../HeaderLabelCard/HeaderLabelCard"
import Link from "next/link"
import Image from 'next/image';
import { globalClassNames } from "@/components/StyleConstants"
import { useState } from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'

interface IntroSectionProps {
    introContent: IntroContent
}

export default function IntroSection({ introContent }: IntroSectionProps) {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index)
        setIsCarouselOpen(true)
    }

    return (
        <div className="w-full flex flex-col">
            <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} pt-16 bg-[#B18C24]`}>
                <div className={`w-full ${globalClassNames.maxWidth}`}>
                    <div className="flex flex-col w-full">
                        <div className="flex">
                            <Link className={`${fontWorkSans.className} inline text-base font-semibold text-white uppercase`} href="/">
                                <SvgBack className="inline" colorCssValue="white"/> Back to all work
                            </Link>
                        </div>
                        <IntroImageBanner
                            imageSources={introContent.imageSources}
                            onImageClick={handleImageClick}
                        />
                    </div>
                </div>
            </div>
            <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} border border-top-1 border-border-subtle py-20 bg-white`}>
                <div className={`w-full ${globalClassNames.maxWidth}`}>
                    <div className="flex flex-col gap-12 w-full bg-white">
                        <h1 className={`${fontFamiljenGrotesk.className} text-type-1 text-4xl font-normal leading-10`}>
                            {introContent.title}
                        </h1>
                        <div className="flex flex-wrap gap-4 justify-between items-center">
                            <p className={`${fontWorkSans.className} md:basis-1/2-gap-4 text-type-1 text-base font-normal leading-normal whitespace-break-spaces`}>
                                {introContent.description}
                            </p>
                            <div className="w-full md:basis-1/2-gap-4">
                                <HeaderLabelCard cardContent={introContent.details} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ImageCarousel
                images={introContent.imageSources}
                isOpen={isCarouselOpen}
                onClose={() => setIsCarouselOpen(false)}
                initialIndex={selectedImageIndex}
                hideControls
            />
        </div>
    )
}

interface IntroImmageBannerProps {
    imageSources: string[]
    onImageClick: (index: number) => void
}

function IntroImageBanner({ imageSources, onImageClick }: IntroImmageBannerProps) {

    if (imageSources.length != 2) {
        return null;
    }

    const image1 = imageSources[0];
    const image2 = imageSources[1];

    return (
        <div className={`w-full gap-2 flex justify-center overflow-hidden aspect-[300/125] md:aspect-[220/109] relative`}>
                <Image
                    key={1}
                    className="w-full object-cover object-top rounded-lg shadow-[0px_5px_41px_0px_rgba(177,140,36,0.10)] border border-border-medium border-opacity-60 relative top-4 md:top-8 cursor-pointer hover:opacity-90 transition-opacity"
                    width={800}
                    height={800}
                    alt="Picture of project"
                    src={image1}
                    onClick={() => onImageClick(0)}
                />
                <Image
                    key={2}
                    className="w-full object-cover object-top rounded-lg shadow-[0px_5px_41px_0px_rgba(177,140,36,0.10)] border border-border-medium border-opacity-60 relative top-4 md:top-8 md:block hidden cursor-pointer hover:opacity-90 transition-opacity"
                    width={800}
                    height={800}
                    alt="Picture of project"
                    src={image2}
                    onClick={() => onImageClick(1)}
                />
        </div>
    )
}