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
                <div className="flex flex-col space-y-8">
                    <h2 className={`text-type-1 text-base font-semibold uppercase ${fontWorkSans.className} leading-6`}>
                        Currently Inspiring Me
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3">
                        {currentInspirations.map((inspiration, index) => {
                            return (
                            <InspirationCard
                                key={index}
                                index={index}
                                inspiration={inspiration}
                                onClick={() => setSelectedInspiration(inspiration)}
                            />
                            )
                        })}
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
    index: number;
    onClick?: () => void;
}

export function InspirationCard({ inspiration, index: tiltLeft, onClick }: InspirationCardProps) {
    const category = categoryConfig.get(inspiration.category)!;
    const hoverAnimation = tiltLeft % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"
    console.log(tiltLeft, "HELLLOOOO")

    return (
        <div
            onClick={onClick}
            className={`group self-stretch h-64 sm:h-56 md:h-64 lg:h-56 transition-all ${hoverAnimation} rounded-lg outline outline-2 ${category.outlineClassName} flex flex-col justify-start items-center overflow-hidden cursor-pointer relative before:absolute before:inset-0 before:bg-black before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-200 before:z-10`}
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
                    className="object-cover group-hover:blur-[1px]"
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

        // Save current scroll position
        const scrollY = window.scrollY;

        document.addEventListener('keydown', handleEscape);
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 sm:p-4"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="fixed top-4 right-4 z-[60] w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors bg-black/25 rounded-full backdrop-blur-sm"
                aria-label="Close modal"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div
                className="w-full h-full sm:w-[700px] sm:h-[720px] bg-neutral-2 sm:rounded-md overflow-y-auto sm:overflow-hidden relative flex flex-col sm:flex-row"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="w-full h-80 sm:w-64 sm:h-[720px] flex-shrink-0 relative">
                    <Image
                        src={inspiration.imageSrc}
                        alt={inspiration.label}
                        fill
                        className="object-cover"
                        sizes="1200px"
                    />
                </div>

                <div className="flex-1 sm:w-[466px] sm:h-[720px] p-4 flex flex-col justify-start items-center gap-2">
                    <div className="self-stretch flex flex-col justify-center items-center gap-2 h-auto min-h-48 sm:min-h-64 flex-shrink-0">
                        <div className={`text-center justify-center text-type-1 text-3xl font-normal ${fontLora.className} leading-10`}>
                            {inspiration.label}
                        </div>
                        {inspiration.mediaType && (
                            <div className={`text-center justify-start text-type-3 text-xs font-normal ${fontWorkSans.className} uppercase leading-4`}>
                                {inspiration.mediaType}
                            </div>
                        )}
                    </div>

                    <div className="h-full self-stretch sm:flex-1 flex flex-col justify-start items-start gap-2 sm:min-h-0">
                        <div className="h-full self-stretch p-4 bg-neutral-3 rounded-[3px] flex flex-col justify-start items-end gap-4 sm:overflow-y-auto">
                            <div className="self-stretch flex flex-col sm:justify-between justify-start items-end gap-4 sm:min-h-full">
                                <div className="self-stretch flex flex-col justify-start items-start gap-1">
                                    <div className={`self-stretch justify-start text-type-2 text-sm font-normal ${fontWorkSans.className} leading-5 whitespace-pre-line`}>
                                        {inspiration.description}
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                                    <div className="self-stretch h-0 border-t border-dashed border-border-subtle"></div>
                                    <div className="self-stretch inline-flex justify-between items-center">
                                        <div className="rounded flex justify-start items-center gap-0.5 pb-2">
                                            <div className="w-7 h-7 p-1 rounded-3xl flex justify-center items-center gap-2">
                                                <div className={`justify-start ${category.yIconClassName} text-lg font-normal ${fontYarndings12.className} leading-4`}>
                                                    {category.yIcon}
                                                </div>
                                            </div>
                                            <div className={`justify-start ${category.yIconClassName} text-sm font-medium ${fontWorkSans.className} leading-5 capitalize`}>
                                                {inspiration.category === 'built-environment' ? 'Built Environment' : inspiration.category}
                                            </div>
                                        </div>
                                        {inspiration.date && (
                                            <div className={`justify-start ${category.yIconClassName} text-sm font-medium ${fontWorkSans.className} leading-5`}>
                                                {inspiration.date}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
