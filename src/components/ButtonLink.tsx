import { fontWorkSans } from "@/components/Fonts";
import { SvgDownload } from "./Svg";

export interface ButtonLinkProps {
    title: string,
    url: string,
    target?: string,
    icon?: ButtonIcon,
    textColorClassName?: string,
}

export enum ButtonIcon {
    Download
}

export default function ButtonLink(props: ButtonLinkProps) {
    let icon
    if (props.icon == ButtonIcon.Download) {
        icon = <SvgDownload className="inline" colorCssValue="var(--icon-primary)"/>
    } 
    return (
        <a className={`${fontWorkSans.className} uppercase inline text-lg font-semibold border-b-2 ${props.textColorClassName} border-border-pine-medium w-fit`} href={props.url}>
            {icon} {props.title}
        </a>
    )
}