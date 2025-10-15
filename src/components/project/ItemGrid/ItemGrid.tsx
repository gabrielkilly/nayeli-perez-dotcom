import { BasicCardContent, ImageCard, ItemGrid as ItemGridContent, ItemGridImage } from "@/app/project/[projectId]/content/ProjectContent";
import BasicCard from "../BasicCard/BasicCard";
import Image from "next/image";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from "html-react-parser"
import Link from "next/link";

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
                    case "itemGridImage": {
                        const { src, linkedString} = item.content as ItemGridImage
                        const options: HTMLReactParserOptions = {
                            replace(domNode) {
                                if (domNode instanceof Element && domNode.attribs && domNode.name === 'a') {
                                    return <Link className="underline" href={domNode.attribs.href}>
                                    {domToReact(domNode.children as DOMNode[], options)}
                                    </Link>
                                }
                            },
                        };
                        return (
                            <div key={itemIndex} className={`w-full ${sizeClassName} self-stretch relative aspect-[21/16]`}>
                                <Image
                                    width={600}
                                    height={600}
                                    src={src}
                                    alt="Image"
                                    className="object-cover object-center w-full h-full aspect-[21/16] rounded-lg"
                                />

                                {linkedString &&
                                    <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#B4CFB0] text-sm italic font-medium whitespace-nowrap">{parse(linkedString, options)}</p>
                                }
                            </div>
                        )
                    }
                    case "imageCard": {

                        const { bgClassName, src } = item.content as ImageCard

                        return (
                            <div className={`self-stretch ${bgClassName} rounded shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] border border-border-subtle inline-flex flex-col justify-between gap-2 overflow-hidden w-full ${sizeClassName}`}>
                                <Image
                                    width={600}
                                    height={600}
                                    src={src}
                                    alt="Image"
                                    className="object-cover object-center w-full h-auto"
                                />
                            </div>
                        )
                        
                    }

                }

            })}
        </div>
    )
}
