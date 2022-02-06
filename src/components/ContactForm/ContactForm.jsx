import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Label, Input, FormBtn } from "./ContactForm.styled";

const { nameID, numberID } = nanoid();

const ContactForm = ({ onAddNewContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddNewContact(name, number);
    reset();
  };

  // Reset
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor={nameID}>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(event) => setName(event.target.value)}
          id={nameID}
        />
      </Label>
      <Label htmlFor={numberID}>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(event) => setNumber(event.target.value)}
          id={numberID}
        />
      </Label>
      <FormBtn>Add contact</FormBtn>
    </form>
  );
};

export default ContactForm;
