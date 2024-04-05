import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-blue-900 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li>
                            <a>Menu</a>
                            <ul className="p-2">
                                <li><NavLink to='/users'>Users</NavLink></li>
                                <li><NavLink to='/messages'>Messages</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to='/addmessage'>Write Message</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Message Plus</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>
                        <details>
                            <summary>Menu</summary>
                            <ul className="p-2 text-black">
                                <li><NavLink to='/users'>Users</NavLink></li>
                                <li><NavLink to='/messages'>Message</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li><NavLink to='/addmessage'>Write Message</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                
            </div>
        </div>
    );
};

export default Navbar;