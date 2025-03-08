
export interface HomeContent {
    nayeliName: string,
    mainDescription: string,
    yarndingsIcon: string,
    additionalDescription: string, 
    skills: Skill[],
    experienceContent: ExperienceContent,
    inspirationContent: InspirationContent
}

export const homeContent: HomeContent = {
    nayeliName: "Nayeli A. Pérez T",
    mainDescription: "is a product designer with 8 years of experience across product design, user research, and visual design currently designing the MES platform at Gantri. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    yarndingsIcon: "e",
    additionalDescription: "My approach to design is grounded in key values nventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    skills: [
        {
            yanrdingsIcon: "q",
            textColorClassName: "text-icon-gold",
            title: "Craft", 
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            yanrdingsIcon: "m",
            textColorClassName: "text-icon-green",
            title: "Systems-thinking", 
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            yanrdingsIcon: "I",
            textColorClassName: "text-icon-plum",
            title: "Sincerity", 
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            yanrdingsIcon: "p",
            textColorClassName: "text-icon-neutral",
            title: "Curiosity", 
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ],
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
            title: "View Resumé", 
            url: "#"
        }
    },
    inspirationContent: {
        title: "Currently Inspiring Me",
        blocks: [
            {
                imgUrl: "https://source.unsplash.com/random",
                title: "Title",
                label: "Label"
            },
            {
                imgUrl: "https://source.unsplash.com/random",
                title: "Title",
                label: "Label"
            },
            {
                imgUrl: "https://source.unsplash.com/random",
                title: "Title",
                label: "Label"
            },
            {
                imgUrl: "https://source.unsplash.com/random",
                title: "Title",
                label: "Label"
            },
        ],
        cta: {
            title: "View More", 
            url: "#"
        }
    }
}

export interface Skill {
    title: String, 
    description: String,
    yanrdingsIcon: String,
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

export interface InspirationContent {
    title: String, 
    blocks: InspirationBlock[],
    cta: CtaLink
}

export interface InspirationBlock {
    imgUrl: String,
    title: String,
    label: String
}