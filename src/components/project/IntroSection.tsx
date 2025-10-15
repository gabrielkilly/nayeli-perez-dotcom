'use client'

import { IntroContent } from "@/app/project/[projectId]/content/ProjectContent"
import { fontFamiljenGrotesk, fontWorkSans } from "@/components/Fonts"
import { SvgBack } from "@/components/Svg"
import HeaderLabelCard from "./HeaderLabelCard"
import Link from "next/link"
import Image from 'next/image';
import { globalClassNames } from "@/components/StyleConstants"
import { useState } from 'react'
import ImageCarousel from './ImageCarousel'

interface IntroSectionProps {
    introContent: IntroContent
}

export default function IntroSection({ introContent }: IntroSectionProps) {
    const [isCarouselOpen, setIsCarouselOpen] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    const hasImages = introContent.imageSources != undefined && introContent.imageSources.length > 0

    const handleImageClick = (index: number) => {
        setSelectedImageIndex(index)
        setIsCarouselOpen(true)
    }

    const BackButton = ({ additionalClasses }: {additionalClasses?: string}) =>
        <Link className={`${fontWorkSans.className} inline text-base font-semibold uppercase ${additionalClasses}`} href="/">
            <SvgBack className="inline" colorCssValue="currentColor"/> Back to all work
        </Link>

    const ImageSectionWithBackButton = ({images}: {images: string[]}) => 
        <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} pt-16 ${introContent.bgClassName}`}>
            <div className={`w-full ${globalClassNames.maxWidth}`}>
                <div className="flex flex-col w-full">
                    <div className="flex">
                        <BackButton additionalClasses="text-white" />
                    </div>
                    <IntroImageBanner
                        imageSources={images}
                        onImageClick={handleImageClick}
                    />
                </div>
            </div>
        </div>

    const MainContent = ({showBackButton} : {showBackButton: boolean}) =>
        <>

            <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} border border-top-1 border-border-subtle py-20 bg-white`}>
                <div className={`w-full ${globalClassNames.maxWidth}`}>
                    <div className="flex flex-col gap-12 w-full bg-white">
                        { showBackButton && <BackButton additionalClasses="text-black" /> }
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

        </>


    return (
        <div className="w-full flex flex-col">
            
            { hasImages && //only add images section if it exists
            <>
                <ImageSectionWithBackButton images={introContent.imageSources!!} />
                
                <ImageCarousel //this carousel allows use to select an image to see it in a full-screen modal
                    images={introContent.imageSources!!}
                    isOpen={isCarouselOpen}
                    onClose={() => setIsCarouselOpen(false)}
                    initialIndex={selectedImageIndex}
                    hideControls
                />
            </>
            }
            
            <MainContent showBackButton={!hasImages} />

        </div>
    )
}

interface IntroImmageBannerProps {
    imageSources: string[]
    onImageClick: (index: number) => void
}

function IntroImageBanner({ imageSources, onImageClick }: IntroImmageBannerProps) {

    const image1 = imageSources[0];
    const image2 = imageSources[1];

    return (
        <div className={`w-full gap-2 flex justify-center overflow-hidden aspect-[4/3] md:aspect-[220/109] relative`}>
                {image1 &&  <Image
                    key={1}
                    className="w-full object-cover object-top rounded-lg shadow-[0px_5px_41px_0px_rgba(177,140,36,0.10)] relative top-6 md:top-8 cursor-pointer"
                    width={1600}
                    height={1600}
                    alt="Picture of project"
                    src={image1}
                    onClick={() => onImageClick(0)}
                />
}
                { image2 && 
                    <Image
                    key={2}
                    className="w-full object-cover object-top rounded-lg shadow-[0px_5px_41px_0px_rgba(177,140,36,0.10)] relative top-6 md:top-8 md:block hidden cursor-pointery"
                    width={1600}
                    height={1600}
                    alt="Picture of project"
                    src={image2}
                    onClick={() => onImageClick(1)}
                />
            }
        </div>
    )
}