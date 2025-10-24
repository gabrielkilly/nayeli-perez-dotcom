import { ButtonIcon, ButtonLinkProps } from "@/components/ButtonLink"

export interface AboutContent {
    welcomeSection: WelcomeSectionContent,
    experienceContent: ExperienceContent,
    impactContent: ImpactContent,
    beyondWorkContent: BeyondWorkContent,
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
            title: "Download Resumé", 
            url: "/Resume-NayeliPerez.pdf",
        }
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
                            "FEB 2025 - Present: Lead design for Gantri Made, Gantri’s B2B platform that enables brands and designers to self-serve product development and manufacturing.",
                            "JUN 2022 - FEB 2025: End-to-end product design for Gantri’s internal Manufacturing Execution platform. This platform is used by teams across the org to produce items, fulfill orders, manage inventory, manage product versions, track revenue transactions, manage flow of production, and more.",
                            "Drive product discovery by engaging user research, complex workflow mapping, and rapid prototyping to understand key problems and evaluate potential solutions. Own feature prioritization, based on impact and effort."
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
                            "Designed key billing management features for subscription businesses processing hundreds of millions in ARR. These features were key to Chargify’s strategic growth and market position (Multi-Currency Support, Custom Price Points, Re-architecting Product Catalog, etc.)",
                            "Defined the collaboration process between Design, Product, and Engineering (PDLC) during the  Chargify / SaaSOptics merge into Maxio. Led the creation of a new Design System that standardized patterns across the Chargify and SaaSOptics platforms. "
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
                            "Designed, prototyped, and handed off complex interfaces for core billing features. Functioned within a tight-knit team of Product Manager and developers  to ensure technical feasibility and high-quality execution throughout handoff. Continuously improved Chargify’s design system through user research, maintaining Figma Tooling, and pushing changes to component library."
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
    beyondWorkContent: {
        //personalStatement: "From systems and services to the built environment around us, everything is designed and worth examining. I am fascinated by the idea that human-centered approaches, design-thinking, and continuous iteration can enable a future that better meets human needs.",
        interestsTitle: "BEYOND WORK",
        interestsDescription: "Sometimes creative, piano-player, photographer, and writer. Walkability and urban-living enthusiast. Probably at a consignment or thrift store. Modernism and Bauhaus aficionado. F.C. Barcelona and Mexican National team fan. My roots are in CDMX! Most days you’ll find me going on walks, doing Yoga, or trying to get back on the soccer field."
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

export interface BeyondWorkContent {
  //  personalStatement: string,
    interestsTitle: string,
    interestsDescription: string,
}