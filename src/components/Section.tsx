import { globalClassNames } from "./StyleConstants";

interface SectionProps {
    backgroundColorClassName: string, 
    children?: React.ReactNode
}

export default function Section({backgroundColorClassName, children}: SectionProps) {
    return (
        <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} ${backgroundColorClassName} py-16`}>
            <div className={`w-full ${globalClassNames.maxWidth}`}>
                {children}
            </div>
        </div>
    )
}