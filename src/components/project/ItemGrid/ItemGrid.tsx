import { BasicCardContent, ItemGrid as ItemGridContent, ItemGridImage } from "@/app/project/[projectId]/content/ProjectContent";
import BasicCard from "../BasicCard/BasicCard";
import Image from "next/image";
import { it } from "node:test";

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
                            <div key={itemIndex} className={`w-full ${sizeClassName} self-stretch flex aspect-[21/16]`}>
                                <Image
                                    width={600}
                                    height={600}
                                    src={(item.content as ItemGridImage).src}
                                    alt="Image"
                                    className="object-cover object-center w-full h-full aspect-[21/16] rounded-lg"
                                />
                            </div>
                        )

                }

            })}
        </div>
    )
}
