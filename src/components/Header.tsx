"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  return (
    <header className="header">
      <Link href="#" className="logo">
        Portfolio
      </Link>
      {visible ? (
        <FaTimes
          id="menu-icon"
          className="icon-size"
          onClick={() => {
            ref.current!.style.display = "none";
            setVisible(false);
          }}
        />
      ) : (
        <IoMenu
          id="menu-icon"
          className=" icon-size"
          onClick={() => {
            ref.current!.style.display = "flex";
            setVisible(true);
          }}
        />
      )}

      <nav ref={ref} className="navbar">
        <Link href="/" className="active">
          Home
        </Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Portfolio</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
