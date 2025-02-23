import { fontYarndings12 } from "@/app/layout";
import { Color, getTextColorClassName } from "./StyleConstants";

export interface YarndingsIconProps {
    icon: string,
    color: Color,
    className?: string
}

export default function YarngdingsIcon({icon, color, className}: YarndingsIconProps) {
    return (
        <span className={`${fontYarndings12.className} ${getTextColorClassName(color)} ${className}`}>{icon}</span>
    )
}