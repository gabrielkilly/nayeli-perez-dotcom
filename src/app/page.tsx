import { AppColor } from "@/components/AppStyleConstants";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { homeContent } from "./content";
import { fontFamiljenGrotesk, fontIbmPlexSerif, fontWorkSans, fontYarndings12 } from "./layout";


export default function Home() {
    const content = homeContent;    

    return (
        <>
            <main>
            <Navbar />
                <div className="flex flex-col items-center justify-center">
                    <Section backgroundColor={AppColor.Neutral_1}>
                        <div>
                            <p>
                                <span className={`${fontIbmPlexSerif.className} text-type-1 text-5xl leading-10`}>{content.nayeliName}</span> &nbsp; 
                                <span className={`${fontFamiljenGrotesk.className} text-type-2 text-4xl leading-10`}>{content.mainDescription}</span> &nbsp;                            
                                <span className={`${fontYarndings12.className} text-gold-2 text-4xl`}>{content.yarndingsIcon}</span>
                            </p>
                            <p className={`${fontWorkSans.className} text-type-1 text-xl`}>{content.additionalDescription}</p>
                        </div>
                    </Section>
                </div>
            </main>
        </>
    )
}