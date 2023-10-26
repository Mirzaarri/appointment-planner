import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  currentPhone,
  setCurrentPhone,
  currentEmail,
  setCurrentEmail,
  handleSubmit,
  isDuplicate,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          required
        />
        {isDuplicate && <p className="error">Name is a duplicate</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={currentPhone}
          onChange={(e) => setCurrentPhone(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={currentEmail}
          onChange={(e) => setCurrentEmail(e.target.value)}
          required
        />
      </div>

      <button type="submit">Add Contact</button>
    </form>
  );
};
