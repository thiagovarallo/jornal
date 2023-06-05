import { Link } from "react-router-dom";
import Search from "../Search";

export default function Navbar() {
    return (
        <header className="w-full h-52 ">
            <section className="w-full h-3/5 flex justify-center item">
                <div className="w-52 h-28 bg-logo bg-contain bg-center bg-no-repeat"></div>
            </section>
            <section className="w-full h-2/5 bg-primary flex flex-col items-center py-1 lg:flex-row lg:justify-between lg:px-14">
                <div className="w-full lg:w-auto">
                    <nav className="flex gap-4 justify-center font-inter text-white lg:text-[19px]">
                        <Link to="/">sport</Link>
                        <Link to="/">sport</Link>
                        <Link to="/">sport</Link>
                        <Link to="/">sport</Link>
                        <Link to="/">sport</Link>
                    </nav>
                </div>
                <Search />
            </section>
        </header>    
    )
}