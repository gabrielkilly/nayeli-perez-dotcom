import { ProjectContent } from "./ProjectContent";

export const Chargify: ProjectContent = {
    introContent: {
        title: "Selected Work: Chargify",
        description: "My time at Chargify spanned from 2018 -2022. During this time I worked on subscription management and billing features that unlocked growth for our B2B SaaS customers.\n\nMy work entailed designing and maintaining billing tools that enabled usage and multi-attribute billing, payment collections, and business analytics.",
        details: {
            headersAndLabels: [
                {
                    header: "Role",
                    description: "End-to-end Product Design for Chargify's Core Billing Features"
                },
                {
                    header: "Collaborators",
                    description: "Product Management, Software Team"
                }
            ]
        },
        bgClassName: "bg-neutral-1"
    },
    sections: [
        {
            id: "redesigned-subscription-summary",
            backgroundColorCssName: "bg-plum-900",
            textColorCssName: "text-type-alt",
            contentItems: [
                {
                    type: "numberedHeader",
                    content: {
                        number: 1,
                        numberClassName: "text-[#EDBCD8]",
                        header: "Redesigned Subscription Summary"
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
                        header: "TIMEFRAME",
                        description: "2022"
                    }
                },
                {
                    type: "headerAndDescription",
                    content: {
                        header: "MY ROLE",
                        description: "Planning and participated in a design sprint to align on the strategy and information architecture approach for this key page.\n\nExecuted the high-fidelity designs and completed handoff for the redesign."
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
                                    bgClassName: "bg-[#5F2446]",
                                    src: "/projects/chargify/selected-work-chargify-summary-1.png"
                                },
                                fullWidth: true
                            },
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#5F2446]",
                                    src: "/projects/chargify/selected-work-chargify-summary-2.png"
                                },
                                fullWidth: true
                            },
                               {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#5F2446]",
                                    src: "/projects/chargify/selected-work-chargify-summary-3.png"
                                },
                                fullWidth: true
                            },
                               {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#5F2446]",
                                    src: "/projects/chargify/selected-work-chargify-summary-4.png"
                                },
                                fullWidth: true
                            }
                        ]
                    }
                }
            ]
        },
        {
            backgroundColorCssName: "bg-[#315B2B]",
            textColorCssName: "text-type-alt",
            contentItems: [
                {
                    type: "numberedHeader",
                    content: {
                        number: 2,
                        numberClassName: "text-[#90BC89]",
                        header: "Enabling Custom Pricing during Subscription Creation"
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
                        header: "TIMEFRAME",
                        description: "2021"
                    }
                },
                {
                    type: "headerAndDescription",
                    content: {
                        header: "MY ROLE",
                        description: "The previous Chargify product catalog functionality only permitted users to use pre-configured products and prices when subscriptions are created or managed.\n\nMany customers whose businesses sold products in a custom, negotiated manner experienced inefficiency and friction when creating and managing subscriptions.\n\nI re-designed the process of adding on the fly pricing as users create & manage subscriptions."
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
                                    bgClassName: "bg-[#487B40]",
                                    src: "/projects/chargify/selected-work-chargify-create-sub-1.png"
                                },
                                fullWidth: true
                            },
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#487B40]",
                                    src: "/projects/chargify/selected-work-chargify-create-sub-2.png"
                                },
                                fullWidth: true
                            },
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#487B40]",
                                    src: "/projects/chargify/selected-work-chargify-create-sub-3.png"
                                },
                                fullWidth: true
                            },
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#487B40]",
                                    src: "/projects/chargify/selected-work-chargify-create-sub-4.png"
                                }
                            },
                            {
                                type: "imageCard",
                                content: {
                                    bgClassName: "bg-[#487B40]",
                                    src: "/projects/chargify/selected-work-chargify-create-sub-5.png"
                                }
                            }
                        ]
                    }
                }
            ]
        }
        
    ]
}