import React from 'react'

const ContactUs = () => {
  return (
    <section className="contact">
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>

          <textarea cols={30} rows={10} placeholder="Your Message"></textarea>
          <button className="btn">Send Message</button>
        </form>
      </section>
  )
}

export default ContactUs