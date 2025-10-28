"use client"
import Footer from "@/components/Footer";
import { InspirationCard, InspirationModal } from "@/components/InspirationSection";
import Section from "@/components/Section";
import { allInspirations, currentInspirations, InspirationItem, categoryConfig } from "./content";
import { fontLora, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import { useState } from "react";

export default function Inspiration() {
    const [selectedInspiration, setSelectedInspiration] = useState<InspirationItem | null>(null);

    return (
        <main>
            <div className="flex flex-col items-center justify-center">
                <Section className="bg-neutral-5" paddingVertical="Standard">
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
                    </div>
                </Section>

                <Section className="bg-neutral-3" paddingVertical="Standard">
                    <h3 className={`text-type-2 text-2xl font-normal ${fontLora.className} leading-8 mb-8`}>
                        Inspiration & References Library
                    </h3>

                    <div className="flex flex-col w-full space-y-3">
                        {allInspirations.map((inspiration, index) => {
                            const categoryInfo = categoryConfig.get(inspiration.category);
                            return (
                                <div
                                    key={index}
                                    className="group flex items-center gap-4 p-1 bg-white rounded cursor-pointer hover:bg-neutral-5"
                                    onClick={() => setSelectedInspiration(inspiration)}
                                >
                                    <div className="flex-shrink-0 w-16 h-16 bg-neutral-4 rounded overflow-hidden">
                                        <img
                                            src={inspiration.imageSrc}
                                            alt={inspiration.label}
                                            className="w-full h-full object-cover transition-all duration-200 group-hover:blur-[1px]"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h4 className={`text-type-2 text-base font-medium ${fontWorkSans.className} leading-6`}>
                                            {inspiration.label}
                                        </h4>
                                        {inspiration.mediaType && (
                                            <p className={`text-type-3 text-xs uppercase ${fontWorkSans.className} leading-4 mt-0.5`}>
                                                {inspiration.mediaType}
                                            </p>
                                        )}
                                    </div>

                                    {categoryInfo && (
                                        <div className="flex items-center gap-2 px-3 py-1.5">
                                            <span className={`icon ${fontYarndings12.className} ${categoryInfo.yIconClassName} text-xl font-normal leading-5`}>
                                                {categoryInfo.yIcon}
                                            </span>
                                            <span className={`text-type-1 text-sm ${fontWorkSans.className} capitalize font-medium leading-5`}>
                                                {inspiration.category === 'built-environment' ? 'Built Environment' : inspiration.category}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </Section>
    
                {selectedInspiration && (
                    <InspirationModal
                        inspiration={selectedInspiration}
                        onClose={() => setSelectedInspiration(null)}
                    />
                )}
            </div>
            <Footer />
        </main>
    )
}