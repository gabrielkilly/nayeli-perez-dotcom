import { AppColor } from "./AppColor";

interface SectionProps {
    color: AppColor, 
    children?: React.ReactNode
}

export default function Section({color, children}: SectionProps) {
    
    return (
        <div className={`w-full max-w-screen-2xl bg-${color}`}>
            {children}
        </div>
    )
}