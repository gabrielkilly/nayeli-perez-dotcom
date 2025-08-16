import { fontIbmPlexSerif, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import Section from "./Section";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className="w-full flex-col">
                <Section className="bg-gold-700">
                    <div className="flex w-full flex-col items-center justify-center">
                        <div className={`text-type-alt text-4xl font-normal ${fontYarndings12.className}`}>q</div>
                        <p className={`self-stretch text-center justify-start text-type-alt text-2xl font-normal ${fontIbmPlexSerif.className} leading-loose`}>
                            <i>I am currently open to new opportunities.</i>
                        </p>
                    </div>
                </Section>
                <div className="w-full self-stretch px-20 py-4 inline-flex flex-col justify-start items-center gap-16 bg-neutral-1">
                    <div className="w-full flex flex-col justify-start items-center gap-4">
                        <div className={`self-stretch text-center justify-start ${fontWorkSans.className} text-type-1`}>
                            <span className={`text-xs font-medium leading-none`}>{currentYear} - Thank you to my husband, </span>
                            <a className={`text-type-link text-xs font-medium underline leading-none`} target="_blank" href="https://www.linkedin.com/in/gabrielkilly/">Gabriel Killy</a>
                            <span className={`text-xs font-medium leading-none`}> </span>
                            <span className={`text-icon-plum ${fontYarndings12.className} text-xs font-normal leading-none`}>y</span>
                            <span className={`text-xs font-medium leading-none`}>, for bringing this little site to life. </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}