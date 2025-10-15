import { ButtonIcon, ButtonLinkProps } from "@/components/ButtonLink"

export interface AboutContent {
    welcomeSection: WelcomeSectionContent,
    skillsSection: SkillsSectionContent,
    experienceContent: ExperienceContent,
    impactContent: ImpactContent,
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
            url: "#experience",
            icon: ButtonIcon.Download
        },
        cta2: {
            title: "Resumé", 
            url: "/Resume-NayeliPerez.pdf",
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
                title: "Curious", 
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
                timeRange: "June 2022 - Present",
                additionalDetails: [
                    {
                        label: "About Gantri",
                        descriptions: [
                            "3D-printed lighting brand & manufacturer. Gantri is pioneering an on-demand, bio-material based, additive manufacturing process."
                        ]
                    },
                    {
                        label: "My Role",
                        descriptions: [
                            "JAN 2025 - Present: Lead design for Gantri Made, Gantri’s newest offering. Made is a self-serve digital manufacturing platform that helps designers and brands rapidly create, iterate and produce lighting.",
                            "JUN 2022 - DEC 2024: Own end-to-end product design for the internal manufacturing execution system platform used by production team, industrial designers, process engineers, CX, and management.",
                            "Overall: Execute user research to understand user needs in a complex factory environment. Support product team in early discovery work to understand problems and ideate solutions."
                        ]
                    }
                ]
            },
            {
                role: "Product Design Manager", 
                company: "Chargify (now Maxio)", 
                timeRange: "March 2021 - May 2022",
                additionalDetails: [
                    {
                        label: "About Chargify",
                        descriptions: [
                            "Finance Tech SaaS | Subscription Billing and Management Platform for B2B SaaS Products"
                        ]
                    },
                    {
                        label: "My Role",
                        descriptions: [
                            "Collaborated closely with Product and Engineering teams to ensure alignment in our processes. Engaged design-thinking methods to improve cross-function collaboration and align on design strategy. Managed a team of 2 product designers; lead design reviews and fostered an environment for continuous skill development."
                        ]
                    }
                ]
            },
            {
                role: "Product Designer", 
                company: "Chargify (now Maxio)", 
                timeRange: "Sep 2018 - March 2021",
                additionalDetails: [
                    {
                        label: "About Chargify",
                        descriptions: [
                            "Finance Tech SaaS | Subscription Billing and Management Platform for B2B SaaS Products"
                        ]
                    },
                    {
                        label: "My Role",
                        descriptions: [
                            "Collaborated closely with Product and Engineering teams to ensure alignment in our processes. Engaged design-thinking methods to improve cross-function collaboration and align on design strategy. Managed a team of 2 product designers; lead design reviews and fostered an environment for continuous skill development."
                        ]
                    }
                ]
            },
            {
                role: "Visual Designer", 
                company: "esd & associates", 
                timeRange: "Aug 2016 - Aug 2018",
                additionalDetails: [
                    {
                        label: "About esd & associates",
                        descriptions: [
                            "San Antonio, TX Digital Marketing Agency"
                        ]
                    },
                    {
                        label: "My Role",
                        descriptions: [
                            "Developed creative for traditional print media (billboards, poster, flyer, etc) and collaborated with developers to design and ship websites, landing pages, and mobile applications. Created logomarks, brand identities, and brand guidelines. Project-managed complex pieces such as RFPs, large manuals for healthcare clients, etc (design, compile copy and data from all departments, build infographics, manage deadlines)."
                        ]
                    }
                ]
            },
            {
                role: "Graphic Design Intern",
                company: "Trinity University Press",
                timeRange: "Jan 2015 - May 2016",
                additionalDetails: [
                    {
                        label: "About Trinity University Press",
                        descriptions: [
                            "Mission-Driven Book Publisher"
                        ]
                    }
                ]
            }
        ],
        cta: {
            title: "Download Resumé", 
            url: "/Resume-NayeliPerez.pdf"
        }
    },
    impactContent: {
        title: "Impact", 
        listItems: [
            {
                role: "Board Member",
                 company: (
                    <>
                        <a href="https://www.circularsanantonio.org/" target="_blank" rel="noopener noreferrer">
                            Circular San Antonio
                        </a>
                    </>
                ),
                timeRange: "January 2024 - June 2025",
            },
             {
                role: "2023 Fellow",
                company: (
                        <>
                            <a href="https://www.newleaderscouncil.org/chapter/san-antonio/" target="_blank" rel="noopener noreferrer">
                                New Leaders Council
                            </a>
                        </>
                    ),
                timeRange: "SATX Chapter, 2023",
            },
             {
                role: "Mentor / Design Systems Focus ",
                company: (
                        <>
                            <a href="https://femmecubator.wordpress.com/what-we-do/" target="_blank" rel="noopener noreferrer">
                                Femmecubator
                            </a>
                        </>
                    ),
                timeRange: "2021-2024",
            },
             {
                role: "Course Completion",
                company: (
                        <>
                            <a href="https://www.thecenterfortheadvancementofgarmentmaking.com/sustainable-leadership-masterclass" target="_blank" rel="noopener noreferrer">
                                The Sustainable Leadership Masterclass
                            </a>
                        </>
                    ),
                timeRange: "2021",
            }
        ]

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
    title: string, 
    listItems: ExperienceListItem[],
    cta: CtaLink
}

export interface ImpactContent {
    title: string, 
    listItems: ImpactListItem[],
}

export interface ExperienceListItem {
    role: string, 
    company: string,
    timeRange: string,
    additionalDetails: ExperienceListItemDetails[]
}

export interface ImpactListItem {
    role: string,
    company: React.ReactNode,
    timeRange: string,
}

export interface ExperienceListItemDetails {
    label: string,
    descriptions: string[]
}

export interface CtaLink {
    title: string, 
    url: string,
}

export interface OpportunitiesSectionContent {
    yIcon: string,
    title: string,
}