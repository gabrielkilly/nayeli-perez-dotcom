import { ResultContent } from "@/app/project/[projectId]/content/ProjectContent";
import { fontWorkSans } from "@/components/Fonts";
import { SvgUp, SvgDown } from "@/components/Svg";
import Image from "next/image";

interface ResultListItemsProps {
    resultContent: ResultContent
}

export default function ResultListItems({ resultContent }: ResultListItemsProps) {
    const { items } = resultContent;

    const getIcon = (iconIdentifier: string) => {
        switch (iconIdentifier) {
            case "up":
                return <SvgUp colorCssValue="var(--icon-primary)" />;
            case "down":
                return <SvgDown colorCssValue="var(--icon-primary)" />;
            default:
                return null;
        }
    }

    return (
        <ul className="list-disc list-inside flex flex-col gap-2 ">
            {items.map((item, index) => (
                <li key={index} className="bg-neutral-2 pl-4 pr-6 py-4 rounded-lg inline-flex flex-col justify-start items-center gap-1 ">
                    <div className="self-stretch inline-flex justify-start items-start gap-2.5">
                        <div className="px-px pt-[5px] pb-px flex justify-start items-center gap-2 overflow-hidden">
                            { getIcon(item.iconIdentifier) }
                        </div>
                        <div className={`flex-1 justify-start text-type-1 text-base font-bold ${fontWorkSans.className} leading-normal`}>{item.title}</div>
                    </div>
                    <div className="self-stretch pl-7 inline-flex justify-center items-center gap-2">
                        <div className={`flex-1 justify-start text-type-1 text-base font-normal ${fontWorkSans.className} leading-normal`}>{item.description}</div>
                    </div>
                </li>
            ))}
        </ul>
    )
}