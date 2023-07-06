import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

const Header = () => {
  
  const [ showNav, setShowNav ] = useState(false);

  const showMenu = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="bg-[blue]">
      <div className="w-[80%] py-5 mx-auto md:flex items-center justify-between ">
        <img src="https://img.innoloft.com/logo.svg" className='w-[150px]'/>
        <div className={`md:flex items-center md:w-[80%] justify-between bg-[blue] w-full md:static absolute left-0 md:top-[0px]  md:p-0 p-3  ${showNav ? 'top-[68px]' : 'top-[-100px]'}`}>
          <input type="text" className='md:w-[57%] w-full' />
          <ul className="flex md:flex-row flex-col items-center text-[white] md:justify-between md:w-[20%]">
            <Link to="/">
              <li onClick={showMenu}>Main Page</li> 
            </Link>
            <Link to="/product">
              <li onClick={showMenu}>Product</li>
            </Link>
          </ul>
        </div>
        {
          showNav ?
          <GiCrossMark className="text-[white] text-[25px] md:hidden absolute right-4 top-5" onClick={showMenu}/>
          :
          <GiHamburgerMenu className="text-[white] text-[25px] md:hidden absolute right-4 top-5" onClick={showMenu}/>
        }
      </div>
    </div>
  )
}

export default Header
