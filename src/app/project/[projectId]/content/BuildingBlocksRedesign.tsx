import { ProjectContent } from "./ProjectContent";

export const buildingBlocksRedesignContent: ProjectContent = {
    introContent: {
        imageSources: [
            "/key-record-page-redesign.png",
            "/key-record-page-redesign.png"
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
                        value: "With Gantri’s MES, Parts and Stocks details pages are viewed and used throughout to accomplish daily tasks.\n\nOver time, these pages became increasingly information-heavy, increasing time needed for workers and supervisors to complete daily tasks."
                    }
                },
                {
                    type: "presentationPager",
                    content: {
                        items: [
                            {
                                description: "Workers must scroll through dense lists of tasks to verify that they are taking the right action on the right item.",
                                imageSrc: "https://placehold.co/400x300/maroon/white"
                            },
                            {
                                description: "Supervisors struggle to find discrepancy or delay reasons when reviewing pages.",
                                imageSrc: "https://placehold.co/400x300/gray/white"
                            },
                            {
                                description: "Supervisors must scroll through an abundance of detailed information to uncover which parts or stocks actually require attention or special action.",
                                imageSrc: "https://placehold.co/400x300/green/white"
                            }
                        ],
                    }
                },
            ],
        },
        {
            contentItems: [
                {
                    type: "title",
                    content: {
                        value: "Redesigned Pages"
                    }
                },
                {
                    type: "description",
                    content: {
                        value: "I redesigned the Stocks and Parts details pages from the ground up.\n\nIn addition to a new layout and information architecture, I introduced new statuses, actions, attributes, and object relationships (i.e. ‘many-to-1’) that better reflected real world workflows."
                    }
                },
                {
                    type: "beforeAfterCard",
                    content: {
                        title: "Stock Details Page",
                        beforeImageSrc: "/images/stock-details-before.png",
                        afterImageSrc: "/images/stock-details-after.png"
                    }
                },
                 {
                    type: "beforeAfterCard",
                    content: {
                        title: "Part Details Page",
                        beforeImageSrc: "/images/part-details-before.png",
                        afterImageSrc: "/images/part-details-after.png"
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
                                title: "New Details Page Templates Introduced",
                                description: "The new details page layout was integrated as a template for our Design System for all details pages.",
                                imageSrc: "/images/key-feature-1.png"
                            },
                            {
                                title: "New Actions to Account for Failure Outcomes",
                                description: "Lower system debt via new, contextualized adjustable UX, UI & statuses (e.g., 'Mark as Discarded').",
                                imageSrc: "/images/key-feature-2.png"
                            },
                            {
                                title: "New Tabular Format That Overviews All Parts",
                                description: "Team members can now view statuses, attributes, and current tasks for all parts in stock. Any failure outcomes are easily visible.",
                                imageSrc: "/images/key-feature-3.png"
                            },
                            {
                                title: "Re-focused Attention Alerts & Information",
                                description: "Improved attention alerts to reduce time to identify issues. Critical alerts are now displayed at the top of the page for better visibility.",
                                imageSrc: "/images/key-feature-4.png"
                            }
                        ]
                    }
                },
            ]
        },
        {
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
                                iconSrc: "/images/icon-ease-of-use.png",
                                title: "Increased ease of use",
                                description: "Improved pages enabled team members to easily understand history and next required action for parts and stocks, which increased production efficiency."
                            },
                            {
                                iconSrc: "/images/icon-identify-issues.png",
                                title: "Reduced time to identify issues by 50%",
                                description: "Supervisors were able to identify issues or reasons for delayed parts or stocks 50% faster."
                            },
                            {
                                iconSrc: "/images/icon-production-cycle.png",
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