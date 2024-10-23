import Link from 'next/link'
import React from 'react'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2023 by Yousuf | All Rights Reserved</p>
        </div>
        <div className="footer-iconTop">
          <Link href="#home">
          <FaArrowAltCircleUp className="icon-h" />

          </Link>
        </div>
      </footer>
  )
}

export default Footer