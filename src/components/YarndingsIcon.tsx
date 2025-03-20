import { fontYarndings12 } from "@/components/Fonts";

export interface YarndingsIconProps {
    icon: string,
    textColorClassName: string,
    className?: string
}

export default function YarndingsIcon({icon, textColorClassName: color, className}: YarndingsIconProps) {
    return (
        <span className={`${fontYarndings12.className} ${color} ${className}`}>{icon}</span>
    )
}