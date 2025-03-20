import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import { ExperienceContent, aboutContent, Skill, SkillsSectionContent } from "./content";
import { fontFamiljenGrotesk, fontIbmPlexSerif, fontWorkSans, fontYarndings12 } from "../layout";
import { SvgPlusSign } from '@/components/Svg';
import ButtonLink from '@/components/Button';
import YarndingsIcon from "@/components/YarndingsIcon";


export default function Home() {
    const content = aboutContent;    

    return (
        <>
            <main>
                <Navbar currentPage={"About"}/>
                <div className="flex flex-col items-center justify-center">
                    <Section backgroundColorClassName="bg-neutral-2">
                        <div className="flex flex-col lg:flex-row space-y-10 w-full justify-between items-center">
                            <div className="flex flex-col items-center lg:items-start space-y-10 w-full md:w-1/2">
                                <h1 className={`${fontFamiljenGrotesk.className} text-5xl lead ng-10`}>{content.welcomeSection.welcomeTitle}</h1>
                                <p className={`${fontIbmPlexSerif.className} italic text-2xl text-center`}>{content.welcomeSection.welcomeText}
                                    <YarndingsIcon textColorClassName="text-icon-plum" icon={content.welcomeSection.welcomeIcon} className="px-2" /></p>
                                <div className="flex flex-row space-x-10">
                                    <ButtonLink {...content.welcomeSection.cta1} />
                                    <ButtonLink {...content.welcomeSection.cta2} />
                                </div>
                            </div>
                            <img className="w-full md:w-1/2" src={content.welcomeSection.welcomeImagePath} alt="Nayeli" />
                        </div>
                    </Section>
                    <SkillsSection content={content.skillsSection} />
                    <ExperienceSection content={content.experienceContent} />
                </div>
            </main>
        </>
    )
}

interface SkillsSectionProps {
    content: SkillsSectionContent
}

function SkillsSection({content}: SkillsSectionProps) { 
    const {skills, title} = content
    if (skills.length != 4) {
        throw Error("Skills content length is not equal to 4")
    }
    return (
        <Section backgroundColorClassName="bg-neutral-1">
            <div className="flex flex-col space-y-12"> 
                <h2 className={`text-type-1 text-xl font-semibold ${fontWorkSans.className} uppercase leading-relaxed`}>
                    {title}
                </h2>
                <div className="flex flex-col w-full space-y-8">
                    <div className="flex flex-col lg:flex-row justify-around w-full space-y-8 lg:space-x-8 lg:space-y-0">
                        <SkillItem skill={skills[0]}/>
                        <div className="self-stretch relative origin-top-left ring-1 ring-border-subtle flex-shrink"></div>                
                        <SkillItem skill={skills[1]}/>
                    </div>
                    <div className="self-stretch h-0 relative ring-1 ring-border-subtle"></div>
                    <div className="flex flex-col lg:flex-row justify-around w-full space-y-8 lg:space-x-8 lg:space-y-0">
                        <SkillItem skill={skills[2]}/>
                        <div className="self-stretch border-border-subtle relative origin-top-left ring-1 ring-border-subtle flex-shrink"></div>                
                        <SkillItem skill={skills[3]}/>
                    </div>
                </div>
            </div>
            
        </Section>

    )
}

interface SkillItemProps {
    skill: Skill
}

function SkillItem({ skill } : SkillItemProps) {
    return (
        <div className="flex flex-col space-y-4 basis-1/2">
            <h3>
                <YarndingsIcon icon={skill.yanrdingsIcon} textColorClassName={skill.textColorClassName} /> &nbsp; 
                <span className={`${fontIbmPlexSerif.className} text-2xl italic text-black text-2xl font-normal text-type-1 leading-loose`}>{skill.title}</span>
            </h3>
            <p className={`${fontWorkSans.className} whitespace-pre-line text-black text-sm font-normal text-type-1 leading-tight`}>{skill.description}</p>
        </div>
    )
}

interface ExperienceSectionProps {
    content: ExperienceContent
}

function ExperienceSection({content}: ExperienceSectionProps) {
    return (
        <Section backgroundColorClassName="bg-gold-0">
            <div className="flex flex-col space-y-10 w-full">
                <h4 className={`${fontWorkSans.className} text-type-2 text-xl font-semibold uppercase leading-relaxed`}>{content.title}</h4>
                <ul className="flex flex-col space-y-2">
                    {
                        content.listItems.map((item) => {
                            return (
                                <li key={item.company + item.role + item.timeRange} className="flex flex-col lg:flex-row w-full justify-between">
                                    <div className="flex flex-row space-x-4 items-center">
                                        <SvgPlusSign colorCssValue="var(--type-2)" width="16" height="16" />
                                        <h5 className={`${fontWorkSans.className} text-base text-type-2`}>{item.role} at <span className="font-bold">{item.company}</span></h5>
                                    </div>
                                    <div className={`border-b-2 border-dashed border-border-medium flex-grow h-4 mx-4 hidden lg:block`} />
                                    <p className={`${fontWorkSans.className} text-sm text-type-2 font-normal lg:font-medium ml-8 lg:ml-0`}>{item.timeRange}</p>
                                    <div className={`border-b-2 border-dashed border-border-medium flex-grow h-3 my-2 lg:hidden`} />

                                </li>
                            )
                        })
                    }
                </ul>
                <ButtonLink title={content.cta.title} url={content.cta.url} />
            </div>
        </Section>
    )
}