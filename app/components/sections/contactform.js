import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import FadeContent from "@/components/FadeContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactForm = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

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
          setLoading(false);
          setOpen(false);
        },
        (error) => {
          console.log(error.text);
          alert(
            "Your message was not sent, please retry or contact me via Instagram (link below)."
          );
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex justify-center py-20">
      <FadeContent blur>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-xl px-8 py-6 rounded-full border-neutral-700 bg-black/50 hover:bg-neutral-800 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-[#0e0e0e] border-neutral-800 text-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-medium">Contact Me</DialogTitle>
              <DialogDescription className="text-neutral-400">
                Send me a message and I'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="grid gap-4 py-4"
            >
              <div className="grid gap-2">
                <Input
                  id="name"
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="bg-[#222222] border-none text-white placeholder:text-neutral-500"
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="email"
                  name="email_id"
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-[#222222] border-none text-white placeholder:text-neutral-500"
                />
              </div>
              <div className="grid gap-2">
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                  className="min-h-[150px] bg-[#222222] border-none text-white placeholder:text-neutral-500 resize-none"
                />
              </div>
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-black hover:bg-neutral-200"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </FadeContent>
    </div>
  );
};

export default ContactForm;
