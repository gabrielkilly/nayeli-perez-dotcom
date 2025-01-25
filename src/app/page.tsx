import { AppColor } from "@/components/AppColor";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Head from "next/head";
import { HomeContent } from "./content";

interface HomeProps {
    content: HomeContent
}

export default function Home({content}: HomeProps) {
    return (
        <>
            <main>
                <div className="flex flex-col">
                    <Navbar />
                    <Section color={AppColor.Neutral_1}>
                        <p><span>{content.nayeliName}</span> {content.mainDescription}</p>
                        <p>{content.additionalDescription}</p>
                    </Section>
                </div>
            </main>
        </>
    )
}