import React from 'react';
import Logo from '../../../assets/logo.png'
import NavMenu from './NavMenu';
import { ShoppingCart } from 'lucide-react';

const NavBar = ({ navList, carts }) => {
    return (
        <div className="bg-base-100 shadow-md flex sticky top-0 z-50">
            <div className='navbar  container mx-auto p-5'>
                <div className="navbar-start space-x-2">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navList.map((item, index) => <NavMenu key={index} item={item} />)}

                        </ul>
                    </div>
                    <a><img className='hover:cursor-pointer' src={Logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        {navList.map((item, index) => <NavMenu
                            key={index}
                            item={item} />)}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <div className='relative'>
                        <ShoppingCart className='hover:cursor-pointer'/>

                        <div className='bg-red-500 w-4 h-4 rounded-full flex justify-center items-center p-2 absolute -top-1 -right-2'><span className='text-[14px]'>{carts.length}</span></div>
                    </div>

                    <h3 className='hover:cursor-pointer'>Login</h3>
                    <a className="btn btn-primary rounded-full hover:cursor-pointer">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;