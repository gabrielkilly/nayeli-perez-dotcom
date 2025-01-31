import { AppColor, globalClassNames } from "./AppStyleConstants";

interface SectionProps {
    backgroundColor: AppColor, 
    children?: React.ReactNode
}

export default function Section({backgroundColor: color, children}: SectionProps) {
    
    return (
        <div className={`w-full ${globalClassNames.maxWidth} ${globalClassNames.defaultXPadding} bg-${color} py-16`}>
            {children}
        </div>
    )
}