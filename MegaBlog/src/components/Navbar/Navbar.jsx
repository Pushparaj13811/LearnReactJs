import React from 'react'
import { NavLink, Link } from "react-router-dom"

function Navbar() {
    return (
        <div className='bg-gray-200 h-20 w-full border-b-2 border-black sticky top-0 z-50 align-middle my-auto text-black ' >
            <div className='flex justify-between mx-6 md:mx-12 lg:mx-28 py-6'>
                <div className='my-auto'>
                    logo
                </div>
                <div className='hidden lg:flex'>
                    <ul>
                        <li className='inline mx-10'>
                            <NavLink to='/' >Home</NavLink>
                        </li>
                        <li className='inline mx-10'>
                            <NavLink to='/blogs' >Blogs</NavLink>
                        </li>
                        <li className='inline mx-10'>
                            <NavLink to='/about' >About</NavLink>
                        </li>
                        <li className='inline mx-10'>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>

                <div className='flex justify-between space-x-10 lg:space-x-20'>
                    <button>Login</button>
                    <button>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
