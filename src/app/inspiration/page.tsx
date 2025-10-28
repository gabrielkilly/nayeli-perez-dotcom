"use client"
import Footer from "@/components/Footer";
import { InspirationCard, InspirationModal } from "@/components/InspirationSection";
import Section from "@/components/Section";
import { currentInspirations, InspirationItem } from "./content";
import { fontWorkSans } from "@/components/Fonts";
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