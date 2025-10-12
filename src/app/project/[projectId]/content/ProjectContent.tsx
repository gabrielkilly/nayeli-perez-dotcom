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
    contentItems: ContentItem[],
    backgroundColorCssName?: string,
    textColorCssName?: string
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
    items: PresentationPagerItem[],
    buttonBgColorCssClassName: string,
    buttonBgSelectedColorCssClassName: string,
    buttonSelectedOutlineColorCssClassName: string,
    buttonTextColorCssClassName: string,
    buttonTextColorSelectedCssClassName: string
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
    imageSrc?: string,
    videoSrc?: string
}

export interface ResultContent {
    items: ResultItem[]
}

export interface ResultItem {
    iconIdentifier: "up" | "down", 
    title: string, 
    description: string
}

export interface ItemGrid {
    items: BasicCardContent[]
}

export const PROJECT_ID_BUILDING_BLOCKS_REDESIGN = "building-blocks-redesign";
export const PROJECT_ID_TEMP_1 = "temp1";
export const PROJECT_ID_TEMP_2 = "temp2";

export const projectIndexMap = new Map<string, number>([
    [PROJECT_ID_BUILDING_BLOCKS_REDESIGN, 0],
    [PROJECT_ID_TEMP_1, 1],
    [PROJECT_ID_TEMP_2, 2]
])

export const indexProjectMap = new Map<number, string>([
    [0, PROJECT_ID_BUILDING_BLOCKS_REDESIGN],
    [1, PROJECT_ID_TEMP_1],
    [2, PROJECT_ID_TEMP_2]
])