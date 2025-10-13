"use client"

import { motion } from "framer-motion"
import { ReactNode, useLayoutEffect } from "react"
import { usePathname } from "next/navigation"

interface PageTransitionProps {
    children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname()

    useLayoutEffect(() => {
        // Force scroll to top using multiple methods
        // useLayoutEffect runs synchronously before paint, preventing visible scroll
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <div style={{ minHeight: '100vh' }}>
            <motion.div
                initial={{ opacity: .4 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: .4 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
            >
                {children}
            </motion.div>
        </div>
    )
}
