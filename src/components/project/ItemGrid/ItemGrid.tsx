import { BasicCardContent, ItemGrid as ItemGridContent, ItemGridImage } from "@/app/project/[projectId]/content/ProjectContent";
import BasicCard from "../BasicCard/BasicCard";
import Image from "next/image";

interface ItemGridProps {
    gridContent: ItemGridContent
}

export default function ItemGrid({ gridContent }: ItemGridProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {gridContent.items.map((item, itemIndex) => {

                switch (item.type) {
                    case "basicCard": 
                        return (
                            <BasicCard
                                key={itemIndex}
                                cssName="md:basis-1/2-gap-4"
                                cardContent={item.content as BasicCardContent} />
                        )
                    case "itemGridImage":
                        return (
                            <div key={itemIndex} className="md:basis-1/2-gap-4">
                                <Image
                                    src={(item.content as ItemGridImage).src}
                                    alt="Image"
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-auto rounded-lg"
                                />
                            </div>
                        )

                }
                
            })}
        </div>
    )
}
