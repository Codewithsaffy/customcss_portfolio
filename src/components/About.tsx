import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="about-img">
          <img  src="/about.png" alt="" />
        </div>

        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>Frontend Developer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
            quia voluptatem et quod voluptas dolorum culpa reprehenderit autem.
            Doloribus ipsum iure, ratione commodi eos ipsam neque quos dolor vel
            veniam recusandae alias repellat accusantium tempora corporis
            voluptate ea harum facilis nemo nesciunt nobis autem? Quaerat, quis?
          </p>
          <Link href="#" className="btn">
            Read more
          </Link>
        </div>
      </section>
  )
}

export default About