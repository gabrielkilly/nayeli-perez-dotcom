import { BasicCardContent, ImageCard as ImageCardContent, ItemGrid as ItemGridContent, ItemGridImage as ItemGridImageContent } from "@/app/project/[projectId]/content/ProjectContent";
import BasicCard from "./BasicCard";
import ImageCard from "./ImageCard";
import ItemGridImage from "./ItemGridImage";

interface ItemGridProps {
    gridContent: ItemGridContent
}

export default function ItemGrid({ gridContent }: ItemGridProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {gridContent.items.map((item, itemIndex) => {
                const sizeClassName = item.fullWidth ? "" : "md:basis-1/2-gap-4"
                switch (item.type) {
                    case "basicCard":
                        return (
                            <BasicCard
                                key={itemIndex}
                                cssName={`w-full ${sizeClassName}`}
                                cardContent={item.content as BasicCardContent} />
                        )
                    case "itemGridImage":
                        return (
                            <ItemGridImage
                                key={itemIndex}
                                cssName={`w-full ${sizeClassName}`}
                                imageContent={item.content as ItemGridImageContent} />
                        )
                    case "imageCard":
                        return (
                            <ImageCard
                                key={itemIndex}
                                cssName={`w-full ${sizeClassName}`}
                                cardContent={item.content as ImageCardContent} />
                        )

                }

            })}
        </div>
    )
}
