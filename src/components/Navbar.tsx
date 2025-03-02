import { fontIbmPlexSerif, fontWorkSans } from "@/app/layout";
import { Color, getBgColorClassName, getTextColorClassName, globalClassNames } from "./StyleConstants";
import { SvgDisplayModeIcon, SvgMenu, SvgVerticalLine } from "./Svg";

export enum PageName {
    About="About", 
    Work="Work"
}

interface Page {
    name: PageName,
    href: string
}

const pages: Page[] = [
    {
        name: PageName.About,
        href: "/about"
    },
    {
        name: PageName.Work,
        href:"/"
    }
]

interface NavbarProps {
    currentPage: PageName
}

export default function Navbar({currentPage}: NavbarProps) {
    return (
        <nav>
            <div className={`${getBgColorClassName(Color.Neutral_1)} w-full flex justify-center px-8`}>
                <div className={`flex items-center justify-between w-full ${globalClassNames.maxWidth}`}>
                    <div className="flex items-center justify-between py-4 space-x-4">
                        <a href="/"><SvgMenu color={Color.Icon_Primary} width="24" height="24"/></a>
                        <SvgVerticalLine color={Color.Icon_Primary} width="1" height="24" />
                        <a href="/"><SvgDisplayModeIcon color={Color.Icon_Primary} width="24" height="24"/></a>
                    </div>
                    <a href="/">
                        <h2 className={`${fontIbmPlexSerif.className} ${getTextColorClassName(Color.Type_1)} text-xl italic hidden md:inline`}>Nayeli A. Pérez T.</h2>
                    </a>
                    <div>
                        <ul className="flex items-center justify-between py-4 space-x-2">
                            {   
                                pages.map(page => {
                                    const isCurrentPage = page.name == currentPage
                                    const activeCssStyle = (isCurrentPage) ? `${getBgColorClassName(Color.Neutral_3)} rounded` : ""
                                    return (
                                        <li><a href={page.href} className={`${getTextColorClassName(Color.Type_2)} ${fontWorkSans.className} px-4 py-2 ${activeCssStyle}`}>{page.name}</a></li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}