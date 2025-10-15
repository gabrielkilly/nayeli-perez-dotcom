import Footer from "@/components/Footer";
import { homeContent, SkillChipContent } from "./content";
import Section from "@/components/Section";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from 'html-react-parser';
import { fontFamiljenGrotesk, fontLora, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import Link from "next/link";
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
                    <Section className="bg-neutral-25">
                        <div className="flex flex-col space-y-20 w-full justify-between items-center py-10">
                            <div className="flex flex-col space-y-4 sm:space-y-6">
                                <p className={`text-type-2 text-xl leading-7 sm:text-[28px] sm:leading-9 font-normal ${fontFamiljenGrotesk.className}`}>
                                    <span className={`text-4xl sm:text-4xl font-normal leading-10 italic ${fontLora.className}`}>{content.nayeliName}</span>
                                    &nbsp;{parse(content.introDescriptions[0], options)}
                                </p>
                                {content.introDescriptions.slice(1).map((desc, index) => {
                                    const isLast = index === content.introDescriptions.slice(1).length - 1;
                                    return (
                                        <p key={index + 1} className={`text-type-2 text-xl leading-7 sm:text-[28px] sm:leading-9 font-normal ${fontFamiljenGrotesk.className}`}>
                                            {parse(desc, options)}
                                            {isLast && <span className={`text-3xl sm:text-4xl text-icon-gold font-normal ${fontYarndings12.className}`}> e</span>}
                                        </p>
                                    );
                                })}
                            </div>
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className={`text-type-2 text-xs font-semibold uppercase ${fontWorkSans.className}`}>{content.skillTitle}</h3>
                                <SkillsChips skills={content.skillChips}/>
                            </div>
                        </div>
                    </Section>
                </div>
                <Footer />
            </main>
        </>
    )
}

function SkillsChips({skills}: {skills: SkillChipContent[]}) {
    return (
        <div className="self-stretch inline-flex items-center gap-x-3 gap-y-0 flex-wrap content-center">
            {skills.map((skill, index) => {
                return <div className={`bg-neutral-25 inline-flex justify-center items-center`} key={index}>
                    <div className={`${skill.textColorClassName} text-2xl font-medium leading-7 sm:leading-10 sm:text-3xl ${fontLora.className}`}>
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