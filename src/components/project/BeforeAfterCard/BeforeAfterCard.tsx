import { BeforeAfterCardContent } from "@/app/project/[projectId]/content/ProjectContent";
import { fontWorkSans } from "@/components/Fonts";
import Image from "next/image";

interface BeforeAfterCardProps {
    cardContent: BeforeAfterCardContent
}

export default function BeforeAfterCard({ cardContent }: BeforeAfterCardProps) {
    const { title, beforeImageSrc, afterImageSrc } = cardContent;
    return (
        <div className="flex flex-col px-6 py-8 bg-neutral-2 rounded-lg inline-flex justify-center items-center gap-6">
            <h3 className={`self-stretch opacity-60 justify-start text-type-2 text-sm font-semibold ${fontWorkSans.className} uppercase leading-tight`}>{title}</h3>
            <div className="flex flex-col md:flex-row gap-4 justify-around items-between w-full">
                <div className="flex flex-col items-center gap-4">
                    <h4 className={`justify-start text-type-3 text-sm font-medium ${fontWorkSans.className} uppercase leading-none`}>Before</h4>
                    <Image
                        unoptimized //TODO remove this when using real images
                        src={beforeImageSrc}
                        alt="Before image"
                        width={500}
                        height={500}
                        className="object-cover w-full h-auto"
                        />
                </div>
                <div className="border-[0.675px] border-border-subtle border-dotted"/>
                <div className="flex flex-col items-center gap-4">
                    <h4 className={`justify-start text-type-3 text-sm font-medium ${fontWorkSans.className} uppercase leading-none`}>After</h4>
                    <Image
                        unoptimized //TODO remove this when using real images
                        src={afterImageSrc}
                        alt="After image"
                        width={500}
                        height={500}
                        className="object-cover w-full h-auto"
                        />
                </div>

            </div>
        </div>
    )
}