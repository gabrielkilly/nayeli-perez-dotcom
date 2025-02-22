import { log } from "console";
import { Color, getBgColorClassName, globalClassNames } from "./StyleConstants";

interface SectionProps {
    backgroundColor: Color, 
    children?: React.ReactNode
}

export default function Section({backgroundColor, children}: SectionProps) {
    return (
        <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} ${getBgColorClassName(backgroundColor)} py-16`}>
            <div className={`w-full ${globalClassNames.maxWidth}`}>
                {children}
            </div>
        </div>
    )
}