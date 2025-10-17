import { ProjectContent } from "./ProjectContent";

export const gantriMadeProject: ProjectContent = {
    introContent: {
        imageSources: [
            "/projects/gantri-made/intro.png",
        ],
        bgClassName: "bg-[#315B2B]",
        title: "Designing Gantri Made, From Zero to One",
        description: "Gantri Made is a self-serve digital manufacturing platform that helps designers and brands rapidly create, iterate and produce lighting.\n\nThis year, I led the 0 → 1 design and feature definition for Gantri Made, a new platform built to connect external designers with our digital factory and design engineering team.",
        details: {
            headersAndLabels: [
                {
                    header: "Role",
                    description: "UX Methods for Product Discovery and Solution Definition, UI Design, Prototyping, Handoff, Metrics identification"
                },
                {
                    header: "Timeframe",
                    description: "April 2025 - July 2025"
                },
                {
                    header: "Collaborators",
                    description: "Product Team, Industrial Design Engineers, Software Team, Sales Director, Chief of Staff"
                }
            ]
        }
    },
    sections: [
        {
            backgroundColorCssName: "bg-[#697632]",
            textColorCssName: "text-type-alt",
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "Problem" 
                    }
                },
                {
                    type: "description",
                    content: {
                        value: "Gantri’s vision is to empower brands of all sizes to efficiently bring their lighting products to market using sustainable 3D-printing based manufacturing.  However, previously, Gantri had no structured, repeatable way to manufacture custom designs for B2B designers and brands."
                    }
                },
                {
                    type: "spacer",
                    content: {
                        paddingClassName: "pt-4"
                    }
                },
                {
                    type: "title",
                    content: {
                        value: "opportunity & objective" 
                    }
                },
                {
                    type: "description",
                    content: {
                        value: "In 2025, Gantri’s primary strategic initiative has been defining a Manufacturing-as-a-Service platform MVP, and then building and launching this initial offering. The purpose of the platform is to increase the scalability of our previously manual, resource-intensive light development model."
                    }
                },
            ]
        },
        {
            backgroundColorCssName: "#FFFFFF",
            textColorCssName: "text-type-1",
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "My Role" 
                    }
                },
                {
                    type: "infoDescription",
                    content: {
                        value: "This year, I led the 0 → 1 design and feature definition for Gantri Made, a new platform built to connect external designers with our design engineering team and digital factory. The work included designing the platform experience and implementing key integrations with our MES that supported collaboration during development, tracking of revenue, and production of units once products are developed." 
                    }
                },
                {
                    type: "spacer",
                    content: {
                        paddingClassName: "pt-8"
                    }
                },
                {
                    type: "title",
                    content: {
                        value: "The solution - Made Platform" 
                    }
                },
                {
                    type: "infoDescription",
                    content: {
                        value: "A manufacturing platform where brands can onboard and learn our manufacturing processes and system, get high-level costing estimates, and manage their products, once in development. Brands can view past orders, invoices, and manage their payment method." 
                    }
                },
                {
                    type: "spacer",
                    content: {
                        paddingClassName: "pt-6"
                    }
                },
                {
                    type: "simpleCarousel",
                    content: {
                        items: [
                            {
                                imageSrc: "/projects/gantri-made/case-study-2-carousel-1.png",
                                description: "1/3 - Onboarding flows: MSA Acknowledgement, Invite Team, Quick Start Guide"
                            },
                            {
                                imageSrc: "/projects/gantri-made/case-study-2-carousel-2.png",
                                description: "2/3 - While in concept development, designers can generate ballpark costing estimates."
                            },
                            {
                                imageSrc: "/projects/gantri-made/case-study-2-carousel-3.png",
                                description: "3/3 - Once products are in development, view details, status and orders of units. "
                            },
                        ]
                    }
                },
                {
                    type: "spacer",
                    content: {
                        paddingClassName: "pt-6"
                    }
                },
                {
                    type: "spacer",
                    content: {
                        paddingClassName: "mt-2"
                    }
                },
                {
                    type: "title",
                    content: {
                        value: "The solution - Factoryos (MES)"
                    },
                },
                {
                    type: "infoDescription",
                    content: {
                        value: "Some of the key MES features shipped to support the Made MVP."
                    }
                },
                {
                    type: "itemGrid",
                    content: {
                        items: [
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-neutral-3",
                                    src: "/projects/gantri-made/case-study-2-FacOS-features.png"
                                },
                                fullWidth: true
                            }
                        ],
                    }
                }
            ]
        },
        {
            backgroundColorCssName: "bg-[#32332F]",
            textColorCssName: "text-type-alt",
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "Key Features" 
                    }
                },
                {
                    type: "itemGrid",
                    content: {
                        items: [
                            {
                                type: "basicCard",
                                content: {
                                    bgClassName: "bg-[#41433D]",
                                    textClassName: "text-type-alt",
                                    title: "Self Quoting Tool",
                                    description: "One of the biggest barriers we identified in research was cost uncertainty. Designers told us they wanted to know upfront whether their idea was financially viable, but internally, quotes required manual input from engineers.\n\nTo address this, we built a calculator that translated real production data into instant estimates. This calculation incorporates historical manufacturing costs, identified key drivers like category, part weight, painted surfaces, and sanding labor, and codified them into a formula.",
                                    videoSrc: "/projects/gantri-made/case-study-2-key-features-1.mov"
                                }
                            },
                            {
                                type: "basicCard",
                                content: {
                                    bgClassName: "bg-[#41433D]",
                                    textClassName: "text-type-alt",
                                    title: "New ‘Quick Start Guide’",
                                    description: "Prior to the development of the Made portal, the Design Engineering team at Gantri had limited resources for designer onboarding. \n\nWe invested in creating a more effective and approachable Quick Start Guide, knowing how crucial it was to properly convey our manufacturing process and constraints to designers working with us, in order to streamline their path to creating feasible designs.",
                                    videoSrc: "/projects/gantri-made/case-study-2-key-features-2.mov"
                                }
                            }
                        ]
                    }
                }

            ]
        },
        {
            backgroundColorCssName: "bg-neutral-25",
            textColorCssName: "text-type-2",
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "Key Contributions" 
                    }
                },
                {
                    type: "itemGrid",
                    content: {
                        items: [
                            {
                                type: "basicCard",
                                content: {
                                    bgClassName: "bg-neutral-3",
                                    textClassName: "text-type-1",
                                    title: "User Journey Mapping Sessions",
                                    description: "I led User Journey mapping sessions earlier in the project planning that enabled all stakeholders and SMEs to bring together knowledge around our Personas.\n\nThese mapping session were key in arriving at an early feature set.",
                                    imageSrc: "/projects/gantri-made/case-study-2-contributions-1.png"
                                }
                            },
                            {
                                type: "basicCard",
                                content: {
                                    bgClassName: "bg-neutral-3",
                                    textClassName: "text-type-1",
                                    title: "Service Design Prototype: Early low-fi prototype of full flow to surface feedback from key decision makers",
                                    description: "I proposed and executed an early prototype in the form of a full user flow of the MVP solution in order to surface possible complexity and gather stakeholder feedback as early as possible. ",
                                    imageSrc: "/projects/gantri-made/case-study-2-contributions-2.png"
                                }
                            },
                            {
                                type: "basicCard",
                                content: {
                                    bgClassName: "bg-neutral-3",
                                    textClassName: "text-type-1",
                                    title: "Defining a subtle but impactful evolution to our Design System",
                                    description: "When launching Gantri Made, we wanted to execute a look and feel that was aligned with the latest brand direction. However, there was not enough time for a complete design system update.\n\nI created a custom set of components and usage guidelines for the Made Portal that successfully aligned with the updated brand vision, but did not represent excessive dev work.",
                                    imageSrc: "/projects/gantri-made/case-study-2-contributions-3.png",
                                },
                                fullWidth: true
                            }
                        ]
                    }
                }

            ]
        },

        {
            backgroundColorCssName: "bg-[#454F19]",
            textColorCssName: "text-type-alt",
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "Outcome" 
                    }
                },
                {
                    type: "itemGrid",
                    content: {
                        items: [
                            {
                                type: "basicCard",
                                content: {
                                    iconIdentifier: "naycon",
                                    bgClassName: "bg-[#697632]",
                                    textClassName: "text-type-alt",
                                    title: "The project successfully launched our entry into the B2B manufacturing vertical. ",
                                    description: "The launch of Gantri Made entailed a big effort across Sales, Product, and Design engineers, but the Made portal was the front door for brands. This is where they could view all resources, manage their products, see invoices, and make payments towards their development fees.\n\nCompleting the design and implementing at a high quality by launch day was crucial. I’m proud of the work done to ensure we met this deadline.",
                                    footerNote: "The platform empowered designers to self-serve through critical decision points, reducing touchpoints  with Gantri engineers significantly."
                                }
                            },
                            {
                                type: "itemGridImage",
                                content: {
                                    src: "/projects/gantri-made/case-study-2-outcome.png",
                                    linkedString: "<a href='https://rarify.co/products/cube-one-rarify-rarify-r-rari-086741'>Rarify - Cube One™ Light</a> - Launch Partner"
                                }
                            }
                        ]
                    }
                }

            ]
        },
    ]
}