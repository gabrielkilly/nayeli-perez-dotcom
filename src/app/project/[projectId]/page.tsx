import { buildingBlocksRedesignContent } from "./content/BuildingBlocksRedesign";
import { PROJECT_ID_BUILDING_BLOCKS_REDESIGN, ProjectContent } from "./content/ProjectContent";
import { notFound } from "next/navigation";

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
            <div>
                <h1>{projectContent.introContent.description}</h1>
            </div>
        )
    }
}