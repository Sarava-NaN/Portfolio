import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bniyqhc",
      "template_uxyj7wo",
      form.current,
      "MgY2the8gjOtMCrTQ"
    );
    setTimeout(() => {
      e.target.reset();
    }, 3000);
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>saravanan.techjr@gmail.com</h5>
            <a href="mailto:saravanan.techjr@gmail.com" target="_blank">
              send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Sarava-NaN</h5>
            <a
              href="https://www.messenger.com/t/3729173317175798"
              target="_blank"
            >
              send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 9003417858</h5>
            <a href="https://wa.me/919003417858" target="_blank">
              send a message
            </a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
