import Footer from "@/components/Footer";
import { homeContent, SkillChipContent, ValuesSectionContent, Value } from "./content";
import Section from "@/components/Section";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from 'html-react-parser';
import { fontFamiljenGrotesk, fontLora, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import Link from "next/link";
// import { SvgSkillChipIcon } from "@/components/Svg";
import YarndingsIcon from "@/components/YarndingsIcon";
import InspirationSection from "@/components/InspirationSection";

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
                                {/* <Image className="self-center" width={80} height={80} src="/headshot-circle.png"/> */}
                                <p className={`text-type-2 text-xl leading-7 sm:text-[28px] sm:leading-9 font-normal ${fontFamiljenGrotesk.className}`}>
                                    <div className={`sm:text-[40px] pb-4 text-4xl font-normal leading-10 italic ${fontLora.className}`}>
                                        Hello! I&apos;m <Link href="/about" className="relative inline-block group cursor-pointer">
                                            <span className="absolute inset-0 bg-olive-200 group-hover:bg-olive-500 transition-colors duration-300 -z-1 translate-y-[34px] h-2"></span>
                                            <span className="relative">Nayeli</span>
                                        </Link>.
                                    </div>
                                    {parse(content.introDescriptions[0], options)}
                                </p>
                                {content.introDescriptions.slice(1).map((desc, index) => {
                                    const isLast = index === content.introDescriptions.slice(1).length - 1;
                                    return (
                                        <p key={index + 1} className={`text-type-2 text-xl leading-7 sm:text-[28px] sm:leading-9 font-normal ${fontFamiljenGrotesk.className}`}>
                                            {parse(desc, options)}
                                            {isLast && <span className={`text-3xl sm:text-3xl text-icon-gold font-normal ${fontYarndings12.className}`}> e</span>}
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
                    <ValuesSection content={content.valuesSection} />
                    <InspirationSection />
                </div>
                <Footer />
            </main>
        </>
    )
}

interface ValuesSectionProps {
    content: ValuesSectionContent
}

function ValuesSection({content}: ValuesSectionProps) {
    const {values, title} = content
    const verticalLineClassName = "self-stretch relative origin-top-left ring-[0.675px] ring-overlay-subtle flex-shrink"
    const horizontalLineClassName = "self-stretch h-0 relative ring-[0.675px] ring-overlay-subtle"

    if (values.length != 4) {
        throw Error("Values content length is not equal to 4")
    }
    return (
        <Section className="bg-plum-800" paddingVertical="Wide">
            <div className="flex flex-col space-y-12">
                <h2 className={`text-type-alt text-xl font-semibold ${fontWorkSans.className} uppercase lg:w-1/2`}>
                    {title}
                </h2>
                <div className="flex flex-col w-full space-y-8">
                    <div className="flex flex-col lg:flex-row justify-around w-full space-y-8 lg:space-x-8 lg:space-y-0">
                        <ValueItem value={values[0]}/>
                        <div className={verticalLineClassName}></div>
                        <ValueItem value={values[1]}/>
                    </div>
                    <div className={horizontalLineClassName}></div>
                    <div className="flex flex-col lg:flex-row justify-around w-full space-y-8 lg:space-x-8 lg:space-y-0">
                        <ValueItem value={values[2]}/>
                        <div className={verticalLineClassName}></div>
                        <ValueItem value={values[3]}/>
                    </div>
                </div>
            </div>

        </Section>

    )
}

interface ValueItemProps {
    value: Value
}

function ValueItem({ value } : ValueItemProps) {
    return (
        <div className="flex flex-col space-y-4 basis-1/2">
            <h3>
                <YarndingsIcon icon={value.yanrdingsIcon} textColorClassName={value.textColorClassName} className="text-2xl"/> &nbsp;
                <span className={`${fontLora.className} text-2xl text-black text-2xl font-normal text-type-alt leading-loose`}><i>{value.title}</i></span>
            </h3>
            <p className={`${fontWorkSans.className} whitespace-pre-line text-black text-sm font-normal text-type-alt leading-tight`}>{value.description}</p>
        </div>
    )
}

function SkillsChips({skills}: {skills: SkillChipContent[]}) {
    const options: HTMLReactParserOptions = {
        replace(domNode) {
          if (domNode instanceof Element && domNode.attribs && domNode.name === 'a') {
            return <Link className="underline hover:opacity-70 transition-opacity" href={domNode.attribs.href} target="_blank" rel="noopener noreferrer">
              {domToReact(domNode.children as DOMNode[], options)}
            </Link>
          }
        },
      };
    return (
        <div className="self-stretch inline-flex gap-x-3 gap-y-0 flex-wrap content-center">
            {skills.map((skill, index) => {
                return <div className={`bg-neutral-25 inline-flex`} key={index}>
                    <div className={`${skill.textColorClassName} pb-4 sm:pb-1 text-2xl font-medium leading-7 sm:leading-10 ${fontLora.className}`}>
                        <i>{parse(skill.title, options)}</i>
                    </div>
                    {/* {
                        (index < skills.length - 1) ? <SvgSkillChipIcon colorCssValue="#84876F" className="ml-4" /> : <></>
                    } */}
                </div>
            })}
        </div>
    )
}