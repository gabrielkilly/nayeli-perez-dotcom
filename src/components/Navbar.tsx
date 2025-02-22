import { Color, getBgColorClassName, globalClassNames } from "./StyleConstants";
import { SvgDisplayModeIcon, SvgMenu, SvgVerticalLine } from "./Svg";

export default function Navbar() {
    return (
        <nav>
            <div className={`${getBgColorClassName(Color.Neutral_1)} w-full flex justify-center`}>
                <div className={`flex items-center justify-between w-full ${globalClassNames.maxWidth}`}>
                    <div className="flex items-center justify-between py-4 space-x-4">
                        <a href="/"><SvgMenu color={Color.Icon_Primary} width="24" height="24"/></a>
                        <SvgVerticalLine color={Color.Icon_Primary} width="1" height="24" />
                        <a href="/"><SvgDisplayModeIcon color={Color.Icon_Primary} width="24" height="24"/></a>
                    </div>
                    <div>
                        <ul className="flex items-center justify-between py-4 space-x-8 hidden lg:flex">
                            <li>Resume</li>
                            <li>View Work</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}