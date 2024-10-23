import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="header">
        <Link href="#" className="logo">
          Portfolio
        </Link>
        <i className="bx bx-menu" id="menu-icon"></i>

        <nav className="navbar">
          <Link href="#home" className="active">
            Home
          </Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#projects">Portfolio</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>
  )
}

export default Header