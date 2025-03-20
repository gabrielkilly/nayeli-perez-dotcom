import { fontWorkSans } from "@/components/Fonts";
import { SvgDownload } from "./Svg";

export interface ButtonLinkProps {
    title: string,
    url: string,
    target?: string,
    icon?: ButtonIcon
}

export enum ButtonIcon {
    Download
}

export default function ButtonLink(props: ButtonLinkProps) {
    let icon
    if (props.icon == ButtonIcon.Download) {
        icon = <SvgDownload className="inline" colorCssValue="var(--border-pine)"/>
    } 
    return (
        <a className={`${fontWorkSans.className} inline text-base font-semibold border-b-2 text-type-2 border-border-pine-medium w-fit`} href={props.url}>
            {icon} {props.title}
        </a>
    )
}