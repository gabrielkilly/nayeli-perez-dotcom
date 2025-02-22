import { Color, getColorCssValue } from "./StyleConstants"

interface SvgProps {
    color: Color,
    width: string, 
    height: string
}

export function SvgPlusSign({color, width, height}: SvgProps) {
    return (
        <svg width={width} height={height} viewBox={`0 0 16 16`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 9.06975H9.07143V15.4983H6.92857V9.06975H0.5V6.92689H6.92857V0.498322H9.07143V6.92689H15.5V9.06975Z" fill={getColorCssValue(color)}/>
        </svg>
    )
}