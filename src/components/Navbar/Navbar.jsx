'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname()
    const links = [
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'Contact',
            path:'/contact'
        },
        {
            title:'Services',
            path:'/services'
        }
    ]
    return (
        <div className=' bg-gradient-to-r from-[#c8bdba] to-[#a4929b] fixed  w-full 5 '>
            <nav className='flex justify-around items-center my-center '>
                <h1 className='font-bold text-2xl '>Next <span className='text-red-500  italic'>Coffee</span></h1>
            <ul className='flex justify-around items-center space-x-3'>
                {
                    links.map((link)=> <Link  className={`${pathName === link.path && 'text-background italic font-semibold'}`} key={link.path} href={link.path}>{link.title}</Link>)
                }
            </ul>
            </nav>

        </div>
    );
};

export default Navbar;