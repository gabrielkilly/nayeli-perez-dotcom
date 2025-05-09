import Navbar from "@/components/Navbar";
import { buildingBlocksRedesignContent } from "./content/BuildingBlocksRedesign";
import { PROJECT_ID_BUILDING_BLOCKS_REDESIGN, ProjectContent } from "./content/ProjectContent";
import { notFound } from "next/navigation";
import { globalClassNames } from "@/components/StyleConstants";
import IntroSection from "@/components/project/IntroSection/IntroSection";

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
                </main>
            </>
        )
    }
}