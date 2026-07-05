import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LanguageContext";

const ContactForm = () => {
  const { t } = useLang();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b334inm",
        "template_cr7hg9p",
        form.current,
        "lN4wz2d-M5tbz8CkV",
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // Clear the form
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.log(error);
        },
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          {t.bookFreeTrial || "Book a Free Trial"}
        </h2>
        {/* IMPORTANT: Add ref={form} and onSubmit={sendEmail} */}
        <form ref={form} onSubmit={sendEmail} className="grid gap-4">
          <input
            type="text"
            name="name" // Ensure 'name' matches your EmailJS template placeholders
            placeholder={t.formName}
            className="p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-700 outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t.formEmail}
            className="p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-700 outline-none transition"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder={t.formPhoneNumber}
            className="p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-700 outline-none transition"
          />
          <textarea
            name="message"
            rows="4"
            placeholder={t.formGoal}
            className="p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-red-700 outline-none transition"
          ></textarea>
          <button
            type="submit"
            className="bg-red-700 text-white font-bold py-4 rounded-full hover:bg-red-800 transition shadow-md"
          >
            {t.formSubmit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
