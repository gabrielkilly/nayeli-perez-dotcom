import { IntroContent } from "@/app/project/[projectId]/content/ProjectContent"
import { fontFamiljenGrotesk, fontWorkSans } from "@/components/Fonts"
import { SvgBack } from "@/components/Svg"
import IntroImageBanner from "../IntroImageBanner/IntroImageBanner"
import HeaderLabelCard from "../HeaderLabelCard/HeaderLabelCard"

interface IntroSectionProps {
    introContent: IntroContent
}

export default function IntroSection({ introContent }: IntroSectionProps) {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex">
                <a className={`${fontWorkSans.className} inline text-base font-semibold text-type-2 uppercase`} href="/">
                    <SvgBack className="inline" colorCssValue="var(--type-2)"/> Back to home
                </a>
            </div>
            <IntroImageBanner imageSources={introContent.imageSources} />
            <h1 className={`${fontFamiljenGrotesk} text-type-1 text-3xl font-normal leading-10 py-6`}>
                {introContent.title}
            </h1>
            <div className="flex flex-col md:flex-row justify-between gap-8">
                <p className={`${fontWorkSans} flex-auto text-type-1 text-base font-normal leading-normal whitespace-break-spaces`}>
                    {introContent.description}
                </p>
                <div className="w-full flex-initial">
                    <HeaderLabelCard cardContent={introContent.details} />
                </div>
            </div>
        </div>
    )
}