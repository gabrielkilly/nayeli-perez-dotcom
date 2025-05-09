import { BasicCardContent } from "@/app/project/[projectId]/content/ProjectContent";
import { fontWorkSans } from "@/components/Fonts";
import Image from "next/image";

interface BasicCardProps {
    cardContent: BasicCardContent,
    cssName?: string
}

export default function BasicCard({ cardContent, cssName }: BasicCardProps) {
    const { title, description, imageSrc } = cardContent;

    return (
        <div className={`self-stretch px-6 py-8 bg-neutral-2 rounded-lg inline-flex flex-col justify-start gap-2 ${cssName}`}>
            <h4 className={`text-type-2 text-base font-medium ${fontWorkSans.className} leading-normal`}>{title}</h4>
            <p className={`text-type-1 text-sm font-normal ${fontWorkSans.className} leading-tight`}>{description}</p>
            <Image
                unoptimized //TODO remove this when using real images
                src={imageSrc}
                alt="Image"
                width={500}
                height={500}
                className="object-cover w-full h-auto mt-3"
            />
        </div>
    )
}