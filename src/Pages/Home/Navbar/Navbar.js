import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const MenuBar = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='about'>About</Link></li>
        <li><Link to='contactus'>Contact Us</Link></li>
        <li><Link to='signin'>Sign in</Link></li>
        <li><Link to='signout'>Sign out</Link></li>
    </React.Fragment>

    return (
        <div className="navbar Navbar mt-2 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {MenuBar}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Atom</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {MenuBar}
                </ul>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text text-base font-semibold ">Post a job</span>
                    <input type="checkbox" className="toggle mx-2" />
                    <span className="label-text text-base font-semibold">Want a job</span>
                </label>
            </div>

        </div>
    );
};

export default Navbar;