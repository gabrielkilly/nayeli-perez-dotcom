import { ProjectContent } from "./ProjectContent";

export const buildingBlocksRedesignContent: ProjectContent = {
    navButtonsBorder: true,
    introContent: {
        imageSources: [
            "/projects/building-blocks-redesign/part-details-after.png",
            "/projects/building-blocks-redesign/stock-details-after-narrow.png"
        ],
        bgClassName: "bg-[#9F7E23]",
        title: "Re-designing Gantri's core building blocks, Parts and Stocks, for improved efficiency",
        description: "Gantri's Manufacturing Execution System is home-grown and built for 3D printing (additive) manufacturing. Jobs, parts and stocks are the building blocks of Gantri's MES system.\n\nOver time, Part and Stock details pages had become exceedingly dense. In 2023, I led a redesign of the Stocks and Parts details pages.",
        details: {
            headersAndLabels: [
                {
                    header: "Role",
                    description: "End-to-end Design: Research, UI/UX Design, Prototyping, Handoff"
                },
                {
                    header: "Timeframe",
                    description: "January 2023 – March 2023"
                },
                {
                    header: "Collaborators",
                    description: "Head of Product, Production Team, Software Team"
                }
            ]
        }
    },
    sections: [
        {
            backgroundColorCssName: "bg-[#5F2446]",
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
                        value: "Over time, Parts and stocks details pages had become exceedingly information-heavy, increasing time needed for workers and supervisors to complete daily tasks."
                    }
                },
                {
                    type: "presentationPager",
                    content: {
                        items: [
                            {
                                description: "Workers must scroll through dense lists of tasks to verify that they are taking the right action on the right item.",
                                imageSrc: "/projects/building-blocks-redesign/case-study-1-problem-1.png"
                            },
                            {
                                description: "Supervisors struggle to find discrepancy or delay reasons when reviewing pages.",
                                imageSrc: "/projects/building-blocks-redesign/case-study-1-problem-2.png"
                            },
                            {
                                description: "Supervisors must scroll through an abundance of detailed information to uncover which parts or stocks actually require attention or special action.",
                                imageSrc: "/projects/building-blocks-redesign/case-study-1-problem-3.png"
                            }
                        ],
                        buttonBgColorCssClassName: "bg-[#8A3867]",
                        buttonBgSelectedColorCssClassName: "bg-[#F3EFF1]",
                        buttonTextColorCssClassName: "text-type-alt",
                        buttonTextColorSelectedCssClassName: "text-type-1",
                        buttonSelectedOutlineColorCssClassName: "outline-[#AC5C8A]"
                    }
                },
            ],
        },
        {
            backgroundColorCssName: "bg-neutral-25",
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "Redesigned Pages"
                    }
                },
                {
                    type: "infoDescription",
                    content: {
                        value: "I redesigned the Stocks and Parts details pages from the ground up.\n\nIn addition to a new layout and information architecture, I introduced new statuses, actions, attributes, and object relationships (i.e. ‘many-to-1’) that better reflected real world workflows."
                    }
                },
                {
                    type: "beforeAfterCard",
                    content: {
                        title: "Stock Details Page",
                        beforeImageSrc: "/projects/building-blocks-redesign/stock-details-before.png",
                        afterImageSrc: "/projects/building-blocks-redesign/stock-details-after-narrow.png"
                    }
                },
                 {
                    type: "beforeAfterCard",
                    content: {
                        title: "Part Details Page",
                        beforeImageSrc: "/projects/building-blocks-redesign/part-details-before.png",
                        afterImageSrc: "/projects/building-blocks-redesign/part-details-after.png"
                    }
                },
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
                                    title: "New Details Page template introduced",
                                    description: "The new details page layout was integrated as a template for our Design System for all details pages.",
                                    imageSrc: "/projects/building-blocks-redesign/case-study-1-key-features-1.png",
                                    bgClassName: "bg-neutral-2",
                                    textClassName: "text-type-2"
                                }
                                
                            },
                            {
                                type: "basicCard", 
                                content: {
                                    title: "New actions to account for failure outcomes",
                                    description: "In the discovery research, we identified that parts had outcomes that could not be properly tracked in the system. We introduced actions to re-start parts (and log as failed or lost) and to cancel parts and also introduced statuses accordingly.",
                                    videoSrc: "/projects/building-blocks-redesign/case-study-1-key-features-2.mov",
                                    bgClassName: "bg-neutral-2",
                                    textClassName: "text-type-2"
                                }
                                
                            },
                            {
                                type: "basicCard", 
                                content: {
                                    title: "New tabular format that overviews all parts",
                                    description: "Team members can now view statuses, attributes, and current tasks for all parts in stock. Any failure outcomes are easily visible.",
                                    videoSrc: "/projects/building-blocks-redesign/case-study-1-key-features-3.mov",
                                    bgClassName: "bg-neutral-2",
                                    textClassName: "text-type-2"
                                }
                                
                            },
                            {
                                type: "basicCard", 
                                content: {
                                    title: "Re-factored Attention alerts & information",
                                    description: "Through discovery research, I identified the best indicators of delays (both actively delayed or at risk to become delayed). The re-defined attention items are visible near the top of the fold for visibility.",
                                    imageSrc: "/projects/building-blocks-redesign/case-study-1-key-features-4.png",
                                    bgClassName: "bg-neutral-2",
                                    textClassName: "text-type-2"
                                }
                                
                            }
                        ]
                    }
                },
            ]
        },
        {
            backgroundColorCssName: "bg-[#294026]",
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
                                    iconIdentifier: "down",
                                    title: "Contributed to 58% stock cycle time reduction (Based off of items with 2 failures)",
                                    description: "The new statuses and logic enabled the system to accurately reflect real factory outcomes (Discarded, Canceled, Failed items), which enabled team to mitigate delays more efficiently. This contributed to a reduction in cycle time for stocks that passed through failure workflows.\n\nMetrics: 2 Failure Stock Cycle time decreased from 49.6 in Q1 2023 to 16-21 days throughout the rest of 2023.",
                                    bgClassName: "bg-[#315B2B]",
                                    textClassName: "text-type-alt"
                                }
                                
                            },
                            {
                                type: "basicCard", 
                                content: {
                                    iconIdentifier: "down",
                                    title: "Reduced ‘Time to Identify Issues’",
                                    description: "Supervisors were able to identify issues or reasons for delayed parts or parts more quickly. A few months after the release of the feature, supervisors described being able to identify issues 3x faster than the previous version.",
                                    bgClassName: "bg-[#315B2B]",
                                    textClassName: "text-type-alt"
                                }
                                
                            },
                            {
                                type: "basicCard", 
                                content: {
                                    iconIdentifier: "up",
                                    title: "Increased ease of use",
                                    description: "Redesigned pages enabled team members to easily understand history and next required action for parts and stocks, enabling increased production efficiency. Team members described increased trust in system accuracy after the redesign.\n\nSince this re-design, these core system pages have stayed relatively unchanged.",
                                    bgClassName: "bg-[#315B2B]",
                                    textClassName: "text-type-alt"
                                }
                                
                            },
                            {
                                type: "itemGridImage", 
                                content: {
                                    src: "/projects/building-blocks-redesign/outcome-image.png"
                                }
                                
                            }
                        ]
                    }
                },
            ]
        },  
        {
            backgroundColorCssName: "bg-neutral-25",
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "Process"
                    }
                },
                {
                    type: "resultContent",
                    content: {
                        items: [
                            {
                                title: "Understanding the problem and current system",
                                description: [
                                    {
                                        listItemText: "Working session with Product Owner and Decision Maker (CEO) to align on known issues"
                                    },
                                    {
                                        listItemText: "Created a thorough object map of FactoryOS objects, given there was no previous documentation on these items and their relationships"
                                    }
                                ]
                            },
                            {
                                title: "Understanding Persona Pain Points and Needs",
                                description: [
                                    {
                                        listItemText: "Interviews with Supervisors and team members",
                                        nestedListItems: [
                                            {
                                                listItemText: "We had recently completed a Persona Project, and I used these findings to understand supervisor and worker needs"
                                            }
                                        ]
                                    },
                                    {
                                        listItemText: "Used personas to build out full list of need statements"
                                    },
                                    {
                                        listItemText: "Collaborated with Product Owner to define most impactful need statements"
                                    },
                                    {
                                        listItemText: "Defined final set of needs and action on each object"
                                    }
                                ]
                            },
                            {
                                title: "Prototyping and Validation",
                                description: [
                                    {
                                        listItemText: "Low-fidelity to high-fidelity explorations"
                                    },
                                    {
                                        listItemText: "Usability testing with Production Supervisors and Management"
                                    }
                                ]
                            },
                            {
                                title: "Hand-off",
                                description: [
                                    {
                                        listItemText: "Finalize High-Fi's & Create necessary documentation to hand-off"
                                    },
                                    {
                                        listItemText: "Support Software throughout implementation"
                                    },
                                    {
                                        listItemText: "Production team training"
                                    }
                                ]
                            },
                            {
                                title: "Measuring Impact",
                                description: [
                                    {
                                        listItemText: "Review Item Cycle Time data reports to understand impacts to Cycle time post-release."
                                    },
                                    {
                                        listItemText: "Follow up conversations / time study with Production supervisors after feature release."
                                    }
                                ]
                            }
                        ]
                    }
                },
            ]
        },     
                  
    ]
};