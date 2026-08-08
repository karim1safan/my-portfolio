import { useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import toast from "react-hot-toast";

import { BsWhatsapp } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FiLoader, FiSend } from "react-icons/fi";

export const contactInfo = [
  {
    id: 1,
    icon: MdMarkEmailUnread,
    title: "Email",
    contact: "karimmahoud122@gmail.com",
    url: "mailto:karimmahoud122@gmail.com",
  },
  {
    id: 2,
    icon: BsWhatsapp,
    title: "WhatsApp",
    contact: "+201556223681",
    url: "https://wa.me/201556223681",
  },
];

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        toast("Message sent successfully!", {
          icon: "\ud83d\udc4f",
          style: {
            borderRadius: "10px",
            background: "var(--toast-bg, #333)",
            color: "var(--toast-color, #fff)",
          },
        });
        event.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-surface-100 py-20 dark:bg-surface-dark-800">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle subtitle="Get In Touch" title="Contact Me" />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {contactInfo.map((contact) => {
              const Icon = contact.icon;
              return (
                <article
                  key={contact.id}
                  className="flex items-center gap-4 rounded-xl border border-surface-200 bg-white p-5 dark:border-surface-dark-500 dark:bg-surface-dark-700"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-500/10 dark:text-primary-400">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-surface-900 dark:text-surface-dark-50">
                      {contact.title}
                    </h4>
                    <p className="text-sm text-surface-600 dark:text-surface-dark-200">
                      {contact.contact}
                    </p>
                  </div>
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto shrink-0 rounded-lg bg-primary-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600"
                  >
                    Message
                  </a>
                </article>
              );
            })}
          </motion.div>

          <motion.form
            className="flex flex-col gap-4 rounded-2xl border border-surface-200 bg-white p-6 dark:border-surface-dark-500 dark:bg-surface-dark-700"
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name…"
              required
              className="rounded-xl border border-surface-200 bg-surface-50 px-4 py-3 text-sm text-surface-900 outline-none transition-colors focus:border-primary-500 dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:text-surface-dark-50 dark:focus:border-primary-400"
            />
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email…"
              required
              className="rounded-xl border border-surface-200 bg-surface-50 px-4 py-3 text-sm text-surface-900 outline-none transition-colors focus:border-primary-500 dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:text-surface-dark-50 dark:focus:border-primary-400"
            />
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message…"
              rows="5"
              required
              className="resize-none rounded-xl border border-surface-200 bg-surface-50 px-4 py-3 text-sm text-surface-900 outline-none transition-colors focus:border-primary-500 dark:border-surface-dark-500 dark:bg-surface-dark-800 dark:text-surface-dark-50 dark:focus:border-primary-400"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              {isSubmitting ? (
                <>
                  <FiLoader className="animate-spin" size={16} />
                  Sending…
                </>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
