import { BasicCardContent } from "@/app/project/[projectId]/content/ProjectContent";
import { fontWorkSans } from "@/components/Fonts";
import Image from "next/image";

interface BasicCardProps {
    cardContent: BasicCardContent,
    cssName?: string
}

export default function BasicCard({ cardContent, cssName }: BasicCardProps) {
    const { title, description, imageSrc, videoSrc } = cardContent;

    return (
        <div className={`self-stretch px-6 py-8 bg-neutral-2 rounded-lg inline-flex flex-col justify-between gap-2 ${cssName}`}>
            <div className="flex flex-col gap-2 mb-4">
                <h4 className={`text-type-2 text-base font-bold ${fontWorkSans.className} leading-normal`}>{title}</h4>
                <p className={`text-type-1 text-sm font-normal ${fontWorkSans.className} leading-tight`}>{description}</p>
            </div>

            {imageSrc && (
                <Image
                    src={imageSrc}
                    alt="Image"
                    width={500}
                    height={500}
                    className="object-cover w-full h-auto mt-3"
                />
            )}

            {videoSrc && (
                <video className ="object-cover w-full h-auto mt-3" autoPlay muted loop preload="auto" controls>
                    <source src={videoSrc}/>
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    )
}