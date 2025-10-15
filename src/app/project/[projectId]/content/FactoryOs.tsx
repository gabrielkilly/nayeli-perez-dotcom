import { ProjectContent } from "./ProjectContent";

export const FactoryOS: ProjectContent = {
    introContent: {
        title: "Selected Work: FactoryOS",
        description: "At Gantri, I lead design for our Manufacturing Execution System. This platform is home-grown and built for 3D printing (additive) manufacturing. We call this system FactoryOS.  \n\nFactoryOS is used by various different teams, including the Production team (to track all jobs required to complete all orders), Industrial Design Engineers, Manufacturing Engineers, Customer Support, and leadership.",
        details: {
            headersAndLabels: [             
                {
                    header: "Role",
                    description: "Design Lead for Gantri’s Manufacturing Execution System"
                },
                {
                    header: "Timerame",
                    description: "2022-2004"
                },
                {
                    header: "Collaborators",
                    description: "Product team, Software Team"
                },
                {
                    header: "Stakeholders",
                    description: "Production Team, Industrial Design Engineers, Manufacturing Engineers, CEO"
                }
            ]
        },
        bgClassName: "bg-neutral-1"
    },
    sections: [
        {
            backgroundColorCssName: "bg-[#697632]",
            textColorCssName: "text-type-alt",
            contentItems: [
                {
                    type: "numberedHeader",
                    content: {
                        number: 1,
                        numberClassName: "text-[#C5D194]",
                        header: "Introduction of Minute Tracking Component for Production Team Self-tracking"
                    }
                },
                {
                    type: "spacer",
                    content: {
                        paddingClassName: "py-0"
                    }
                },
                {
                    type: "headerAndDescription",
                    content: {
                        header: "Timeframe", 
                        description: "February - March 2025"
                    }
                },
                {
                    type: "headerAndDescription",
                    content: {
                        header: "Objective", 
                        description: "Empower Production team members by providing a tracker for the work points (‘minutes’) they’ve completed each day."
                    }
                },
                {
                    type: "spacer",
                    content: {
                        paddingClassName: "py-2"
                    }
                },
                {
                    type: "itemGrid",
                    content: {
                        items: [
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#85934E]",
                                    src: "/projects/factory-os/selected-work-gantri-tracker-1.png"
                                }
                            },
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#85934E]",
                                    src: "/projects/factory-os/selected-work-gantri-tracker-2.png"
                                }
                            },
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#85934E]",
                                    src: "/projects/factory-os/selected-work-gantri-tracker-3.png"
                                }
                            },
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#85934E]",
                                    src: "/projects/factory-os/selected-work-gantri-tracker-4.png"
                                }
                            }
                        ]
                    }
                }
            ],
        }
    ]
}