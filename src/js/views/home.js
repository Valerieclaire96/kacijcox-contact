import React, { useState, useContext, useEffect } from "react";
import { Context } from '../store/appContext';
import { useNavigate } from "react-router";
import ContactCard from '../component/contactcard';

// Use the ContactCard component within the Home component
export const Home = () => {
  const { store, actions } = useContext(Context);
  const [contacts, setContacts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    async function getContacts(){
      if(store.contacts.length < 1) {
        await actions.addContact("Valerie", "123 Main Street", 1231231234, "Valerie@gmail.com")
      }
      await actions.getContacts()
      setContacts(store.contacts)
    }
    getContacts()
  }, []); // Add an empty dependency array if you want it to run only once on mount
  const handleClick = () => {
    navigate("/addcontact")
  }
  return (
    <div>
      {/* You can use the ContactCard component here */}
      {contacts?.map((contact) => (
        <div>
        {console.log(contact)}
        <ContactCard name={contact.full_name}
          phone={contact.phone}
          email={contact.email}
          address={contact.address}
          contactid={contact.contact_id} />
          </div>
      ))}
      {/* Rest of your Home component code */}
      <button className="btn btn-success" onClick={() => handleClick}>add contact</button>
    </div>

  );
};
