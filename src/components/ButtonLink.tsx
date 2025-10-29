"use client"
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

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Check if it's an anchor link (starts with #)
        if (props.url.startsWith('#')) {
            e.preventDefault();
            const element = document.querySelector(props.url);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                const navbarHeight = 80; // Approximate navbar height
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <a
            className={`${fontWorkSans.className} uppercase inline text-lg font-semibold border-b-2 ${props.textColorClassName} border-border-pine-medium w-fit transition-all hover:rounded-t hover:border-b-[3px] hover:border-[#6EA465] hover:bg-[rgba(125,116,82,0.10)]`}
            style={{ padding: '8px 8px 8px 8px' }}
            href={props.url}
            onClick={handleClick}
        >
            {icon} {props.title}
        </a>
    )
}