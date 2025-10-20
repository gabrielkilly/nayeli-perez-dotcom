import { PROJECT_ID_BUILDING_BLOCKS_REDESIGN, PROJECT_GANTRI_MADE, PROJECT_FACTORY_OS, PROJECT_CHARGIFY } from "./project/[projectId]/content/ProjectContent"

export interface SkillChipContent {
    title: string,
    textColorClassName: string
}

export interface ExploreWorkContent {
    title: string,
    workItems: WorkItemContent[]
}

export interface WorkItemContent {
    bgColorClassName: string,
    thumbnailImgPath: string,
    logoImgPath?: string,
    title: string,
    description?: string,
    projectId: string
}

export interface ValuesSectionContent {
    title: string,
    values: Value[]
}

export interface Value {
    title: string,
    description: string,
    yanrdingsIcon: string,
    textColorClassName: string
}

export interface HomeContent {
    nayeliName: string,
    introDescriptions: string[],
    skillTitle: string,
    skillChips: SkillChipContent[],
    exploreWorkContent: ExploreWorkContent,
    valuesSection: ValuesSectionContent
}

export const homeContent: HomeContent = {
    nayeliName: "Nayeli A. Pérez T.",
    introDescriptions: [
        "is a senior product designer with 8 years of experience working end-to-end, across product strategy, product design, user research, and visual design.",
        //"She bridges product and design skillsets to bring clarity to complex systems, align cross-functional teams, and deliver thoughtful, user-centered solutions.",
        "Currently designing the <a href='https://www.gantri.com/made'>Made</a> Digital Manufacturing platform at <a href='https://gantri.com'>Gantri</a>, previously designing for B2B SaaS subscription management & billing at <a href='https://www.maxio.com/chargify'>Chargify</a>.",
        //"She is most fulfilled when understanding & simplifying complexity and when uncovering & solving for real, human needs.",
    ],   
    skillTitle: "Expertise In",
    valuesSection: {
        title: "My design approach is shaped by core values that guide me in both life and design:",
        values: [
            {
                yanrdingsIcon: "q",
                textColorClassName: "text-gold-500",
                title: "Crafted",
                description: "Doing things well matters to me. I am ambitious when it comes to the quality I want to accomplish in my work.\n\nOver time, my aspiration of high-craft has shifted from just precise pixels and thorough handoff documentation towards the craft of impactful communication and of overcoming ambiguity in order to execute. I am excited to continue honing these skills!"
            },
            {
                yanrdingsIcon: "m",
                textColorClassName: "text-plum-400",
                title: "Systems-Thinking First",
                description: "Systems thinking is all about keeping in mind that our actions, behaviors, and decisions have an impact on our community and our world. It's also about realizing that as humans, we are all connected and rely on each other.\n\nMy commitment to practicing systems-thinking in my life translates to my approach to design and design strategy."
            },
            {
                yanrdingsIcon: "I",
                textColorClassName: "text-olive-500",
                title: "Pragmatic",
                description: "I firmly believe that designers should be committed to designing and shipping products and services that solve for real needs, while considering lasting ramifications.\n\nIn my work, I seek to understand what real, constant-over-time, needs a user has. Therefore, I am biased towards designing for platforms that aim to pragmatically & ethically solve for real user needs."
            },
            {
                yanrdingsIcon: "p",
                textColorClassName: "text-stone-500",
                title: "Curious",
                description: "My curious nature seeks to understand how things work, how systems function, why things are the way they are - what led them to be this way?\n\nThis constant curiosity drives me to connect and dialogue with others to better deeply understand the context of any design problem. I am constantly grateful that my work as a designer fully engages my deep-seated sense of curiosity and openness!"
            },
        ]
    },
    skillChips: [
        {
            title: "Product Design",
            textColorClassName: "text-type-link"
        },
        {
            title: "User Research",
            textColorClassName: "text-icon-plum"
        },
        {
            title: "Design Strategy",
            textColorClassName: "text-khaki-800"
        },
        {
            title: "Visual Design",
            textColorClassName: "text-khaki-800"
        },
        {
            title: "Design Systems",
            textColorClassName: "text-olive-800"
        },
        {
            title: "Design-thinking Facilitation",
            textColorClassName: "text-gold-800"
        },
    ],
    exploreWorkContent: {
        title: "Explore Work",
        workItems: [
            {
                bgColorClassName: "bg-[#B18C24]",
                thumbnailImgPath: "/work-page-1.png",
                title: "Re-designing Gantri's core building blocks, Parts and Stocks, for improved efficiency",
                description: "At Gantri, I lead design for our Manufacturing Execution System. Our MES is home-grown and built for 3D printing based manufacturing. Jobs, parts and stocks are the building blocks of Gantri's MES system. Over time, Part and Stock details pages had become exceedingly dense. In early 2023, I led a redesign of the Stocks and Parts details pages.",
                logoImgPath: "/gantri-logo.png",
                projectId: PROJECT_ID_BUILDING_BLOCKS_REDESIGN
            },
            {
                bgColorClassName: "bg-[#315B2B]",
                thumbnailImgPath: "/work-page-2.png",
                title: "Designing Gantri Made, From Zero to One",
                description: "Gantri Made is a self-serve digital manufacturing platform that helps designers and brands rapidly create, iterate and produce lighting.\n\nThis year, I led the 0 → 1 design and feature definition for Gantri Made, a new platform built to connect external designers with our digital factory.",
                logoImgPath: "/gantri-logo.png",
                projectId: PROJECT_GANTRI_MADE
            },
            {
                bgColorClassName: "bg-[#52534F]",
                thumbnailImgPath: "/work-page-3.png",
                title: "Selected Work: FactoryOS Platform (Gantri)",
                description: "A collection of workflow improvements and tools that increased efficiency in FactoryOS. This platform is used by various different teams, including the Production team (to track all jobs required to complete all orders), Industrial Design Engineers, Manufacturing Engineers, Customer Support, and leadership.",
                logoImgPath: "/gantri-logo.png",
                projectId: PROJECT_FACTORY_OS
            },
            {
                bgColorClassName: "bg-[#8A3867]",
                thumbnailImgPath: "/work-page-4.png",
                title: "Selected Work: Chargify",
                description: "My time at Chargify spanned from 2018 -2022. During this time I worked on subscription management and billing features that unlocked growth for B2B SaaS customers.\n\nMy work entailed designing and maintaining billing tools that enabled usage and multi-attribute billing, payment collections, and business analytics.",
                logoImgPath: "/chargify-logo.png",
                projectId: PROJECT_CHARGIFY
            },

        ]
    }
}

