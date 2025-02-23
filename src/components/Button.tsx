import { fontWorkSans } from "@/app/layout";
import { Color, getBorderColorClassName, getTextColorClassName } from "./StyleConstants";

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
    return (
        <a className={`${fontWorkSans.className} text-base font-semibold border-b-2 ${getTextColorClassName(Color.Type_2)} ${getBorderColorClassName(Color.Border_Pine)} w-fit`} href={props.url}>{props.title}</a>
    )
}