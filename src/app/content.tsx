import { PROJECT_ID_BUILDING_BLOCKS_REDESIGN, PROJECT_ID_TEMP_1, PROJECT_ID_TEMP_2 } from "./project/[projectId]/content/ProjectContent"

export interface HomeContent {
    nayeliName: string,
    mainDescription: string,
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
    mainDescription: `is an end-to-end product designer with <a href="/about#experience">8 years of experience</a> across product design, user research, and visual design.\n\nCurrently designing the Manufacturing Execution System at <a href="https://gantri.com">Gantri</a>, previously designing for SaaS subscription management at <a href="https://www.maxio.com/chargify">Chargify</a>.\n\nShe is most fulfilled when understanding & simplifying complexity and when uncovering & solving for real, human needs.`,
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
                bgColorClassName: "bg-stone-700",
                thumbnailImgPath: "/key-record-page-redesign.png",
                title: "Unlocking complete customization of Gantri lights",
                description: "Over time, my aspiration of high-craft has shifted from just precise pixels and thorough handoff documentation towards the craft of impactful communication and of overcoming ambiguity in order to execute.",
                logoImgPath: "/gantri-logo.png",
                projectId: PROJECT_ID_TEMP_1
            },
            {
                bgColorClassName: "bg-stone-700",
                thumbnailImgPath: "/key-record-page-redesign.png",
                title: "Enabling flexible pricing for merchants",
                description: "Over time, my aspiration of high-craft has shifted from just precise pixels and thorough handoff documentation towards the craft of impactful communication and of overcoming ambiguity in order to execute.",
                logoImgPath: "/gantri-logo.png",
                projectId: PROJECT_ID_TEMP_2
            },
            {
                bgColorClassName: "bg-stone-700",
                thumbnailImgPath: "/key-record-page-redesign.png",
                title: "Other selected work",
                projectId: "#"
            },
            {
                bgColorClassName: "bg-stone-700",
                thumbnailImgPath: "/key-record-page-redesign.png",
                title: "Streamlining error identification in factory workflows through re-designed key record pages",
                description: "Over time, my aspiration of high-craft has shifted from just precise pixels and thorough handoff documentation towards the craft of impactful communication and of overcoming ambiguity in order to execute.",
                logoImgPath: "/gantri-logo.png",
                projectId: PROJECT_ID_BUILDING_BLOCKS_REDESIGN
            },
        ]
    }
}

