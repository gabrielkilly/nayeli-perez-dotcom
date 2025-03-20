"use client" 

import { fontIbmPlexSerif, fontWorkSans } from "@/app/layout";
import { globalClassNames } from "./StyleConstants";
import { SvgDisplayModeIcon, SvgLinkedIn, SvgMail, SvgMenu, SvgMenuOpen, SvgMoonIcon, SvgPin, SvgVerticalLine } from "./Svg";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Section from "./Section";

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
    currentPage: "About" | "Work" | null
}

export default function Navbar(props: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDarkModeSelectorDisplayed, updateDarkModeSelectorDisplayed] = useState(false)

    function getMenuIcon() {
        if (isMenuOpen) {
            return <SvgMenuOpen colorCssValue="var(--icon-primary)"/>
        } else {
            return <SvgMenu colorCssValue="var(--icon-primary)" width="24" height="24"/>
        }
    }

    function openDarkModeSelector() {
        if (isMenuOpen) {
            setIsMenuOpen(false)
        }
        updateDarkModeSelectorDisplayed(true)
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("stop-scrolling");
        } else {
            document.body.classList.remove("stop-scrolling");
        }
    }, [isMenuOpen])

    return (
        <nav>
            <div className="bg-neutral-1 w-full flex justify-center px-8">
                <div className={`flex items-center justify-between w-full ${globalClassNames.maxWidth}`}>
                    <div className="flex items-center justify-between py-2 space-x-2">
                        <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>{getMenuIcon()}</button>
                        <SvgVerticalLine colorCssValue="var(--icon-primary)" width="1" height="24" />
                        <DarkLightModeSelector selectorDisplayed={isDarkModeSelectorDisplayed} openSelector={openDarkModeSelector} closeSelector={() => updateDarkModeSelectorDisplayed(false)} />
                    </div>
                    <a href="/">
                        <h2 className={`${fontIbmPlexSerif.className} text-type-1 text-xl italic hidden md:inline`}>Nayeli A. Pérez T.</h2>
                    </a>
                    <div>
                        <ul className="flex items-center justify-between py-4 space-x-2">
                            {   
                                pages.map(page => {
                                    const isCurrentPage = page.name == props.currentPage
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
            {
                (isMenuOpen) ? <Menu closeMenu={() => setIsMenuOpen(false)} /> : <></>
            }
        </nav>
    )
}

interface MenuProps {
    closeMenu: () => void
}

function Menu({closeMenu}: MenuProps) {

    const menuRef = useRef<HTMLDivElement>(null)
    const [notification, setNotification] = useState<string | null>(null);

    function closeMenuWhenWrapperClicked(target: EventTarget) {
        if (target == menuRef.current) {
            closeMenu()
        }
    }

    function copyEmailToClipboard() {
        const email = "nayeliaperezt@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            setNotification("Email copied");
            setTimeout(() => setNotification(null), 2000);
        });
    }

    return (
        <div className="h-full w-screen bg-border-subtle absolute" ref={menuRef} onClick={mouseEvent => closeMenuWhenWrapperClicked(mouseEvent.target)}>
            <Section backgroundColorClassName="bg-neutral-1">
                <div className="w-full flex flex-col space-y-8">
                    <div className="flex flex-col space-y-2 px-2">
                        <a href="/inspiration" className={`text-type-2 text-base font-medium ${fontWorkSans.className} leading-snug tracking-wide`}>Inspiration Library</a>
                        <a href="" className={`text-type-2 text-base font-medium ${fontWorkSans.className} leading-snug tracking-wide`}>Download Resumé</a>
                    </div>
                    <div className="w-full h-0 relative ring-1 ring-border-subtle"></div>
                    <div className="flex flex-col px-2 space-y-2">
                        <h2 className={`text-type-3 text-xs font-semibold ${fontWorkSans.className} uppercase leading-none mb-2`}>Contact</h2>
                        <a href="https://www.linkedin.com/in/nayelip" target="_blank">
                            <div className="flex space-x-1">
                                <SvgLinkedIn colorCssValue="var(--icon-primary)"/>
                                <p className={`text-type-1 text-base font-normal ${fontWorkSans.className} leading-normal`}>LinkedIn</p>
                            </div>
                        </a>
                        <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                            <button onClick={copyEmailToClipboard} className="flex space-x-1">
                                <SvgMail colorCssValue="var(--icon-primary)"/>
                                <p className={`text-type-1 text-base font-normal ${fontWorkSans.className} leading-normal`}>nayeliaperezt@gmail.com</p>
                            </button>
                            {notification && <p className="text-type-2 text-sm text-green-500">{notification}</p>}
                        </div>
                    </div>
                    <div className="w-full h-0 relative ring-1 ring-border-subtle"></div>
                    <div className="flex justify-between w-full px-2">
                        <div className="flex">
                            <SvgPin colorCssValue="var(--icon-primary)" />
                            <p className={`text-type-2 text-sm font-normal ${fontWorkSans.className} leading-tight`}>Based in <b>San Antonio, TX</b></p>
                        </div>
                        <p className={`text-type-2 text-sm font-normal ${fontWorkSans.className} leading-tight`}>Find me on <a href="https://www.are.na/nayeli-perez/channels" className="text-type-link text-sm underline" target="_blank">Are.na</a></p>
                    </div>
                </div>
            </Section>
        </div>
    )
}

interface DarkLightModeSelectorProps {
    selectorDisplayed: boolean,
    openSelector: () => void, 
    closeSelector: () => void
}

function DarkLightModeSelector({selectorDisplayed, openSelector, closeSelector}: DarkLightModeSelectorProps) {
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
        if (!selectorRef.current?.contains(elementReceivingFocus)) {
            closeSelector()
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
                                            closeSelector()
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
                onClick={() => openSelector()}
                >
                { getIcon(resolvedTheme) }
            </button>
        )
    }
    
}