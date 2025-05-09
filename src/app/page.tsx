import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ExploreWorkContent, homeContent, SkillChipContent, WorkItemContent } from "./content";
import Section from "@/components/Section";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from 'html-react-parser';
import { fontFamiljenGrotesk, fontIbmPlexSerif, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import Link from "next/link";
import Image from "next/image";
import paperTextureImage from "@/assets/paper-texture.png";
import { projectIndexMap } from "./project/[projectId]/content/ProjectContent";

export default function Home() {
    const content = homeContent;
    const options: HTMLReactParserOptions = {
        replace(domNode) {
          if (domNode instanceof Element && domNode.attribs && domNode.name === 'a') {
            return <Link className="text-type-link underline" href={domNode.attribs.href}>
              {domToReact(domNode.children as DOMNode[], options)}
            </Link>
          }
        },
      };
    return (
        <>
            <main>
                <Navbar currentPage={"Work"}/>
                <div className="flex flex-col items-center justify-center">
                    <Section className="bg-neutral-1">
                        <div className="flex flex-col space-y-20 w-full justify-between items-center py-14">
                            <p className={`text-type-1 text-type-2 text-xl sm:text-3xl font-normal whitespace-pre-line ${fontFamiljenGrotesk.className} leading-9`}>
                                <span className={`text-4xl sm:text-5xl font-normal leading-10 ${fontIbmPlexSerif.className}`}><i>{content.nayeliName}</i></span>
                                &nbsp;{ parse(content.mainDescription, options) } 
                                <span className={`text-3xl sm:text-4xl text-icon-gold font-normal ml- ${fontYarndings12.className}`}>e</span>
                            </p>
                            <SkillsChips skills={content.skillChips}/>
                        </div>
                    </Section>
                    <ExploreWorkSection content={content.exploreWorkContent} />
                </div>
                <Footer />
            </main>
        </>
    )
}

function SkillsChips({skills}: {skills: SkillChipContent[]}) {
    return (
        <div className="self-stretch inline-flex items-center gap-3 flex-wrap content-center">
            {skills.map((skill, index) => {
                return <div className={`bg-neutral-1 rounded-lg outline outline-1 ${skill.outlineColorClassName} inline-flex px-4 py-2`} key={index}>
                    <div className={`${skill.textColorClassName} text-lg sm:leading-loose sm:text-2xl font-normal ${fontWorkSans.className} `}>
                        {skill.title}
                    </div>
                </div>
            })}
        </div>
    )
}

interface ExploreWorkContentProps {
    content: ExploreWorkContent
}
function ExploreWorkSection({ content }: ExploreWorkContentProps) {
    content.workItems.sort((a, b) => {
        return (projectIndexMap.get(a.projectId) ?? 99) - (projectIndexMap.get(b.projectId) ?? 99); //projectIndexMap is a map of projectId to its correct ordering, 99 is the default value if not found
    })
    return (
        <Section className="bg-khaki-1 space-y-2">
            <h2 className={`justify-start text-type-2 text-xl font-semibold ${fontWorkSans.className} uppercase leading-relaxed`}>Explore work</h2>

            <div className="flex flex-wrap">
                    {content.workItems.map((workItem, index) => {
                        return (
                            <WorkItem key={index} workItem={workItem} />
                        )
                    })}
            </div>
        
        </Section>
    )
}

function WorkItem({workItem}: {workItem: WorkItemContent}) {
    return (
        <Link href={`/project/${workItem.projectId}`} className="flex flex-col w-full space-y-4 p-4 mt-6 w-full lg:w-1/2 hover:bg-neutral-1-overlay rounded-xl h-auto">
            <div className={`w-full flex justify-center rounded-[9.75px] overflow-hidden outline outline-border-subtle outline-opacity-30 aspect-[21/16] ${workItem.bgColorClassName} relative`}>
                <Image
                    className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply"
                    src={paperTextureImage}
                    alt="Paper texture background"
                    width={800}
                    height={800}
                />
                <Image
                    className="w-4/5 object-cover object-top rounded-lg shadow-[0px_5px_41px_0px_rgba(177,140,36,0.10)] border border-border-medium border-opacity-60 relative top-4 md:top-8"
                    width={800}
                    height={800}
                    alt="Picture of project"
                    src={workItem.thumbnailImgPath}
                />
            </div>
            <h3 className={`text-type-1 text-xl font-semibold ${fontWorkSans.className} leading-relaxed`}>{workItem.title}</h3>
            {workItem.description && (
                <p className={`text-type-2 text-sm font-normal ${fontWorkSans.className} leading-tight`}>{workItem.description}</p>
            )}
            {workItem.label && (
                <div className={`text-type-2 text-base font-medium ${fontWorkSans.className} leading-normal`}>{workItem.label}</div>
            )}
        </Link>
    )
}