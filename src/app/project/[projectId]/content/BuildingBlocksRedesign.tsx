import { ProjectContent } from "./ProjectContent";

export const buildingBlocksRedesignContent: ProjectContent = {
    introContent: {
        imageSources: [
            "/projects/building-blocks-redesign/part-details-after.png",
            "/projects/building-blocks-redesign/stock-details-after-narrow.png"
        ],
        title: "Project: Re-designing Gantri’s core building blocks, Parts and Stocks, for improved efficiency",
        description: "At Gantri, I lead design for our Manufacturing Execution System. Our MES is home-grown and built for 3D printing (additive) manufacturing. Jobs, parts and stocks (i) are the building blocks of Gantri's MES system.\n\nOver time, Part and Stock details pages had become exceedingly dense. In early 2023, I led a redesign of the Stocks and Parts details pages.",
        details: {
            headersAndLabels: [
                {
                    header: "Role",
                    description: "Lead design for Manufacturing Execution System (MES)"
                },
                {
                    header: "Timeline",
                    description: "February 2023 – March 2024"
                },
                {
                    header: "Collaboration",
                    description: "Head of Product, Production team, 7 Software engineers"
                }
            ]
        }
    },
    sections: [
        {
            backgroundColorCssName: "bg-[#8A3867]",
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
                        buttonBgColorCssClassName: "bg-[#AC5C8A]",
                        buttonBgSelectedColorCssClassName: "bg-[#F3EFF1]",
                        buttonTextColorCssClassName: "text-type-alt",
                        buttonTextColorSelectedCssClassName: "text-type-1",
                        buttonSelectedOutlineColorCssClassName: "outline-[#AC5C8A]"
                    }
                },
            ],
        },
        {
            backgroundColorCssName: "bg-neutral-1-overlay",
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
                                title: "New Details Page template introduced",
                                description: "The new details page layout was integrated as a template for our Design System for all details pages.",
                                imageSrc: "/projects/building-blocks-redesign/case-study-1-key-features-1.png"
                            },
                            {
                                title: "New actions to account for failure outcomes",
                                description: "In the discovery research, we identified that parts had outcomes that could not be properly tracked in the system. We introduced actions to re-start parts (and log as failed or lost) and to cancel parts and also introduced statuses accordingly.",
                                videoSrc: "/projects/building-blocks-redesign/case-study-1-key-features-2.mov"
                            },
                            {
                                title: "New tabular format that overviews all parts",
                                description: "Team members can now view statuses, attributes, and current tasks for all parts in stock. Any failure outcomes are easily visible.",
                                videoSrc: "/projects/building-blocks-redesign/case-study-1-key-features-3.mov"
                            },
                            {
                                title: "Re-factored Attention alerts & information",
                                description: "Through discovery research, I identified the best indicators of delays (both actively delayed or at risk to become delayed). The re-defined attention items are visible near the top of the fold for visibility.",
                                imageSrc: "/projects/building-blocks-redesign/case-study-1-key-features-4.png"
                            }
                        ]
                    }
                },
            ]
        },
        {
            backgroundColorCssName: "bg-neutral-3",
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "Outcome"
                    }
                },
                {
                    type: "resultContent",
                    content: {
                        items: [
                            {
                                iconIdentifier: "up",
                                title: "Increased ease of use",
                                description: "Improved pages enabled team members to easily understand history and next required action for parts and stocks, which increased production efficiency."
                            },
                            {
                                iconIdentifier: "down",
                                title: "Reduced time to identify issues by 50%",
                                description: "Supervisors were able to identify issues or reasons for delayed parts or stocks 50% faster."
                            },
                            {
                                iconIdentifier: "down",
                                title: "Reduced production cycle time by 15%",
                                description: "The new statuses and logic enabled the system to accurately reflect real-world failure outcomes (Discarded, Canceled, Failed tasks), which enabled teams to mitigate delays more efficiently."
                            }
                        ]
                    }
                },
            ]
        },     
                  
    ]
};