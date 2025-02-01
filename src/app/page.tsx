import { AppColor, getTextColorClassName } from "@/components/AppStyleConstants";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { homeContent, Skill } from "./content";
import { fontFamiljenGrotesk, fontIbmPlexSerif, fontWorkSans, fontYarndings12 } from "./layout";


export default function Home() {
    const content = homeContent;    

    return (
        <>
            <main>
            <Navbar />
                <div className="flex flex-col items-center justify-center">
                    <Section backgroundColor={AppColor.Neutral_1}>
                        <div className="flex flex-col space-y-10">
                            <p>
                                <span className={`${fontIbmPlexSerif.className} text-type-1 text-5xl leading-10 italic`}>{content.nayeliName}</span> &nbsp; 
                                <span className={`${fontFamiljenGrotesk.className} text-type-2 text-4xl leading-10`}>{content.mainDescription}</span> &nbsp;                            
                                <span className={`${fontYarndings12.className} text-gold-2 text-4xl`}>{content.yarndingsIcon}</span>
                            </p>
                            <p className={`${fontWorkSans.className} ${getTextColorClassName(AppColor.Icon_Gold)} text-type-1 text-xl`}>{content.additionalDescription}</p>
                            <SkillsContainer skills={content.skills} />
                        </div>
                    </Section>
                </div>
            </main>
        </>
    )
}

interface SkillsContainerProps {
    skills: Skill[]
}

function SkillsContainer({skills}: SkillsContainerProps) { 
    if (skills.length != 4) {
        throw Error("Skills content length is not equal to 4")
    }
    return (
        <div className="flex flex-col w-full space-y-4">
            <div className="flex justify-between w-full">
                <SkillItem skill={skills[0]}/>
                <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>                
                <SkillItem skill={skills[1]}/>
            </div>
            <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
            <div className="flex justify-between w-full">
                <SkillItem skill={skills[2]}/>
                <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10"></div>                
                <SkillItem skill={skills[3]}/>
            </div>
        </div>
    )
}

interface SkillItemProps {
    skill: Skill
}

function SkillItem({ skill } : SkillItemProps) {
    return (
        <div className="flex flex-col space-y-4 px-8">
            <h3>
                <span className={`${fontYarndings12.className} ${getTextColorClassName(skill.iconColor)} text-2xl`}>{skill.yanrdingsIcon}</span> &nbsp; 
                <span className={`${fontIbmPlexSerif.className} text-2xl italic`}>{skill.title}</span>
            </h3>
            <p className={`${fontWorkSans.className} text-xl`}>{skill.description}</p>
        </div>
    )
}