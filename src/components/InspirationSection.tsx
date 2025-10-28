'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import { fontLora, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import { categoryConfig, currentInspirations, InspirationItem } from "@/app/inspiration/content";

export default function InspirationSection() {
    const [selectedInspiration, setSelectedInspiration] = useState<InspirationItem | null>(null);

    return (
        <>
            <Section className="bg-neutral-3" paddingVertical="Standard">
                <div className="flex flex-col space-y-12">
                    <h2 className={`text-type-1 text-base font-semibold uppercase ${fontWorkSans.className} leading-6`}>
                        Currently Inspiring Me
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3">
                        {currentInspirations.map((inspiration, index) => (
                            <InspirationCard
                                key={index}
                                inspiration={inspiration}
                                onClick={() => setSelectedInspiration(inspiration)}
                            />
                        ))}
                    </div>

                    <ButtonLink title="View Inspiration Library" url="/inspiration" textColorClassName="text-type-2" />
                </div>
            </Section>

            {selectedInspiration && (
                <InspirationModal
                    inspiration={selectedInspiration}
                    onClose={() => setSelectedInspiration(null)}
                />
            )}
        </>
    );
}

interface InspirationCardProps {
    inspiration: InspirationItem;
    onClick?: () => void;
}

export function InspirationCard({ inspiration, onClick }: InspirationCardProps) {
    const category = categoryConfig.get(inspiration.category)!;

    return (
        <div
            onClick={onClick}
            className={`self-stretch h-64 sm:h-56 md:h-64 lg:h-56 rounded-lg outline outline-2 ${category.outlineClassName} flex flex-col justify-start items-center overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]`}
        >
            <div className={`self-stretch px-2 py-1 sm:px-1.5 sm:py-0.5 ${category.bgClassName} flex justify-end items-center gap-2.5 overflow-hidden`}>
                <div className={`justify-start text-white text-lg sm:text-base font-normal ${fontYarndings12.className} leading-none`}>
                    {category.yIcon}
                </div>
            </div>

            <div className="self-stretch h-44 sm:h-36 md:h-44 lg:h-36 relative">
                <Image
                    src={inspiration.imageSrc}
                    alt={inspiration.label}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            </div>

            <div className={`self-stretch flex-1 px-4 py-3 sm:px-3 sm:py-2 ${category.bgClassName} flex justify-start items-center gap-2.5 overflow-hidden`}>
                <div className={`flex-1 self-stretch flex items-center justify-start text-white text-sm sm:text-sm font-medium ${fontWorkSans.className} leading-tight line-clamp-2`}>
                    {inspiration.label}
                </div>
            </div>
        </div>
    );
}

interface InspirationModalProps {
    inspiration: InspirationItem;
    onClose: () => void;
}

export function InspirationModal({ inspiration, onClose }: InspirationModalProps) {
    const category = categoryConfig.get(inspiration.category)!;

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-[700px] h-auto max-h-[90vh] bg-neutral-25 rounded-md overflow-hidden relative flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-type-2 hover:text-type-1 transition-colors"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left side - Image */}
                <div className="w-full md:w-64 h-48 md:h-auto flex-shrink-0 relative">
                    <Image
                        src={inspiration.imageSrc}
                        alt={inspiration.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 256px"
                    />
                </div>

                {/* Right side - Content */}
                <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
                    {/* Title and Media Type */}
                    <div className="flex flex-col items-center gap-2 py-4">
                        <h2 className={`text-center text-type-1 text-2xl md:text-3xl font-normal ${fontLora.className} leading-10`}>
                            {inspiration.label}
                        </h2>
                        {inspiration.mediaType && (
                            <div className={`text-center text-type-3 text-xs font-semibold ${fontWorkSans.className} uppercase leading-4`}>
                                {inspiration.mediaType}
                            </div>
                        )}
                    </div>

                    {/* Description Box */}
                    <div className="flex-1 p-4 bg-neutral-50 rounded-[3px] outline outline-1 outline-border-subtle flex flex-col gap-4">
                        <div className="flex-1">
                            <p className={`text-type-2 text-sm font-normal ${fontWorkSans.className} leading-5`}>
                                {inspiration.description}
                            </p>
                        </div>

                        {/* Divider and Footer */}
                        <div className="flex flex-col gap-2">
                            <div className="h-0 border-t border-dashed border-border-subtle"></div>
                            <div className="flex justify-between items-center">
                                {/* Category */}
                                <div className="rounded flex items-center gap-0.5">
                                    <div className="w-7 h-7 p-1 rounded-3xl flex justify-center items-center">
                                        <div className={`${category.yIconClassName} text-lg font-normal ${fontYarndings12.className} leading-4`}>
                                            {category.yIcon}
                                        </div>
                                    </div>
                                    <div className={`${category.yIconClassName} text-sm font-medium ${fontWorkSans.className} leading-5 capitalize`}>
                                        {inspiration.category === 'built-environment' ? 'Built Environment' : inspiration.category}
                                    </div>
                                </div>

                                {/* Date */}
                                {inspiration.date && (
                                    <div className={`${category.yIconClassName} text-sm font-medium ${fontWorkSans.className} leading-5`}>
                                        {inspiration.date}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
