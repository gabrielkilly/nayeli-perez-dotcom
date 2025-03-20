import { ButtonIcon, ButtonLinkProps } from "@/components/Button"

export interface AboutContent {
    welcomeSection: WelcomeSectionContent,
    skillsSection: SkillsSectionContent,
    experienceContent: ExperienceContent,
    opportunitiesSection: OpportunitiesSectionContent
}

export const aboutContent: AboutContent = {
    welcomeSection: {
        welcomeTitle: "Welcome!",
        welcomeText: "I'm Nayeli. Nice to meet you.",
        welcomeIcon: "u",
        welcomeImagePath: "/about-main.png",
        cta1: {
            title: "Experience", 
            url: "#",
            icon: ButtonIcon.Download
        },
        cta2: {
            title: "Resumé", 
            url: "#",
        }
    },
    skillsSection: {
        title: "My design approach is shaped by core values that guide me in both life and design:",
        skills: [
            {
                yanrdingsIcon: "q",
                textColorClassName: "text-icon-gold",
                title: "Crafted", 
                description: "Doing things well matters to me. I am ambitious when it comes to the quality I want to accomplish in my work.\n\nOver time, my aspiration of high-craft has shifted from just precise pixels and thorough handoff documentation towards the craft of impactful communication and of overcoming ambiguity in order to execute. I am excited to continue honing these skills!"
            },
            {
                yanrdingsIcon: "m",
                textColorClassName: "text-icon-green",
                title: "Systems-Thinking First", 
                description: "Systems thinking is all about keeping in mind that our actions, behaviors, and decisions have an impact on our community and our world. It’s also about realizing that as humans, we are all connected and rely on each other.\n\nMy commitment to practicing systems-thinking in my life translates to my approach to design and design strategy."
            },
            {
                yanrdingsIcon: "I",
                textColorClassName: "text-icon-plum",
                title: "Pragmatic", 
                description: "I firmly believe that designers should be committed to designing and shipping products and services that solve for real needs, while considering lasting ramifications.\n\nIn my work, I seek to understand what real, constant-over-time, needs a user has. Therefore, I am biased towards designing for platforms that aim to pragmatically & ethically solve for real user needs."
            },
            {
                yanrdingsIcon: "p",
                textColorClassName: "text-icon-neutral",
                title: "Curiosity", 
                description: "My curious nature seeks to understand how things work, how systems function, why things are the way they are - what led them to be this way?\n\nThis constant curiosity drives me to connect and dialogue with others to better deeply understand the context of any design problem. I am constantly grateful that my work as a designer fully engages my deep-seated sense of curiosity and openness!"
            },
        ]
    },
    experienceContent: {
        title: "Experience", 
        listItems: [
            {
                role: "Senior Product Designer", 
                company: "Gantri", 
                timeRange: "2020 - Present"
            },
            {
                role: "Product Design Manager", 
                company: "Chargify", 
                timeRange: "March 2021 - May 2022"
            },
            {
                role: "Product Designer", 
                company: "Chargify", 
                timeRange: "Sep 20-18 - March 2021"
            },
            {
                role: "Visual Designer", 
                company: "esd & associates", 
                timeRange: "Aug 2016 - Aug 2018"
            },
            {
                role: "Graphic Design Intern",
                company: "Trinity University Press",
                timeRange: "Jan 2015 - May 2016"
            }
        ],
        cta: {
            title: "Download Resumé", 
            url: "#"
        }
    },
    opportunitiesSection: {
        yIcon: "q",
        title: "I am currently open to new opportunities.",
    }
}

export interface WelcomeSectionContent {
    welcomeTitle: string,
    welcomeText: string,
    welcomeIcon: string,
    welcomeImagePath: string,
    cta1: ButtonLinkProps,
    cta2: ButtonLinkProps
}

export interface SkillsSectionContent {
    title: string, 
    skills: Skill[]
}

export interface Skill {
    title: string, 
    description: string,
    yanrdingsIcon: string,
    textColorClassName: string
}

export interface ExperienceContent {
    title: String, 
    listItems: ExperienceListItem[],
    cta: CtaLink
}

export interface ExperienceListItem {
    role: string, 
    company: string,
    timeRange: string,
}

export interface CtaLink {
    title: string, 
    url: string,
}

export interface OpportunitiesSectionContent {
    yIcon: string,
    title: string,
}