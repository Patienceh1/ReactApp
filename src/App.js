
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from "./components/ContactList"
import { v4 } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, {id: uuid(), ...contact}]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem (LOCAL_STORAGE_KEY));
    if (getContacts) {
      setContacts(getContacts);
    }
  }, []);
  return (
    <div className="container">
   <AddContact AddContactHandler={AddContactHandler} />
   <ContactList contacts={contacts} getContactId={deleteContact} />
    </div>
  );
}

export default App;
