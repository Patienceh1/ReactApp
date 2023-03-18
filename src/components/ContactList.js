import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
console.log(props);

const deleteContact = (id) => {
    props.getContactId(id);
}
const renderContactList = props.contacts.map((contact) => {
    return (
        <ContactCard contact={contact} clickHandler={deleteContact} key={contact.id}/>
    )
})
}

export default ContactList;