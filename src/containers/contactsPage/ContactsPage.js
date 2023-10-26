import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // Define state variables for contact info and duplicate check
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNameDuplicate = contacts.some(contact => contact.name === currentName);

    if (!isNameDuplicate) {
      addContact(currentName, currentPhone, currentEmail);
      setCurrentName("");
      setCurrentPhone("");
      setCurrentEmail("");
      setIsDuplicate(false);
    } else {
      setIsDuplicate(true);
    }
  };

  useEffect(() => {
    setIsDuplicate(false);
  }, [currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          currentName={currentName}
          setCurrentName={setCurrentName}
          currentPhone={currentPhone}
          setCurrentPhone={setCurrentPhone}
          currentEmail={currentEmail}
          setCurrentEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
