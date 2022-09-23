import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <div className="bg-secondary">
            <nav className="navbar container mx-auto py-3">
                <div className="flex-1 justify-between lg:justify-start">
                    <Link href={'/'} >
                        <Logo />
                    </Link>

                    <button
                        onClick={() => {
                            show ? setShow(false) : setShow(true)
                        }}
                        className="btn btn-ghost text-3xl text-primary block lg:hidden">
                        {
                            show
                                ?
                                <i className={`fa-solid fa-bars-staggered `}></i>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                        }
                    </button>

                    <ul className="menu menu-horizontal hidden lg:flex p-0 ml-5">
                        <Navs />
                    </ul>
                </div>
                <div className="flex-none">
                    <button className="btn lg:block hidden btn-outline btn-primary btn-md rounded-full px-7">Get a Quote</button>
                </div>
            </nav>
            <aside className={`absolute ${show ? "flex" : 'translate-y-full hidden'}  flex top-[74px] left-0 bg-secondary h-screen w-full mobile-nav z-50 lg:hidden
            origin-left
            `}>
                <ul className="mobile-manu">
                    <Navs />
                </ul>
            </aside>
        </div>
    );
}

export default Navbar;

const Navs = () => {
    return (
        <>

            <li>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href={'/about'}>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href={'/service'}>
                    <a>Services</a>
                </Link>
            </li>
            <li>
                <Link href={'/portfolio'}>
                    <a>Work's</a>
                </Link>
            </li>
            <li>
                <Link href={'/blogs'}>
                    <a>Blogs</a>
                </Link>
            </li>
            <li>
                <Link href={'/contact'}>
                    <a>Contact Us</a>
                </Link>
            </li>
            <button className="btn lg:hidden block mt-7 btn-outline btn-primary btn-md rounded-full px-7">Get a Quote</button>
        </>
    )
}