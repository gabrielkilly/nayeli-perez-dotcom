import { globalClassNames } from "./StyleConstants";

interface SectionProps {
    className: string,
    children?: React.ReactNode,
    style?: React.CSSProperties,
    paddingVertical?: 'Standard' | 'Tight' | 'Wide'
}

export default function Section({className: backgroundColorClassName,  children, style, paddingVertical = 'Standard'}: SectionProps) {
    const verticalPadding = paddingVertical === 'Tight' ? 'py-16' : paddingVertical === 'Wide' ? 'py-[108px]' : 'py-20';

    return (
        <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} ${backgroundColorClassName} ${verticalPadding}`} style={style}>
            <div className={`w-full ${globalClassNames.maxWidth}`}>
                {children}
            </div>
        </div>
    )
}