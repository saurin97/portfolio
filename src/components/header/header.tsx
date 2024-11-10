import NavLink from '../navLink/navLink';

const Header = () => {
    return (
        <header className="bg-white">
            <div className="container sm m-0-auto h-[80px]">
                <div className="flex items-center justify-between h-full">
                    <div className="px-3 h-full flex items-center">
                        <div className="w-4 h-4 bg-blue mr-3" />
                        <h1>
                            <span className="text-2xl font-extrabold">Saurin Patel</span>
                            <span className="uppercase tracking-widest font-light ml-3"> / Full stack developer</span>
                        </h1>
                    </div>
                    <nav className="space-x-6">
                        <NavLink href="/">About Me</NavLink>
                        <NavLink href="/resume">Resume</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;