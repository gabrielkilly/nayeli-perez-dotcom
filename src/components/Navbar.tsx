
export default function Navbar() {
    return (
        <nav>
            <div className="bg-neutral-1 border-b-2 border-type-1 w-full flex justify-center">
                <div className={`flex items-center justify-between w-full max-w-screen-xl`}>
                    <div className="flex items-center justify-between py-4">
                        <a>Placeholder</a>
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