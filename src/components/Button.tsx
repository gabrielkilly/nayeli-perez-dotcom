import { fontWorkSans } from "@/app/layout";
import { Color, getBorderColorClassName, getTextColorClassName } from "./StyleConstants";
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
        icon = <SvgDownload className="inline" color={Color.Border_Pine}/>
    } 
    return (
        <a className={`${fontWorkSans.className} inline text-base font-semibold border-b-2 ${getTextColorClassName(Color.Type_2)} ${getBorderColorClassName(Color.Border_Pine)} w-fit`} href={props.url}>
            {icon} {props.title}
        </a>
    )
}