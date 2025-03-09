"use client" 

import { fontIbmPlexSerif, fontWorkSans } from "@/app/layout";
import { globalClassNames } from "./StyleConstants";
import { SvgDisplayModeIcon, SvgIconPlaceholder, SvgMenu, SvgMoonIcon, SvgVerticalLine } from "./Svg";
import { JSX, use, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { eventNames } from "node:process";

interface Page {
    name: string,
    href: string
}

const pages: Page[] = [
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Work",
        href:"/"
    }
]

interface NavbarProps {
    currentPage: "About" | "Work"
}

export default function Navbar(props: NavbarProps) {
    console.log(props.currentPage)

    return (
        <nav>
            <div className="bg-neutral-1 w-full flex justify-center px-8">
                <div className={`flex items-center justify-between w-full ${globalClassNames.maxWidth}`}>
                    <div className="flex items-center justify-between py-2 space-x-2">
                        <button className="p-2"><SvgMenu colorCssValue="var(--icon-primary)" width="24" height="24"/></button>
                        <SvgVerticalLine colorCssValue="var(--icon-primary)" width="1" height="24" />
                        <DarkLightModeButton />
                    </div>
                    <a href="/">
                        <h2 className={`${fontIbmPlexSerif.className} text-type-1 text-xl italic hidden md:inline`}>Nayeli A. Pérez T.</h2>
                    </a>
                    <div>
                        <ul className="flex items-center justify-between py-4 space-x-2">
                            {   
                                pages.map(page => {
                                    const isCurrentPage = page.name == props.currentPage
                                    console.log(page.name)
                                    const activeCssStyle = (isCurrentPage) ? `bg-neutral-3 rounded` : ""
                                    return (
                                        <li key={page.name}><a href={page.href} className={`text-type-2 ${fontWorkSans.className} px-4 py-2 ${activeCssStyle}`}>{page.name}</a></li>
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
    const [isLoading, setIsLoading] = useState(true)

    const selectorRef = useRef<HTMLDivElement>(null)

    function getIcon(theme: string | undefined) {
        if (theme == "light" || undefined) {
            return <SvgDisplayModeIcon colorCssValue="var(--icon-primary)" width="24" height="24"/> 
        } else {
            return <SvgMoonIcon colorCssValue="var(--icon-primary)" width="24" height="24"/> 
        }
    }

    function getSelectedClassName(theme: string): string {
        if (resolvedTheme == theme) {
            return "bg-neutral-4"
        } else {
            return ""
        }
    }

    function hideSelectorIfNotFocused(elementReceivingFocus: (EventTarget & Element) | null) {
        console.log(elementReceivingFocus)
        if (!selectorRef.current?.contains(elementReceivingFocus)) {
            updateSelectorDisplayed(false)
        }
    }

    useEffect(() => {
        if (selectorRef.current && selectorDisplayed) {
            selectorRef.current.querySelector("button")?.focus()
        }
    }, [selectorDisplayed])

    useEffect(() => {
        setIsLoading(false)
    }, [])

    if (selectorDisplayed) {
        return (
            <div className="relative" >
                <button 
                    className={`hover:rounded-2xl hover:border p-2 border-border-medium invisible`}
                >
                    { getIcon(resolvedTheme) }
                </button>
                <div 
                    className={`flex flex-col border rounded-2xl px-1 py-2 absolute -top-1 bg-neutral-1 border-border-medium space-y-1 shadow`} 
                    ref={selectorRef} 
                    >

                    {
                        ["light", "dark"].map(
                            theme =>
                                <button 
                                    key={theme}
                                    onClick={
                                        () => {
                                            setTheme(theme)
                                            updateSelectorDisplayed(false)
                                        }
                                    }
                                    onBlur={(focusEvent) => hideSelectorIfNotFocused(focusEvent.relatedTarget)}
                                    className={`rounded-2xl p-2 border border-neutral-1 hover:border-border-medium hover:shadow ${getSelectedClassName(theme)}`}>
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
                className={`rounded-2xl border p-2 border-neutral-1 hover:border-border-medium hover:shadow ${isLoading ? "invisible" : ""}`}
                onClick={() => updateSelectorDisplayed(true)}
                >
                { getIcon(resolvedTheme) }
            </button>
        )
    }
    
}