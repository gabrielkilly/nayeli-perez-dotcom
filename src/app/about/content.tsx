import { ButtonIcon, ButtonLinkProps } from "@/components/Button"
import { Color } from "@/components/StyleConstants"

export interface AboutContent {
    welcomeSection: WelcomeSection,
    skillsSection: SkillsSection,
    experienceContent: ExperienceContent,
    opportunitiesSection: OpportunitiesSection
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
                iconColor: Color.Icon_Gold,
                title: "Craft", 
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                yanrdingsIcon: "m",
                iconColor: Color.Icon_Green,
                title: "Systems-thinking", 
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                yanrdingsIcon: "I",
                iconColor: Color.Icon_Plum,
                title: "Sincerity", 
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                yanrdingsIcon: "p",
                iconColor: Color.Icon_Neutral,
                title: "Curiosity", 
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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

export interface WelcomeSection {
    welcomeTitle: string,
    welcomeText: string,
    welcomeIcon: string,
    welcomeImagePath: string,
    cta1: ButtonLinkProps,
    cta2: ButtonLinkProps
}

export interface SkillsSection {
    title: string, 
    skills: Skill[]
}

export interface Skill {
    title: string, 
    description: string,
    yanrdingsIcon: string,
    iconColor: Color
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

export interface OpportunitiesSection {
    yIcon: string,
    title: string,
}