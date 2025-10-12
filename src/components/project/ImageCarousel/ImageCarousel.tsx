'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface ImageCarouselProps {
    images: string[]
    isOpen: boolean
    onClose: () => void
    initialIndex?: number
}

export default function ImageCarousel({ images, isOpen, onClose, initialIndex = 0 }: ImageCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        startIndex: initialIndex,
        loop: true
    })
    const [currentIndex, setCurrentIndex] = useState(initialIndex)

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    // Track current slide index
    useEffect(() => {
        if (!emblaApi) return

        const onSelect = () => {
            setCurrentIndex(emblaApi.selectedScrollSnap())
        }

        emblaApi.on('select', onSelect)
        onSelect() // Set initial index

        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    // Update carousel position when initialIndex changes
    useEffect(() => {
        if (emblaApi && isOpen) {
            emblaApi.scrollTo(initialIndex)
            setCurrentIndex(initialIndex)
        }
    }, [emblaApi, initialIndex, isOpen])

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowLeft') scrollPrev()
            if (e.key === 'ArrowRight') scrollNext()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose, scrollPrev, scrollNext])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    onClick={onClose}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors p-2"
                        aria-label="Close carousel"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Carousel container */}
                    <div className="w-full h-full flex items-center justify-center px-4 md:px-16" onClick={(e) => e.stopPropagation()}>
                        <div className="relative w-full h-full max-w-7xl max-h-[90vh] flex items-center">
                            {/* Previous button */}
                            {images.length > 1 && (
                                <button
                                    onClick={scrollPrev}
                                    className="absolute left-0 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
                                    aria-label="Previous image"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-8 h-8"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                            )}

                            {/* Embla carousel */}
                            <div className="overflow-hidden w-full h-full" ref={emblaRef}>
                                <div className="flex h-full">
                                    {images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="flex-[0_0_100%] min-w-0 flex items-center justify-center px-2"
                                        >
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <Image
                                                    src={image}
                                                    alt={`Project image ${index + 1}`}
                                                    width={1920}
                                                    height={1080}
                                                    className="max-w-full max-h-full object-contain rounded-lg"
                                                    priority={index === initialIndex}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Next button */}
                            {images.length > 1 && (
                                <button
                                    onClick={scrollNext}
                                    className="absolute right-0 z-10 text-white hover:text-gray-300 transition-colors p-2 bg-black/50 rounded-full"
                                    aria-label="Next image"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-8 h-8"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Image counter */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
                            {currentIndex + 1} / {images.length}
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
