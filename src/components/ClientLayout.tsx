"use client"

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"
import { ReactNode } from "react"
import { ProjectAuthProvider } from "@/contexts/ProjectAuthContext"

export default function ClientLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname()

    // Determine current page based on pathname
    let currentPage: "About" | "Work" | undefined = undefined
    if (pathname === "/about") {
        currentPage = "About"
    } else if (pathname === "/work") {
        currentPage = "Work"
    }

    return (
        <ProjectAuthProvider>
            <Navbar currentPage={currentPage} />
            {children}
        </ProjectAuthProvider>
    )
}
