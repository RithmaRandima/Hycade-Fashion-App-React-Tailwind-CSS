import React from "react";
import Staff from "../components/Staff/Staff";
import MapSection from "../components/MapSection/MapSection";
import ContactForm from "../components/ContactForm/ContactForm";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUsHero from "../components/ContactUsHero/ContactUsHero";
import Placeholdertext from "../components/Placeholdertext/Placeholdertext";

const ContactUs = () => {
  return (
    <div className="overflow-x-hidden">
      <ContactUsHero />
      <Staff />
      <Placeholdertext />
      <MapSection />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
