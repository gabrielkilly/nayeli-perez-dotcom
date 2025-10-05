"use client";
import Section from "@/components/Section";
import { ExperienceContent, aboutContent, Skill, SkillsSectionContent, ExperienceListItem } from "./content";
import { fontFamiljenGrotesk, fontIbmPlexSerif, fontWorkSans } from "@/components/Fonts";
import { SvgMinusSign, SvgPlusSign } from '@/components/Svg';
import ButtonLink from '@/components/ButtonLink';
import YarndingsIcon from "@/components/YarndingsIcon";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
    const content = aboutContent;

    return (
        <>
            <main>
                <div className="flex flex-col items-center justify-center">
                    <Section className="bg-neutral-1">
                        <div className="flex flex-col lg:flex-row space-y-10 w-full justify-between items-center">
                            <div className="flex flex-col items-center lg:items-start space-y-10 w-full md:w-1/2">
                                <h1 className={`${fontFamiljenGrotesk.className} text-5xl lead ng-10`}>{content.welcomeSection.welcomeTitle}</h1>
                                <p className={`${fontIbmPlexSerif.className} italic text-2xl text-center`}><i>{content.welcomeSection.welcomeText}</i>
                                    <YarndingsIcon textColorClassName="text-icon-plum" icon={content.welcomeSection.welcomeIcon} className="px-2" /></p>
                                <div className="flex flex-row space-x-10">
                                    <ButtonLink {...content.welcomeSection.cta1} textColorClassName="text-type-2" />
                                    <ButtonLink {...content.welcomeSection.cta2} textColorClassName="text-type-2" />
                                </div>
                            </div>
                            <Image className="w-full md:w-1/2" width={1702} height={1152} src={content.welcomeSection.welcomeImagePath} alt="Pictures of Nayeli" priority />
                        </div>
                    </Section>
                    <SkillsSection content={content.skillsSection} />
                    <ExperienceSection content={content.experienceContent} />
                </div>
                <Footer />
            </main>
        </>
    )
}

interface SkillsSectionProps {
    content: SkillsSectionContent
}

function SkillsSection({content}: SkillsSectionProps) { 
    const {skills, title} = content
    const verticalLineClassName = "self-stretch relative origin-top-left ring-[0.675px] ring-border-subtle flex-shrink"
    const horizontalLineClassName = "self-stretch h-0 relative ring-[0.675px] ring-border-subtle"

    if (skills.length != 4) {
        throw Error("Skills content length is not equal to 4")
    }
    return (
        <Section className="bg-neutral-1 pb-36 pt-8">
            <div className="flex flex-col space-y-12"> 
                <h2 className={`text-type-1 text-xl font-semibold ${fontWorkSans.className} uppercase leading-relaxed lg:w-1/2`}>
                    {title}
                </h2>
                <div className="flex flex-col w-full space-y-8">
                    <div className="flex flex-col lg:flex-row justify-around w-full space-y-8 lg:space-x-8 lg:space-y-0">
                        <SkillItem skill={skills[0]}/>
                        <div className={verticalLineClassName}></div>                
                        <SkillItem skill={skills[1]}/>
                    </div>
                    <div className={horizontalLineClassName}></div>
                    <div className="flex flex-col lg:flex-row justify-around w-full space-y-8 lg:space-x-8 lg:space-y-0">
                        <SkillItem skill={skills[2]}/>
                        <div className={verticalLineClassName}></div>                
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
                <span className={`${fontIbmPlexSerif.className} text-2xl text-black text-2xl font-normal text-type-1 leading-loose`}><i>{skill.title}</i></span>
            </h3>
            <p className={`${fontWorkSans.className} whitespace-pre-line text-black text-sm font-normal text-type-1 leading-tight`}>{skill.description}</p>
        </div>
    )
}

interface ExperienceSectionProps {
    content: ExperienceContent
}

function ExperienceSection({content}: ExperienceSectionProps) {
    const [expandedItem, setExpandedItem] = useState<ExperienceListItem | null>(null);
    return (
        <Section className="bg-olive-700">
            <div id="experience" className="flex flex-col space-y-10 w-full">
                <h4 className={`${fontWorkSans.className} text-type-alt text-xl font-semibold uppercase leading-relaxed`}>{content.title}</h4>
                <ul className="flex flex-col space-y-2">
                    {
                        content.listItems.map((item) => {
                            return (
                                <ExperienceItem item={item} isExpanded={expandedItem == item} setIsExpanded={setExpandedItem} key={item.company + item.role + item.timeRange} />
                            )
                        })
                    }
                </ul>
                <ButtonLink title={content.cta.title} url={content.cta.url} textColorClassName="text-type-alt" />
            </div>
        </Section>
    )
}   

function ExperienceItem({item, isExpanded, setIsExpanded}: {item: ExperienceListItem, isExpanded: boolean, setIsExpanded: (value: ExperienceListItem | null) => void}) {

    const svgIcon = (isExpanded) ? 
        <SvgMinusSign colorCssValue="var(--type-alt)" width="16" height="4" className="py-4" /> 
        : <SvgPlusSign colorCssValue="var(--type-alt)" width="16" height="16" />;

    const bgColorClassName = (isExpanded) ? "bg-white/10" : "";
    
    return (
        <li className={`flex flex-col cursor-pointer rounded p-3 ${bgColorClassName}`} onClick={() => setIsExpanded(isExpanded ? null : item)}>
            <div className="flex flex-col lg:flex-row w-full justify-between">
                <div className="flex flex-row space-x-4 items-center">
                    {svgIcon}
                    <h5 className={`${fontWorkSans.className} text-base text-type-alt`}>{item.role} at <span className="font-bold">{item.company}</span></h5>
                </div>
                <div className={`border-b-2 border-dashed border-type-alt border-border-medium flex-grow h-4 mx-4 hidden lg:block`} />
                <p className={`${fontWorkSans.className} text-sm text-type-alt font-normal lg:font-medium ml-8 lg:ml-0`}>{item.timeRange}</p>

                {!isExpanded && (
                    <div className={`border-b-2 border-dashed border-type-alt opacity-50 flex-grow h-3 my-2 lg:hidden`} />
                )}
            </div>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col space-y-2 pb-4 px-8 gap-4">
                    {item.additionalDetails.map((detail, index) => {
                        const useBullets = detail.descriptions.length > 1;
                        return (
                            <div key={index} className="flex flex-col gap-2 mt-4">
                                <h6 className={`${fontWorkSans.className} text-type-alt text-xs font-semibold uppercase leading-none`}>{detail.label}</h6>
                                <ul className={(useBullets) ? `list-disc pl-5` : `list-none pl-0`}>
                                    {detail.descriptions.map((description, descIndex) => (
                                        <li key={descIndex} className={`${fontWorkSans.className} text-type-alt text-base font-normal leading-normal`}>{description}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>

                        {/* <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}> */}

        </li>
    )
}