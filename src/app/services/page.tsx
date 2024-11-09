import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <section className="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>
      <div className="services-container">
        <div className="services-box">
          <i className="fa-solid fa-code"></i>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia non
            adipisci modi veritatis provident illo molestias, ipsa voluptates
            neque itaque.
          </p>
          <Link href="#" className="btn">
            Read More
          </Link>
        </div>
        <div className="services-box">
          <i className="fa-solid fa-paintbrush"></i>
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia non
            adipisci modi veritatis provident illo molestias, ipsa voluptates
            neque itaque.
          </p>
          <Link href="#" className="btn">
            Read More
          </Link>
        </div>
        <div className="services-box">
          <i className="fa-solid fa-chart-simple"></i>
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia non
            adipisci modi veritatis provident illo molestias, ipsa voluptates
            neque itaque.
          </p>
          <Link href="#" className="btn">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
