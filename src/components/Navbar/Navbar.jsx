import React from 'react';
import logo from '../../assets/fabicon.svg'
import { Link, NavLink } from 'react-router-dom';

const link = <>
    <NavLink to={'/'} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-indigo-500 font-bold text-sm border-b-4 border-b-indigo-500" : "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"}>Home</NavLink>

    <NavLink to={'/about'} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-indigo-500 font-bold text-sm border-b-4 border-b-indigo-500" : "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"}>About Me</NavLink>

    <NavLink to={'/contact'} className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-indigo-500 font-bold text-sm border-b-4 border-b-indigo-500" : "font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"} href="#">Contact</NavLink>
</>
const Navbar = () => {
    return (
        <>
            <div className="navbar bg-base-100 w-full max-w-[85rem] sm:px-6 lg:px-8 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm flex flex-col gap-3 dropdown-content mt-3 z-[1] p-8 shadow bg-base-100 rounded w-52 ">
                            {
                                link
                            }
                        </ul>
                    </div>
                    <Link to={'/'} className="inline-flex items-center gap-x-2 text-xl gap-3 font-semibold text-indigo-900">
                        <img className="w-10 h-auto" src={logo} alt="Logo" />
                        Rokon
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:flex flex-row gap-9">
                        {link}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;