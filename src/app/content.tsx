import { PROJECT_ID_BUILDING_BLOCKS_REDESIGN, PROJECT_ID_TEMP_1, PROJECT_ID_TEMP_2 } from "./project/[projectId]/content/ProjectContent"

export interface HomeContent {
    nayeliName: string,
    mainDescription: string,
    skillChips: SkillChipContent[],
    exploreWorkContent: ExploreWorkContent
}

export interface SkillChipContent {
    title: string, 
    outlineColorClassName: string,
    textColorClassName: string
}

export interface ExploreWorkContent {
    title: string, 
    workItems: WorkItemContent[]
}

export interface WorkItemContent {
    bgColorClassName: string, 
    thumbnailImgPath: string,
    title: string,
    description?: string,
    label?: string,
    projectId: string
}

export const homeContent: HomeContent = {
    nayeliName: "Nayeli A. Pérez T.",
    mainDescription: `is an end-to-end product designer with <a href="/about#experience">8 years of experience</a> across product design, user research, and visual design.\n\nCurrently designing the Manufacturing Execution System at <a href="https://gantri.com">Gantri</a>, previously designing for SaaS subscription management at <a href="https://www.maxio.com/chargify">Chargify</a>.\n\nShe is most fulfilled when understanding & simplifying complexity and when uncovering & solving for real, human needs.`,
    skillChips: [
        {
            title: "Product Design",
            outlineColorClassName: "outline-icon-green",
            textColorClassName: "text-icon-green"
        },
        {
            title: "User Research",
            outlineColorClassName: "outline-icon-plum",
            textColorClassName: "text-icon-plum"
        },
        {
            title: "Design Strategy",
            outlineColorClassName: "outline-icon-gold",
            textColorClassName: "text-icon-gold"
        },
        {
            title: "Visual Design",
            outlineColorClassName: "outline-icon-primary-1",
            textColorClassName: "text-icon-primary-1"
        },
        {
            title: "Design Systems",
            outlineColorClassName: "outline-icon-plum",
            textColorClassName: "text-icon-plum"
        },
        {
            title: "Design-thinking Facilitation",
            outlineColorClassName: "outline-icon-green",
            textColorClassName: "text-icon-green"
        },
    ],
    exploreWorkContent: {
        title: "Explore Work",
        workItems: [
            {
                bgColorClassName: "bg-khaki-4",
                thumbnailImgPath: "/key-record-page-redesign.png",
                title: "Unlocking complete customization of Gantri lights",
                description: "Over time, my aspiration of high-craft has shifted from just precise pixels and thorough handoff documentation towards the craft of impactful communication and of overcoming ambiguity in order to execute.",
                label: "Gantri - 2024",
                projectId: PROJECT_ID_TEMP_1
            },
            {
                bgColorClassName: "bg-plum-4",
                thumbnailImgPath: "/key-record-page-redesign.png",
                title: "Enabling flexible pricing for merchants",
                description: "Over time, my aspiration of high-craft has shifted from just precise pixels and thorough handoff documentation towards the craft of impactful communication and of overcoming ambiguity in order to execute.",
                label: "Chargify - 2022",
                projectId: PROJECT_ID_TEMP_2
            },
            {
                bgColorClassName: "bg-olive-5",
                thumbnailImgPath: "/key-record-page-redesign.png",
                title: "Other selected work",
                projectId: "#"
            },
            {
                bgColorClassName: "bg-gold-4",
                thumbnailImgPath: "/key-record-page-redesign.png",
                title: "Streamlining error identification in factory workflows through re-designed key record pages",
                description: "Over time, my aspiration of high-craft has shifted from just precise pixels and thorough handoff documentation towards the craft of impactful communication and of overcoming ambiguity in order to execute.",
                label: "Gantri - 2023",
                projectId: PROJECT_ID_BUILDING_BLOCKS_REDESIGN
            },
        ]
    }
}

