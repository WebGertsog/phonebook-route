import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import toast, { Toaster } from "react-hot-toast";
import { FirstTitle, SecondTitle } from "./components/Titles";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { GlobalStyle } from "./components/Global.styled";
import { Container, Wraper } from "./App.styled.jsx";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");
  const style = {
    borderRadius: "10px",
    background: "#00308F",
    color: "#FFF",
  };

  // USE EFFECT
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // ADD NEW CONTACT
  const addNewContact = (name, number) => {
    const duplicateName = checkDuplicateName(name);
    if (duplicateName) return;
    setContacts([...contacts, { id: nanoid(), name, number }]);
  };

  // CHECK DUPLICATE NAME
  const checkDuplicateName = (newName) => {
    const isDuplicate = contacts.find(
      (contact) => contact.name.toLowerCase() === newName.toLowerCase()
    );
    if (isDuplicate)
      toast.error(`"${newName}" is already in contacts!`, { style });
    return isDuplicate;
  };

  //DELETE CONTACT
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  //CHANGE FILTER
  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  // DISPLAY SEARCHED CONTACTS
  const displaySearchedContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const searchedContacts = displaySearchedContacts();
  return (
    <>
      <GlobalStyle />
      <Container>
        <Toaster position="top-right" />
        <Wraper>
          <FirstTitle />
          <ContactForm onAddNewContact={addNewContact} />
        </Wraper>
        <Wraper>
          <SecondTitle />
          <Filter onChangeFilter={changeFilter} />
          <ContactList
            contacts={searchedContacts}
            onDeleteContact={deleteContact}
          />
        </Wraper>
      </Container>
    </>
  );
};

export default App;
