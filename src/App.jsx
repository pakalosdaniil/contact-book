import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import ContactList from './Components/ContactList/ContactList';
import AddForm from './Components/AddForm/AddForm';
import axios from 'axios';
import DetailsCard from './Components/DetailsCard/DetailsCard';
import EditForm from './Components/EditForm/EditForm';

const App = () => {
  const API = 'http://localhost:8000/contacts'
  const [contacts, setContacts] = useState ([])
  const [oneContact, setOneContact] = useState(null)

  // ? Create
  function addContact (newContact) {
    axios.post(API, newContact)
  }

  // ? Read
  async function getContact () {
    let result = await axios.get(API)
    setContacts(result.data)
  }
  
  // ? Delete
  async function deleteContact (id) {
    await axios.delete(`${API}/${id}`)
    getContact ()
  }
  
  // ? Update
    async function updateContact (id, editedContact) {
      await axios.patch(`${API}/${id}`, editedContact)
      getContact()
    }

  // ? Details
    async function getOneContact (id) {
      let result = await axios(`${API}/${id}`)
      setOneContact(result.data)
    }
  
  return (
    <div>
      <BrowserRouter> 
      <Header/>
        <Routes>
          <Route path="/" element={<ContactList 
          getContact={getContact}
          contacts={contacts}
          deleteContact={deleteContact}/>} />

          <Route path="/add" element={<AddForm addContact={addContact}/>} />

          <Route path="/edit/:id" element={<EditForm getOneContact={getOneContact} oneContact={oneContact}updateContact={updateContact}/>}/>

          <Route path="/showCard/:id" element={<DetailsCard getOneContact={getOneContact} oneContact={oneContact}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;