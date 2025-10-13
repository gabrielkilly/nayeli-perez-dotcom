import { ResultContent, ListItem } from "@/app/project/[projectId]/content/ProjectContent";
import { fontWorkSans } from "@/components/Fonts";

interface ResultListItemsProps {
    resultContent: ResultContent
}

export default function ResultListItems({ resultContent }: ResultListItemsProps) {
    const { items } = resultContent;

    const renderNestedList = (items: ListItem[], isNested = false) => {
        return (
            <ul className={`list-disc ${isNested ? 'list-inside ml-6' : 'list-inside'} flex flex-col gap-2`}>
                {items.map((listItem, idx) => (
                    <li key={idx} className={`text-type-1 text-base font-normal ${fontWorkSans.className} leading-tight`}>
                        {listItem.listItemText}
                        {listItem.nestedListItems && listItem.nestedListItems.length > 0 && (
                            <div className="mt-2">
                                {renderNestedList(listItem.nestedListItems, true)}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    const renderDescription = (description: ListItem[] | string) => {
        if (typeof description === 'string') {
            return (
                <div className={`flex-1 justify-start text-type-1 text-base font-normal ${fontWorkSans.className} leading-tight`}>
                    {description}
                </div>
            );
        }

        return renderNestedList(description);
    };

    return (
        <div className="flex flex-col gap-4">
            {items.map((item, index) => (
                <div key={index} className="bg-neutral-2 pl-4 pr-6 py-4 rounded-lg flex flex-col gap-3 bg-neutral-3">
                    <div className="inline-flex justify-start items-start gap-2.5">
                        <div className={`flex-1 justify-start text-type-1 text-base font-bold ${fontWorkSans.className} leading-normal`}>
                            {item.title}
                        </div>
                    </div>
                    <div className="self-stretch">
                        {renderDescription(item.description)}
                    </div>
                </div>
            ))}
        </div>
    )
}