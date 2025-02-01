import { log } from "console";
import { Color, getBgColorClassName, globalClassNames } from "./StyleConstants";

interface SectionProps {
    backgroundColor: Color, 
    children?: React.ReactNode
}

export default function Section({backgroundColor, children}: SectionProps) {
    const bgClassName = getBgColorClassName(backgroundColor);
    log(bgClassName);
    
    return (
        <div className={`w-full ${globalClassNames.maxWidth} ${globalClassNames.defaultXPadding} ${getBgColorClassName(backgroundColor)} py-16`}>
            {children}
        </div>
    )
}