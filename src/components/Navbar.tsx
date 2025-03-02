"use client" 

import { fontIbmPlexSerif, fontWorkSans } from "@/app/layout";
import { Color, getBgColorClassName, getBorderColorClassName, getTextColorClassName, globalClassNames } from "./StyleConstants";
import { SvgDisplayModeIcon, SvgMenu, SvgMoonIcon, SvgVerticalLine } from "./Svg";
import { useState } from "react";
import { useTheme } from "next-themes";

export enum PageName {
    About="About", 
    Work="Work"
}

interface Page {
    name: PageName,
    href: string
}

const pages: Page[] = [
    {
        name: PageName.About,
        href: "/about"
    },
    {
        name: PageName.Work,
        href:"/"
    }
]

interface NavbarProps {
    currentPage: PageName
}

export default function Navbar({currentPage}: NavbarProps) {

    return (
        <nav>
            <div className={`${getBgColorClassName(Color.Neutral_1)} w-full flex justify-center px-8`}>
                <div className={`flex items-center justify-between w-full ${globalClassNames.maxWidth}`}>
                    <div className="flex items-center justify-between py-2 space-x-2">
                        <button className="p-2"><SvgMenu color={Color.Icon_Primary} width="24" height="24"/></button>
                        <SvgVerticalLine color={Color.Icon_Primary} width="1" height="24" />
                        <DarkLightModeButton />
                    </div>
                    <a href="/">
                        <h2 className={`${fontIbmPlexSerif.className} ${getTextColorClassName(Color.Type_1)} text-xl italic hidden md:inline`}>Nayeli A. Pérez T.</h2>
                    </a>
                    <div>
                        <ul className="flex items-center justify-between py-4 space-x-2">
                            {   
                                pages.map(page => {
                                    const isCurrentPage = page.name == currentPage
                                    const activeCssStyle = (isCurrentPage) ? `${getBgColorClassName(Color.Neutral_3)} rounded` : ""
                                    return (
                                        <li><a href={page.href} className={`${getTextColorClassName(Color.Type_2)} ${fontWorkSans.className} px-4 py-2 ${activeCssStyle}`}>{page.name}</a></li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

function DarkLightModeButton() {
    const [selectorDisplayed, updateSelectorDisplayed] = useState(false)
    const {resolvedTheme, setTheme} = useTheme()

    function getIcon(theme: string | undefined) {
        if (theme == "light" || undefined) {
            return <SvgDisplayModeIcon color={Color.Icon_Primary} width="24" height="24"/> 
        } else {
            return <SvgMoonIcon color={Color.Icon_Primary} width="24" height="24"/> 
        }
    }

    if (selectorDisplayed) {
        return (
            <div className="relative">
                <button 
                className={`hover:rounded-2xl hover:border p-2 ${getBorderColorClassName(Color.Border_Medium)} invisible`}
                onClick={() => updateSelectorDisplayed(true)}
                >
                { getIcon(resolvedTheme) }
            </button>
                <div className={`flex flex-col border rounded-2xl p-1 absolute -top-1 ${getBorderColorClassName(Color.Border_Medium)}`}>

                    {
                        ["light", "dark"].map(
                            theme =>
                                <button 
                                    onClick={
                                        () => {
                                            setTheme(theme)
                                            updateSelectorDisplayed(false)
                                        }
                                    }
                                    className={`hover:rounded-2xl hover:border p-2 ${getBorderColorClassName(Color.Border_Medium)}`}>
                                    { getIcon(theme) }
                                </button>
                            
                        )
                    }
                </div>
            </div>
        )
        
    } else {

        return (
            <button 
                className={`hover:rounded-2xl hover:border p-2 ${getBorderColorClassName(Color.Border_Medium)}`}
                onClick={() => updateSelectorDisplayed(true)}
                >
                { getIcon(resolvedTheme) }
            </button>
        )
    }
    
}