import { HeaderLabelCardContent } from "@/app/project/[projectId]/content/ProjectContent"
import { fontWorkSans } from "@/components/Fonts"

interface HeaderLabelCardProps {
    cardContent: HeaderLabelCardContent
}

export default function HeaderLabelCard(
    { cardContent }: HeaderLabelCardProps
) {
    return (
        <div className="flex flex-col rounded-lg bg-neutral-2 gap-6 p-4">
            {
                cardContent.headersAndLabels.map((headerLabel) => {
                    return (
                        <div key={headerLabel.header} className="flex flex-col gap-1">
                            <p className={`text-type-2 text-sm font-bold ${fontWorkSans.className} leading-tight`}>{headerLabel.header}</p>
                            <p className={`text-type-1 text-sm font-normal ${fontWorkSans.className} leading-tight`}>{headerLabel.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}