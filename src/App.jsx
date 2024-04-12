import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; // Importing the Navbar component
import Search from './components/Search'; // Importing the Search component
import { collection, onSnapshot } from 'firebase/firestore'; // Importing Firestore functions
import { db } from './config/firebase'; // Importing the Firebase Firestore database instance
import Card from './components/Card'; // Importing the Card component
import UpdateContact from './components/UpdateContact'; // Importing the UpdateContact component
import { ToastContainer } from 'react-toastify'; // Importing toast container from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Importing styles for react-toastify

const App = () => {
  // State variables for contacts and modal visibility
  const [contacts, setContacts] = useState([]); // State for storing contacts
  const [open, setOpen] = useState(false); // State for controlling modal visibility

  // Function to fetch contacts from Firestore
  const fetchContacts = async () => {
    try {
      const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactLists);
      });
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  // UseEffect hook to fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  // Function to filter contacts based on search input value
  const filterContacts = async (value) => {
    try {
      const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const filteredContacts = contactLists.filter((contact) =>
          contact.name.toLowerCase().includes(value.toLowerCase())
        );
        setContacts(filteredContacts);
      });
    } catch (error) {
      console.error("Error filtering contacts:", error);
    }
  };

  return (
    <>
      {/* Main application layout */}
      <div className='max-w-[370-px] mx-auto px-4'>
        {/* Navbar component */}
        <Navbar />
        {/* Search component with props */}
        <Search onOpen={() => setOpen(true)} onInputChange={filterContacts} />
        <div className='mt-4 gap-3 flex flex-col'>
          {/* Mapping through contacts and rendering Card component for each */}
          {contacts.map((contact) => (
            <Card key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      {/* UpdateContact modal component with props */}
      <UpdateContact isOpen={open} onClose={() => setOpen(false)} />
      {/* Toast notification container */}
      <ToastContainer />
    </>
  );
};

export default App;
