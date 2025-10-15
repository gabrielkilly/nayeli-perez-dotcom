import { PROJECT_ID_BUILDING_BLOCKS_REDESIGN, PROJECT_GANTRI_MADE, PROJECT_FACTORY_OS, PROJECT_CHARGIFY } from "./project/[projectId]/content/ProjectContent"

export interface HomeContent {
    nayeliName: string,
    introDescriptions: string[],
    skillTitle: string,
    skillChips: SkillChipContent[],
    exploreWorkContent: ExploreWorkContent
}

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

export const homeContent: HomeContent = {
    nayeliName: "Nayeli A. Pérez T.",
    introDescriptions: [
        "is a product designer with 8 years of experience working end-to-end across product strategy, product design, and user research.",
        "Currently designing the Manufacturing Execution System at <a href='https://gantri.com'>Gantri</a>, previously designing for SaaS subscription management at <a href='https://www.maxio.com/chargify'>Chargify</a>.",
        //"She is most fulfilled when understanding & simplifying complexity and when uncovering & solving for real, human needs.",
    ],
    skillTitle: "Expertise In",
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
                title: "Project: Re-designing Gantri's core building blocks, Parts and Stocks, for improved efficiency",
                description: "At Gantri, I lead design for our Manufacturing Execution System. Our MES is home-grown and built for 3D printing based manufacturing. Jobs, parts and stocks are the building blocks of Gantri's MES system. Over time, Part and Stock details pages had become exceedingly dense. In early 2023, I led a redesign of the Stocks and Parts details pages.",
                logoImgPath: "/gantri-logo.png",
                projectId: PROJECT_ID_BUILDING_BLOCKS_REDESIGN
            },
            {
                bgColorClassName: "bg-[#315B2B]",
                thumbnailImgPath: "/work-page-2.png",
                title: "Project: Designing Gantri Made, From Zero to One",
                description: "Gantri Made is a self-serve digital manufacturing platform that helps designers and brands rapidly create, iterate and produce lighting.\n\nThis year, I led the 0 → 1 design and feature definition for Gantri Made, a new platform built to connect external designers with our digital factory.",
                logoImgPath: "/gantri-logo.png",
                projectId: PROJECT_GANTRI_MADE
            },
            {
                bgColorClassName: "bg-[#52534F]",
                thumbnailImgPath: "/work-page-3.png",
                title: "Selected Work: FactoryOS",
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

