
import Navbar from "@/components/Navbar";
import { buildingBlocksRedesignContent } from "./content/BuildingBlocksRedesign";
import { Description, PresentationPagerContent, PROJECT_ID_BUILDING_BLOCKS_REDESIGN, ProjectContent, ProjectSectionContent, Title } from "./content/ProjectContent";
import { notFound } from "next/navigation";
import { globalClassNames } from "@/components/StyleConstants";
import IntroSection from "@/components/project/IntroSection/IntroSection";
import Section from "@/components/Section";
import PresentationPager from "@/components/project/PresentationPager/PresentationPager";
import { fontWorkSans } from "@/components/Fonts";

export interface ProjectProps {
    projectId: string
}

/**
 * Basically replacing an api call to get the project content, just handling it in the UI for now.
 */
function getProjectContent(projectId: string): ProjectContent | null {
    switch (projectId) {
        case PROJECT_ID_BUILDING_BLOCKS_REDESIGN: return buildingBlocksRedesignContent;
        default: return null;
    }

}

export default async function Page({params}: { params: Promise<{ projectId: string }>}) {
    const { projectId } = await params
    const projectContent = getProjectContent(projectId);

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
                            <ProjectSection key={index} sectionContent={section} backgroundColorCssName={(index % 2 == 0) ? "bg-neutral-2" : "bg-neutral-1"} />
                        ))
                    }
                </main>
            </>
        )
    }
}

interface ProjectSectionProps {
    sectionContent: ProjectSectionContent,
    backgroundColorCssName: string
}

function ProjectSection({sectionContent, backgroundColorCssName}: ProjectSectionProps) {
    return (
        <Section className={`${backgroundColorCssName}`}>
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
                    default:
                        return null;
                }
            })}
            </div>
        </Section>
    )
}
