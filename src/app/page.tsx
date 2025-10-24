import Footer from "@/components/Footer";
import { homeContent, SkillChipContent, ValuesSectionContent, Value } from "./content";
import Section from "@/components/Section";
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from 'html-react-parser';
import { fontFamiljenGrotesk, fontLora, fontWorkSans, fontYarndings12 } from "@/components/Fonts";
import Link from "next/link";
import { SvgSkillChipIcon } from "@/components/Svg";
import YarndingsIcon from "@/components/YarndingsIcon";
import Image from "next/image";
import { categoryConfig, currentInspirations, InspirationItem } from "./inspiration/content";
import ButtonLink from "@/components/ButtonLink";

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

function InspirationSection() {
    return (
        <Section className="bg-neutral-25" paddingVertical="Standard">
            <div className="flex flex-col space-y-12">
                <h2 className={`text-type-1 text-base font-semibold uppercase ${fontWorkSans.className} leading-6`}>
                    Currently Inspiring Me
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {currentInspirations.map((inspiration, index) => (
                        <InspirationCard key={index} inspiration={inspiration} />
                    ))}
                </div>

                <ButtonLink title="View Inspiration Library" url="/inspiration" textColorClassName="text-type-2" />
            </div>
        </Section>
    );
}

interface InspirationCardProps {
    inspiration: InspirationItem;
}

function InspirationCard({ inspiration }: InspirationCardProps) {
    const category = categoryConfig.get(inspiration.category)!!;

    return (
        <div className={`self-stretch h-56 rounded-lg outline outline-2 ${category.outlineClassName} flex flex-col justify-start items-center overflow-hidden cursor-pointer`}>
            <div className={`self-stretch px-1.5 py-0.5 ${category.bgClassName} flex justify-end items-center gap-2.5 overflow-hidden`}>
                <div className={`justify-start text-white text-base font-normal ${fontYarndings12.className} leading-none`}>
                    {category.yIcon}
                </div>
            </div>

            <div className="self-stretch h-36 relative px-4 py-2.5">
                <Image
                    src={inspiration.imageSrc}
                    alt={inspiration.label}
                    fill
                    className="object-cover"
                />
            </div>

            <div className={`self-stretch flex-1 px-3 py-2 ${category.bgClassName} flex justify-start items-center gap-2.5 overflow-hidden`}>
                <div className={`flex-1 self-stretch flex items-center justify-start text-white text-sm font-medium ${fontWorkSans.className} leading-tight`}>
                    {inspiration.label}
                </div>
            </div>
        </div>
    );
}