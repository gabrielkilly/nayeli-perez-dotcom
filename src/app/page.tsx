import Footer from "@/components/Footer";
import { ExploreWorkContent, homeContent, SkillChipContent, WorkItemContent } from "./content";
import Section from "@/components/Section";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from 'html-react-parser';
import { fontFamiljenGrotesk, fontIbmPlexSerif, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import Link from "next/link";
import Image from "next/image";
import paperTextureImage from "@/assets/paper-texture.png";
import { projectIndexMap } from "./project/[projectId]/content/ProjectContent";
import { SvgSkillChipIcon } from "@/components/Svg";

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
                <div className="flex flex-col items-center justify-center">
                    <Section className="bg-neutral-1">
                        <div className="flex flex-col space-y-20 w-full justify-between items-center py-14">
                            <p className={`text-type-1 text-type-2 text-xl leading-9 sm:text-3xl font-normal whitespace-pre-line ${fontFamiljenGrotesk.className}`}>
                                <span className={`text-4xl sm:text-5xl font-normal leading-10 ${fontIbmPlexSerif.className}`}><i>{content.nayeliName}</i></span>
                                &nbsp;{ parse(content.mainDescription, options) } 
                                <span className={`text-3xl sm:text-4xl text-icon-gold font-normal ml- ${fontYarndings12.className}`}> e</span>
                            </p>
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className={`text-type-2 text-xs font-semibold uppercase ${fontWorkSans.className}`}>{content.skillTitle}</h3>
                                <SkillsChips skills={content.skillChips}/>
                            </div>
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
                return <div className={`bg-neutral-1 inline-flex justify-center items-center`} key={index}>
                    <div className={`${skill.textColorClassName} text-xl font-medium leading-7 sm:leading-10 sm:text-3xl sm:font-normal ${fontIbmPlexSerif.className}`}>
                        <i>{skill.title}</i>
                    </div>
                    {
                        (index < skills.length - 1) ? <SvgSkillChipIcon colorCssValue="#84876F" className="ml-4" /> : <></>
                    }
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
        <Section className="bg-olive-700 space-y-2">
            <h2 className={`justify-start text-type-alt text-xl font-semibold ${fontWorkSans.className} uppercase leading-relaxed`}>Explore work</h2>

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
        <Link href={`/project/${workItem.projectId}`} className="flex flex-col w-full space-y-4 p-4 mt-6 w-full lg:w-1/2 hover:bg-olive-800 rounded-xl h-auto">
            <div className={`w-full flex justify-center rounded-[9.75px] overflow-hidden outline outline-border-subtle outline-opacity-30 aspect-[21/16] ${workItem.bgColorClassName} relative`}>
                <Image
                    className="absolute inset-0 w-full h-full object-cover opacity-96 mix-blend-multiply"
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
            <h3 className={`text-type-alt text-xl font-semibold ${fontWorkSans.className} leading-relaxed`}>{workItem.title}</h3>
            {workItem.description && (
                <p className={`text-type-alt text-sm font-normal ${fontWorkSans.className} leading-tight`}>{workItem.description}</p>
            )}
            {workItem.logoImgPath && (
                <Image
                    className="w-16 h-4"
                    src={workItem.logoImgPath}
                    alt={`${workItem.title} logo`}
                    width={64}
                    height={64} />
            )}
        </Link>
    )
}