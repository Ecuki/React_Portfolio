import React from "react";
import Form from "../Form";
import "./Contact.scss";

function Contact() {
  const contacts = [
    {
      type: "email",
      value: "jeziorski.emil@gmail.com"
    },
    {
      type: "phone",
      value: "726 558 563"
    },
    {
      type: "gitHub",
      value: "github.com/ecuki",
      link: "https://github.com/Ecuki"
    },
    {
      type: "facebook",
      value: "I do not use"
    }
  ];

  return (
    <div className="contact-site">
      <div className="contact__section">
        <h1 className="contact__title">contact</h1>
        <ContactsInfo contacts={contacts} />
      </div>
      <Form />
    </div>
  );
}

function ContactsInfo({ contacts }) {
  return contacts.map(contact => (
    <div key={contact.type}>
      <h2 className="contact__subtitle">{contact.type}</h2>
      {contact.link ? (
        <a className="contact__text" href={contact.link}>
          {contact.value}
        </a>
      ) : (
        <p className="contact__text">{contact.value}</p>
      )}
    </div>
  ));
}

export default Contact;
