import React from 'react'
import { BsJustify}from 'react-icons/bs'
import './header.css'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
            <h4>Dashboard</h4>
        </div>
        <div className='header-right'>   
        </div>
    </header>
  )
}

export default Header