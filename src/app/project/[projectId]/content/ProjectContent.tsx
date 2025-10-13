export interface ProjectContent {
    introContent: IntroContent,
    sections: ProjectSectionContent[],
    navButtonsBorder?: boolean
}

export interface IntroContent {
    imageSources: string[],
    title: string,
    description: string, 
    details: HeaderLabelCardContent,
    bgClassName: string
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
    type: "title" | "description" | "infoDescription" | "presentationPager" | "beforeAfterCard" | "resultContent" | "itemGrid" | "spacer"
    content: Title | Description | InfoDescription | PresentationPagerContent | BeforeAfterCardContent | ResultContent | ItemGrid | Spacer
}

export interface Spacer {
    marginClassName: string
}

export interface ItemGridContentItem {
    type: "basicCard" | "itemGridImage",
    content: BasicCardContent | ItemGridImage,
    fullWidth?: boolean
}

export interface Title {
    value: string,
}

export interface Description {
    value: string
}

export interface InfoDescription {
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

export interface ItemGridImage {
    src: string
}

export interface BeforeAfterCardContent {
    title: string, 
    beforeImageSrc: string, 
    afterImageSrc: string
}

export interface BasicCardContent {
    title: string, 
    description: string,
    bgClassName: string,
    textClassName: string, 
    footerNote?: string,
    iconIdentifier?: "up" | "down" | "naycon",
    imageSrc?: string,
    videoSrc?: string
}

export interface ResultContent {
    items: ResultItem[]
}

export interface ResultItem {
    title: string,
    description: ListItem[] | string
}

export interface ListItem {
    listItemText?: string
    nestedListItems?: ListItem[]
}

export interface ItemGrid {
    items: ItemGridContentItem[]
}

export const PROJECT_ID_BUILDING_BLOCKS_REDESIGN = "building-blocks-redesign";
export const PROJECT_GANTRI_MADE = "gantri-made";
export const PROJECT_FACTORY_OS = "factory-os";
export const PROJECT_CHARGIFY = "chargify"

export const projectIndexMap = new Map<string, number>([
    [PROJECT_ID_BUILDING_BLOCKS_REDESIGN, 0],
    [PROJECT_GANTRI_MADE, 1],
    [PROJECT_FACTORY_OS, 2]
])

export const indexProjectMap = new Map<number, string>([
    [0, PROJECT_ID_BUILDING_BLOCKS_REDESIGN],
    [1, PROJECT_GANTRI_MADE],
    [2, PROJECT_FACTORY_OS]
])