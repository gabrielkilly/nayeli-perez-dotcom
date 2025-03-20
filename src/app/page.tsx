import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { homeContent, SkillChipContent } from "./content";
import Section from "@/components/Section";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from 'html-react-parser';
import { fontFamiljenGrotesk, fontIbmPlexSerif, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import Link from "next/link";
import { SkillsSectionContent } from "./about/content";

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
                    <Section className="bg-khaki-1">
                        
                    </Section>
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