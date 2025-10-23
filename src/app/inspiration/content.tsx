export const inspirationContent = {

}

export const currentInspirations: InspirationItem[] = [
    {
        label: "Design for the Real World",
        mediaType: "Book",
        imageSrc: "/inspiration/IL-Design for the Real World.png",
        description: "Victor Papanek's seminal work challenging designers to create meaningful, socially responsible solutions for real human needs rather than artificial wants.",
        category: "design"
    },
    {
        label: "Kirsten Dirksen",
        imageSrc: "/inspiration/IL-Kirsten Dirksen - YouTube.png",
        description: "Exploring innovative living spaces, sustainable architecture, and creative solutions for small-space living through thoughtful documentary storytelling.",
        category: "built-environment"
    },
    {
        label: "Pedro Ramirez Vasquez",
        imageSrc: "/inspiration/IL-Pedro Ramirez Vasquez.png",
        description: "Mexican architect whose modernist vision shaped iconic cultural institutions, blending contemporary design with indigenous Mexican heritage.",
        category: "design"
    },
    {
        label: "Hannah Arendt",
        imageSrc: "/inspiration/IL-Hannah Arendt.png",
        description: "Political philosopher examining the human condition, totalitarianism, and the banality of evil with profound insight into power and responsibility.",
        category: "thought"
    }
]

export const allInspirations: InspirationItem[] = [
    ...currentInspirations,
    {
        label: "Never Too Small",
        mediaType: "Digital Media",
        imageSrc: "/inspiration/IL-Never Too Small.png",
        description: "Innovative small-space design showcasing how thoughtful architecture can maximize functionality and beauty in compact living environments.",
        category: "design"
    },
    {
        label: "Corita Kent",
        imageSrc: "/inspiration/IL-Corita Kent.png",
        description: "Pop art pioneer and educator whose vibrant serigraphs merged social justice messages with joyful, colorful typography and bold graphic design.",
        category: "art"
    },
    {
        label: "Jake Knapp and John Zeratsky",
        imageSrc: "/inspiration/IL-Jake Knapp and John Zeratsky.png",
        description: "Design thinkers behind the Sprint methodology and Make Time framework, helping teams solve big problems and focus on what matters.",
        category: "thought"
    },
    {
        label: "Abundance",
        mediaType: "Book",
        imageSrc: "/inspiration/IL-Abundance.png",
        description: "Exploring how exponential technologies and innovative thinking can address humanity's grandest challenges and create a world of prosperity.",
        category: "thought"
    },
    {
        label: "Juan O'Gorman",
        imageSrc: "/inspiration/IL-Juan O'Gorman.png",
        description: "Mexican architect and muralist who pioneered functionalist architecture while creating stunning mosaic murals celebrating Mexican history and culture.",
        category: "design"
    },
    {
        label: "Luis Barragan",
        imageSrc: "/inspiration/IL-Luis Barragan.png",
        description: "Pritzker Prize-winning architect whose minimalist designs masterfully blend light, color, water, and space to create emotional, contemplative environments.",
        category: "design"
    },
    {
        label: "Isamu Noguchi",
        imageSrc: "/inspiration/IL-Isamu Noguchi.png",
        description: "Sculptor and designer who bridged Eastern and Western aesthetics, creating iconic furniture, gardens, and public spaces that blend art with functionality.",
        category: "art"
    },
    {
        label: "The Bauhaus",
        imageSrc: "/inspiration/IL-The Bauhaus.png",
        description: "Revolutionary design school that unified fine arts and crafts, establishing modernist principles that continue to shape architecture, design, and visual culture.",
        category: "thought"
    }
]

export interface InspirationItem {
    label: string
    mediaType?: string,
    date?: string,
    imageSrc: string,
    description: string,
    category: "design" | "thought" | "art" | "built-environment"
}

export interface CategoryConfigItem {
    bgClassName: string, 
    yIcon: string,
    yIconClassName: string,
    outlineClassName: string
}

export const categoryConfig: Map<string, CategoryConfigItem> = new Map([
    [
        "design", {
            bgClassName: "bg-olive-700",
            yIcon: "j",
            yIconClassName: "text-olive-700",
            outlineClassName: "outline-olive-700"
        }
    ],
    [
        "thought", {
            bgClassName: "bg-gold-700",
            yIcon: "e",
            yIconClassName: "text-gold-700",
            outlineClassName: "outline-gold-700"
        }
    ],
    [
        "art", {
            bgClassName: "bg-plum-700",
            yIcon: "g",
            yIconClassName: "text-plum-700",
            outlineClassName: "outline-plum-700"
        }
    ],
    [
        "built-environment", {
            bgClassName: "bg-stone-750",
            yIcon: "Y",
            yIconClassName: "text-stone-750",
            outlineClassName: "outline-stone-750"
        }
    ],
])