import React, { useRef } from "react";

const ContactForm = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fnjxw3b",
        "template_21qx3nv",
        form.current,
        "oxXzwTIDXRSXDdIpY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Your message was not sent, please retry or contact me via Instagram (link below)."
          );
        }
      );
  };

  return (
    <div>
      <p className="text-2xl font-medium text-center">Get in touch</p>
      <form
        className="flex justify-center w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <div
          className="bg-[#0e0e0e] mb-11 rounded-xl py-4 px-4 self-center gap-5 grid
        w-[80%] max-w-[600px] grid-cols-1"
        >
          <input
            className="w-full bg-[#222222] rounded-md p-2"
            placeholder="Your name"
            type="text"
            name="from_name"
            required
          />
          <input
            className="w-full bg-[#222222] rounded-md p-2"
            placeholder="Your email"
            type="email"
            name="email_id"
            required
          />
          <textarea
            className="w-full h-52 bg-[#222222] rounded-md p-2"
            placeholder="Your message"
            name="message"
            required
          />
          <div className="flex justify-end w-full">
            <button className="w-[150px] h-fit py-2 bg-[#333333] rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
