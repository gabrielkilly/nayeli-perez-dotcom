"use client"

import { motion } from "framer-motion"
import { ReactNode, useEffect } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
    children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname()

    useEffect(() => {
        // Force scroll to top using multiple methods
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div style={{ minHeight: '100vh' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </div>
    )
}
