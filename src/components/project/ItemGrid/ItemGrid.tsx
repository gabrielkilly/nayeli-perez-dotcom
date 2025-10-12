import { ItemGrid as ItemGridContent } from "@/app/project/[projectId]/content/ProjectContent";
import BasicCard from "../BasicCard/BasicCard";

interface ItemGridProps {
    gridContent: ItemGridContent
}

export default function ItemGrid({ gridContent }: ItemGridProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {gridContent.items.map((cardContent, cardIndex) => (
                <BasicCard
                    key={cardIndex}
                    cssName="md:basis-1/2-gap-4"
                    cardContent={cardContent} />
            ))}
        </div>
    )
}
