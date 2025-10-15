import { buildingBlocksRedesignContent } from "./content/BuildingBlocksRedesign";
import { BeforeAfterCardContent, Description, indexProjectMap, ItemGrid as ItemGridContent, PresentationPagerContent, PROJECT_ID_BUILDING_BLOCKS_REDESIGN, PROJECT_GANTRI_MADE, PROJECT_FACTORY_OS, ProjectContent, projectIndexMap, ProjectSectionContent, ResultContent, Title, Spacer, SimpleCarouselContent, NumberedHeader, HeaderAndDescription, PROJECT_CHARGIFY } from "./content/ProjectContent";
import { notFound } from "next/navigation";
import IntroSection from "@/components/project/IntroSection";
import Section from "@/components/Section";
import PresentationPager from "@/components/project/PresentationPager";
import { fontFamiljenGrotesk, fontLora, fontWorkSans } from "@/components/Fonts";
import BeforeAfterCard from "@/components/project/BeforeAfterCard";
import ItemGrid from "@/components/project/ItemGrid";
import ResultListItems from "@/components/project/ResultListItems";
import Footer from "@/components/Footer";
import { gantriMadeProject } from "./content/GantriMade";
import { FactoryOS } from "./content/FactoryOs";
import Link from "next/link";
import { SvgArrowLeft, SvgArrowRight } from "@/components/Svg";
import { globalClassNames } from "@/components/StyleConstants";
import SimpleCarousel from "@/components/project/SimpleCarousel";
import { Chargify } from "./content/Chargify";
import ProjectPageWrapper from "@/components/ProjectPageWrapper";


export interface ProjectProps {
    projectId: string
}

/**
 * Basically replacing an api call to get the project content, just handling it in the UI for now.
 */
function getProjectContent(projectId: string): ProjectContent | null {
    switch (projectId) {
        case PROJECT_ID_BUILDING_BLOCKS_REDESIGN: return buildingBlocksRedesignContent;
        case PROJECT_GANTRI_MADE: return gantriMadeProject;
        case PROJECT_FACTORY_OS: return FactoryOS;
        case PROJECT_CHARGIFY: return Chargify;
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
            return indexProjectMap.get(projectIndex + 1) ?? "#";
        }
    }

    if (projectContent === null) {
        return notFound()
    } else {
        return (
            <ProjectPageWrapper>
                <main>
                    <IntroSection introContent={projectContent.introContent} />
                    {
                        projectContent.sections.map((section, index) => (
                            <ProjectSection key={index} sectionContent={section} />
                        ))
                    }
                    <div className={`w-full flex flex-col items-center ${globalClassNames.defaultXPadding} bg-neutral-25`}>
                        <div className={`w-full py-10 ${globalClassNames.maxWidth} ${projectContent.navButtonsBorder && "border-t border-border-subtle"}`}>
                            <div className="w-full flex justify-between items-center py-8">
                            <Link
                                className="inline-flex items-center gap-3 text-type-2 hover:text-[#9EA18A]"
                                href={`/project/${getPreviouseProjectId(projectId)}`}
                                aria-label="Previous project">
                                <SvgArrowLeft colorCssValue="currentColor" width="24" height="24" />
                                <div className={`text-xl font-semibold ${fontWorkSans.className} uppercase tracking-wide`}>PREVIOUS</div>
                            </Link>
                            <Link
                                className="inline-flex items-center gap-3 hover:text-[#9EA18A]"
                                href={`/project/${getNextProject(projectId)}`}
                                aria-label="Next project">
                                <div className={`text-xl font-semibold ${fontWorkSans.className} uppercase tracking-wide `}>NEXT</div>
                                <SvgArrowRight colorCssValue="currentColor" width="24" height="24" />
                            </Link>
                        </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </ProjectPageWrapper>
        )
    }
}

interface ProjectSectionProps {
    sectionContent: ProjectSectionContent,
}

function ProjectSection({sectionContent}: ProjectSectionProps) {
    return (
        <Section className={`${sectionContent.backgroundColorCssName} ${sectionContent.textColorCssName}`}>
            <div className="flex flex-col space-y-6 w-full">
            {sectionContent.contentItems.map((item, itemIndex) => {
                switch (item.type) {
                    case "title":
                        return (
                            <h2 key={itemIndex} className={`justify-start text-xs font-semibold ${fontWorkSans.className} uppercase leading-none`}>
                                {(item.content as Title).value}
                            </h2>
                        )
                    case "description":
                        return (
                            <p key={itemIndex} className={`justify-start text-3xl font-normal ${fontFamiljenGrotesk.className} leading-10 whitespace-break-spaces`}>
                                {(item.content as Description).value}
                            </p>
                        )
                    case "infoDescription":
                        return (
                            <p key={itemIndex} className={`justify-start text-xl font-normal ${fontWorkSans.className} leading-7 whitespace-break-spaces`}>
                                {(item.content as Description).value}
                            </p>
                        )
                    case "headerAndDescription": {
                        const {header, description} = item.content as HeaderAndDescription
                        return (
                            <div key={itemIndex} className="flex flex-col">
                                <h3 className={`text-type-alt text-base font-semibold uppercase leading-normal uppercase ${fontWorkSans.className}`}>{header}</h3>
                                <p key={itemIndex} className={`text-type-alt ${fontWorkSans.className} text-base font-normal leading normal`}>
                                    {description}
                                </p>
                            </div>
                        )
                    }
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
                            <ItemGrid
                                key={itemIndex}
                                gridContent={item.content as ItemGridContent} />
                        )
                    case "resultContent":
                        return (
                            <ResultListItems
                                key={itemIndex}
                                resultContent={item.content as ResultContent} />
                        )
                    case "spacer":
                        return (
                            <div key={itemIndex} className={(item.content as Spacer).paddingClassName} />
                        )
                    case "simpleCarousel": 
                        return (
                            <SimpleCarousel key={itemIndex} carouselContent={item.content as SimpleCarouselContent} />
                        )
                    case "numberedHeader": {
                        const {number, header, numberClassName} = item.content as NumberedHeader
                        return (
                            <div key={itemIndex} className="flex flex-col">
                                <span className={`${numberClassName} text-xl font-semibold uppercase leading-relaxed`}>{number}</span>
                                <h2 key={itemIndex} className={`text-type-alt ${fontLora.className} italic text-2xl font-normal leading-2`}>
                                    <i>{header}</i>
                                </h2>
                            </div>
                        )
                    }
                    default:
                        return null;
                }
            })}
            </div>
        </Section>
    )
}
