import { globalClassNames } from "./StyleConstants";

interface SectionProps {
    className: string,
    children?: React.ReactNode,
    style?: React.CSSProperties
}

export default function Section({className: backgroundColorClassName,  children, style}: SectionProps) {
    return (
        <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} ${backgroundColorClassName} py-20`} style={style}>
            <div className={`w-full ${globalClassNames.maxWidth}`}>
                {children}
            </div>
        </div>
    )
}