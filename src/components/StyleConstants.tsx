import exp from "constants"

export enum Color {
    Neutral_1 = "neutral-1",
    Neutral_1_Overlay = "neutral-1-overlay",
    Neutral_2 = "neutral-2",
    Neutral_3 = "neutral-3",
    Neutral_4 = "neutral-4",
    Pine_1 = "pine-1",
    Pine_2 = "pine-2",
    Pine_3 = "pine-3",
    Pine_4 = "pine-4",
    Pine_5 = "pine-5",
    Plum_1 = "plum-1",
    Plum_2 = "plum-2",
    Plum_3 = "plum-3",
    Gold_0 = "gold-0",
    Gold_1 = "gold-1",
    Gold_2 = "gold-2",
    Gold_3 = "gold-3",
    Gold_4 = "gold-4",
    Gold_5 = "gold-5",
    Khaki_0 = "khaki-0",
    Khaki_1 = "khaki-1",
    Type_1 = "type-1",
    Type_2 = "type-2",
    Type_3 = "type-3",
    Type_Link = "type-link",
    Type_Alt = "type-alt",
    Icon_Gold = "text-gold-2",
    Icon_Plum = "text-plum-2",
    Icon_Neutral = "text-neutral-2",
    Icon_Green = "text-pine-2",
    Border_Pine = "border-pine",
    Border_Medium ="border-medium"
}

interface GlobalClassNames {
    maxWidth: string,
    defaultXPadding: string
}

export const globalClassNames: GlobalClassNames = {
    maxWidth: "max-w-screen-xl",
    defaultXPadding: "px-8"
}

export function getTextColorClassName(color: Color): string {
    return `text-${color}`
}

export function getBgColorClassName(color: Color): string {
    return `bg-${color}`
}

export function getBorderColorClassName(color: Color): string {
    return `border-${color}`
}

export function getColorCssValue(color: Color): string {
    return `var(--${color})`
}