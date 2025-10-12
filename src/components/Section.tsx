import { globalClassNames } from "./StyleConstants";

interface SectionProps {
    className: string, 
    children?: React.ReactNode
}

export default function Section({className: backgroundColorClassName,  children}: SectionProps) {
    return (
        <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} ${backgroundColorClassName} py-20`}>
            <div className={`w-full ${globalClassNames.maxWidth}`}>
                {children}
            </div>
        </div>
    )
}