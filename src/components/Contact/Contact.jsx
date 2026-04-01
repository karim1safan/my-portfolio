import React from "react";
import { contactInfo } from "./contactInfo";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./contact.css";
import { motion } from "motion/react";
import {
  itemMotion,
  sectionContentMotion,
  sectionMotion,
} from "../../utils/sectionMotion";
import toast from "react-hot-toast";

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "58469ebd-1e08-43e9-8c8c-aa1c4db87ffb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast('Message sent successfully!',
        {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (  
    <motion.section id="contact" className="contact" {...sectionMotion}>
      <SectionTitle subtitle="Get In Touch" title="Contact Me" />
      <motion.div
        className="container contact-container"
        variants={sectionContentMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="contact-options" variants={itemMotion}>
          {contactInfo.map((contact) => {
            const Icon = contact.icon;
            return (
              <article className="contact-option" key={contact.id}>
                <Icon className="contact-option-icon" />
                <h4>{contact.title}</h4>
                <h5>{contact.contact}</h5>
                <a href={contact.url} target="_blank" rel="noreferrer">
                  Send Message
                </a>
              </article>
            );
          })}
        </motion.div>

        <motion.form
          className="contact-form"
          action=""
          onSubmit={onSubmit}
          variants={itemMotion}
        >
          <input type="text" name="name" placeholder="Full Name..." required />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            rows="7"
            required
          />
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
