import React from "react";
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className='bg-yellow-400'>
      <nav className='flex justify-between w-5/6 mx-auto py-4'>
        <div className="flex items-center"><img src={logo} alt="logo" className="logo h-10 w-15" /><span className='text-3xl text-slate-800 font-bold'>MovieDB</span></div>

        {/* <h3 style={{ fontFamily:"Anton SC" }} className='text-3xl text-slate-800'>Gallery</h3> */}
        <ul className='flex items-center gap-8 text-slate-800 text-lg font-medium'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Gallery</NavLink></li>
          <li><NavLink to ="/somepage">
          <i class="fa fa-bell"></i><span className="relative rounded-full bg-red-600 text-white -top-[10px] -left-[4px] text-xs p-[4px]">69</span> 
          </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
