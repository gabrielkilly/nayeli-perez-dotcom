import Footer from "@/components/Footer";
import { homeContent, WorkItemContent } from "../content";
import Section from "@/components/Section";
import { fontFamiljenGrotesk, fontWorkSans } from "@/components/Fonts";
import Link from "next/link";
import Image from "next/image";
import paperTextureImage from "@/assets/paper-texture.png";
import { projectIndexMap } from "../project/[projectId]/content/ProjectContent";

export default function Work() {
    const content = homeContent.exploreWorkContent;
    content.workItems.sort((a, b) => {
        return (projectIndexMap.get(a.projectId) ?? 99) - (projectIndexMap.get(b.projectId) ?? 99);
    });

    return (
        <>
            <main>
                <div className="flex flex-col items-center justify-center">
                    <Section className="bg-neutral-25 space-y-2">
                        <h2 className={`justify-start text-type-1 text-xl font-semibold ${fontWorkSans.className} uppercase leading-relaxed`}>Work</h2>

                        <div className="flex flex-wrap">
                            {content.workItems.map((workItem, index) => {
                                return (
                                    <WorkItem key={index} workItem={workItem} />
                                )
                            })}
                        </div>

                    </Section>
                </div>
                <Footer />
            </main>
        </>
    )
}

function WorkItem({workItem}: {workItem: WorkItemContent}) {
    return (
        <Link href={`/project/${workItem.projectId}`} className="flex flex-col w-full space-y-4 p-4 mt-6 w-full lg:w-1/2 hover:bg-neutral-4 rounded-xl h-auto transition-colors duration-300 ease-in-out">
            <div className={`w-full flex justify-center rounded-[9.75px] aspect-[21/16] ${workItem.bgColorClassName} relative`}>
                <Image
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-multiply"
                    src={paperTextureImage}
                    alt="Paper texture background"
                    width={800}
                    height={800}
                />
                <Image
                    className="object-cover object-cemter rounded-lg"
                    width={800}
                    height={800}
                    alt="Picture of project"
                    src={workItem.thumbnailImgPath}
                />
            </div>
            <h3 className={`text-type-2 text-xl/7 font-medium ${fontFamiljenGrotesk.className}`}>{workItem.title}</h3>
            {/* {workItem.description && (
                <p className={`text-type-2 text-sm font-normal ${fontWorkSans.className} leading-tight whitespace-break-spaces`}>{workItem.description}</p>
            )}
            {workItem.logoImgPath && (
                <Image
                    className="w-16 h-4"
                    src={workItem.logoImgPath}
                    alt={`${workItem.title} logo`}
                    width={500}
                    height={500} />
            )} */}
        </Link>
    )
}
