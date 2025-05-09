
import Navbar from "@/components/Navbar";
import { buildingBlocksRedesignContent } from "./content/BuildingBlocksRedesign";
import { BeforeAfterCardContent, Description, indexProjectMap, ItemGrid, PresentationPagerContent, PROJECT_ID_BUILDING_BLOCKS_REDESIGN, PROJECT_ID_TEMP_1, PROJECT_ID_TEMP_2, ProjectContent, projectIndexMap, ProjectSectionContent, ResultContent, Title } from "./content/ProjectContent";
import { notFound } from "next/navigation";
import { globalClassNames } from "@/components/StyleConstants";
import IntroSection from "@/components/project/IntroSection/IntroSection";
import Section from "@/components/Section";
import PresentationPager from "@/components/project/PresentationPager/PresentationPager";
import { fontWorkSans } from "@/components/Fonts";
import BeforeAfterCard from "@/components/project/BeforeAfterCard/BeforeAfterCard";
import BasicCard from "@/components/project/BasicCard/BasicCard";
import ResultListItems from "@/components/project/ResultListItems/ResultListItems";
import Footer from "@/components/Footer";
import { placeholderProject1 } from "./content/Temp1";
import { placeholderProject2 } from "./content/Temp2";
import Link from "next/link";
import { E } from "vitest/dist/chunks/reporters.d.CqBhtcTq.js";

export interface ProjectProps {
    projectId: string
}

/**
 * Basically replacing an api call to get the project content, just handling it in the UI for now.
 */
function getProjectContent(projectId: string): ProjectContent | null {
    switch (projectId) {
        case PROJECT_ID_BUILDING_BLOCKS_REDESIGN: return buildingBlocksRedesignContent;
        case PROJECT_ID_TEMP_1: return placeholderProject1;
        case PROJECT_ID_TEMP_2: return placeholderProject2;
        default: return null;
    }

}

export default async function Page({params}: { params: Promise<{ projectId: string }>}) {
    const { projectId } = await params
    const projectContent = getProjectContent(projectId);

    const getPreviouseProjectId = (projectId: string): string => {
        const projectIndex = projectIndexMap.get(projectId);
        if (projectIndex === undefined) {
            return "#";
        } else if (projectIndex === 0) {
            return indexProjectMap.get(indexProjectMap.size - 1) ?? "#";
        } else {
            return indexProjectMap.get(projectIndex - 1) ?? "#";
        }
    }

    const getNextProject = (projectId: string): string => {
        const projectIndex = projectIndexMap.get(projectId);
        if (projectIndex === undefined) {
            return "#";
        } else if (projectIndex === indexProjectMap.size - 1) {
            return indexProjectMap.get(0) ?? "#";
        } else {
            return indexProjectMap.get(projectIndex - 1) ?? "#";
        }
    }

    if (projectContent === null) {
        return notFound()
    } else {
        return (
            <>
                <main>
                    <Navbar />
                    <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} bg-neutral-1 py-16`}>
                        <div className={`w-full ${globalClassNames.maxWidth}`}>
                            <IntroSection introContent={projectContent.introContent} />
                        </div>
                    </div>
                    {
                        projectContent.sections.map((section, index) => (
                            <ProjectSection key={index} sectionContent={section} />
                        ))
                    }
                    <Section className="bg-khaki-1">
                        <div className="w-full flex flex-wrap gap-4">
                            <Link 
                                className="basis-1/2-gap-4 self-stretch p-4 outline outline-1 outline-offset-[-1px] outline-border-standard inline-flex flex-col justify-center items-center gap-2"
                                href={`/project/${getPreviouseProjectId(projectId)}`}>
                                <div className={`self-stretch text-center justify-start text-type-1 text-xl font-normal ${fontWorkSans.className} leading-7`}>&lt; Previous</div>
                            </Link>
                            <Link 
                                className="basis-1/2-gap-4 self-stretch p-4 outline outline-1 outline-offset-[-1px] outline-border-standard inline-flex flex-col justify-center items-center gap-2"
                                href={`/project/${getNextProject(projectId)}`}>
                                <div className={`self-stretch text-center justify-start text-type-1 text-xl font-normal ${fontWorkSans.className} leading-7`}>Next &gt;</div>
                            </Link>
                        </div>
                    </Section>
                    <Footer />
                </main>
            </>
        )
    }
}

interface ProjectSectionProps {
    sectionContent: ProjectSectionContent,
}

function ProjectSection({sectionContent}: ProjectSectionProps) {
    return (
        <Section className={`${sectionContent.backgroundColorCssName}`}>
            <div className="flex flex-col space-y-6 w-full">
            {sectionContent.contentItems.map((item, itemIndex) => {
                switch (item.type) {
                    case "title":
                        return (
                            <h2 key={itemIndex} className={`justify-start text-type-1 text-xl font-semibold ${fontWorkSans.className} leading-relaxed uppercase`}>
                                {(item.content as Title).value}
                            </h2>
                        )
                    case "description":
                        return (
                            <p key={itemIndex} className={`self-stretch justify-start text-type-1 text-base font-normal ${fontWorkSans.className} leading-normal whitespace-break-spaces`}>
                                {(item.content as Description).value}
                            </p>
                        )
                    case "presentationPager":
                        return (
                            <PresentationPager
                                key={itemIndex}
                                pagerContent={item.content as PresentationPagerContent}/>
                        )
                    case "beforeAfterCard":
                        return (
                            <BeforeAfterCard
                                key={itemIndex}
                                cardContent={item.content as BeforeAfterCardContent} />
                        )
                    case "itemGrid":
                        return (
                        <div key={itemIndex} className="flex flex-wrap gap-4">
                            {(item.content as ItemGrid).items.map((cardContent, cardIndex) => (
                                <BasicCard
                                    key={cardIndex}
                                    cssName="md:basis-1/2-gap-4"
                                    cardContent={cardContent} />
                            ))}
                        </div>
                        )
                    case "resultContent":
                        return (
                            <ResultListItems
                                key={itemIndex}
                                resultContent={item.content as ResultContent} />
                        )
                    default:
                        return null;
                }
            })}
            </div>
        </Section>
    )
}
