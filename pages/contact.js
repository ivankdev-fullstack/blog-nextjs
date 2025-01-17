import Head from "next/head";
import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;
