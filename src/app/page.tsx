import React from 'react'
import Link from "next/link"
import {  FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="home">
    <div className="home-content">
      <h3>Hello, It&apos; s Me</h3>
      <h1>Yousuf Khan</h1>
      <h3>
        And I&apos;m Link <span id="element"></span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
        dignissimos? Lorem ipsum dolor sit amet.
      </p>
      <div className="social-media">
        <Link href="#">
        <FaFacebookF />
        </Link>
        <Link href="#">
         <FaTwitter/>
        </Link>
        <Link href="#">
        <FaInstagram/>
        </Link>
        <Link href="#">
        <FaLinkedin/>
        </Link>
      </div>
      <Link href="#" className="btn">
        Download CV
      </Link>
    </div>
    <div className="home-img">
      <img  src="/home.png" alt="" />
    </div>
  </section>
  )
}

export default Hero