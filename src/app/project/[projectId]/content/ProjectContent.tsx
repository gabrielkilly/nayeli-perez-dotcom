export interface ProjectContent {
    introContent: IntroContent,
    sections: ProjectSectionContent[]
}

export interface IntroContent {
    imageSources: string[],
    title: string,
    description: string, 
    details: HeaderLabelCardContent
}

export interface HeaderLabelCardContent {
    headersAndLabels: HeaderLabel[]
}

export interface HeaderLabel {
    header: string, 
    description: string
}

export interface ProjectSectionContent {
    contentItems: ContentItem[]
}

export interface ContentItem {
    type: "title" | "description" | "presentationPager" | "beforeAfterCard" | "resultContent" | "itemGrid" | "basicCard",
    content: Title | Description | PresentationPagerContent | BeforeAfterCardContent | ResultContent | ItemGrid | BasicCardContent
}

export interface Title {
    value: string,
}

export interface Description {
    value: string
}

export interface PresentationPagerContent {
    items: PresentationPagerItem[]
}

export interface PresentationPagerItem {
    description: string, 
    imageSrc: string
}

export interface BeforeAfterCardContent {
    title: string, 
    beforeImageSrc: string, 
    afterImageSrc: string
}

export interface BasicCardContent {
    title: string, 
    description: string, 
    imageSrc: string
}

export interface ResultContent {
    items: ResultItem[]
}

export interface ResultItem {
    iconSrc: string, 
    title: string, 
    description: string
}

export interface ItemGrid {
    items: BasicCardContent[]
}

export const PROJECT_ID_BUILDING_BLOCKS_REDESIGN = "building-blocks-redesign";