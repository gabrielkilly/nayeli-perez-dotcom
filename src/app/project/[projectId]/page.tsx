import { buildingBlocksRedesignContent } from "./content/BuildingBlocksRedesign";
import { ProjectContent } from "./content/ProjectContent";
import { notFound } from "next/navigation";

export interface ProjectProps {
    projectId: "BuildingBlocksRedesign" 
}

function getProjectContent(projectId: string): ProjectContent | null {
    switch (projectId) {
        case "BuildingBlocksRedesign": return buildingBlocksRedesignContent;
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