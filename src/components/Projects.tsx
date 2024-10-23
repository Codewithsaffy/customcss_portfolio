import Link from 'next/link'
import React from 'react'
import { FaArrowRightFromBracket } from 'react-icons/fa6'

const Project = () => {
  return (
    <section className="projects" id="projects">
        <h2 className="heading">
          Latest <span>Projects</span>
        </h2>
        <div className="projects-container">
          <div className="projects-box">
            <img  src="/portfolio1.jpg" alt="" />
            <div className="projects-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                placeat!
              </p>

              <Link href="#">
              <FaArrowRightFromBracket className="icon-h" />

              </Link>
            </div>
          </div>
          <div className="projects-box">
            <img  src="/portfolio2.jpg" alt="" />
            <div className="projects-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                placeat!
              </p>

              <Link href="#">
              <FaArrowRightFromBracket className="icon-h" />
              </Link>
            </div>
          </div>
          <div className="projects-box">
            <img  src="/portfolio3.jpg" alt="" />
            <div className="projects-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                placeat!
              </p>

              <Link href="#">
              <FaArrowRightFromBracket className="icon-h" />

              </Link>
            </div>
          </div>
          <div className="projects-box">
            <img  src="/portfolio4.jpg" alt="" />
            <div className="projects-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                placeat!
              </p>

              <Link href="#">
              <FaArrowRightFromBracket className="icon-h" />

              </Link>
            </div>
          </div>
          <div className="projects-box">
            <img  src="/portfolio5.jpg" alt="" />
            <div className="projects-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                placeat!
              </p>

              <Link href="#">
              <FaArrowRightFromBracket className="icon-h" />

              </Link>
            </div>
          </div>
          <div className="projects-box">
            <img  src="/portfolio6.jpg" alt="" />
            <div className="projects-layer">
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                placeat!
              </p>

              <Link href="#">
              <FaArrowRightFromBracket className="icon-h" />

              </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Project
