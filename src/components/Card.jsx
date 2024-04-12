import React, { useState } from 'react';
import { deleteDoc, doc } from 'firebase/firestore'; // Importing deleteDoc and doc functions from Firestore
import { db } from '../config/firebase'; // Importing the Firebase Firestore database instance
import UpdateContact from './UpdateContact'; // Importing the UpdateContact component
import { toast } from 'react-toastify'; // Importing toast notifications from react-toastify

const Card = ({ contact }) => {
  // State variables for managing the modal and contacts
  const [open, setOpen] = useState(false); // State variable to manage the modal open/close state

  // Function to open the modal
  const onOpen = () => {
    setOpen(true);
  };

  // Function to close the modal
  const onClose = () => {
    setOpen(false);
  };

  // Function to delete a contact
  const deleteContact = async (id) => {
    try {
      // Deleting the contact document from Firestore using its ID
      await deleteDoc(doc(db, "contacts", id));
      // Showing a success toast notification upon successful deletion
      toast.success("Contact deleted successfully");
    } catch (error) {
      // Handling any errors that occur during the deletion process
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <>
      {/* Card displaying contact information */}
      <div key={contact.id} className='bg-orange flex justify-between p-2 rounded-lg items-center'>
        <div className='flex gap-1'>
          <img src="/user-circle.svg" alt="" />
          <div className=''>
            <h2 className='font-medium'>{contact.name}</h2>
            <p className='font-medium'>{contact.mobile}</p>
            <p className='text-sm'>{contact.email}</p>
          </div>
        </div>
        {/* Buttons for editing and deleting the contact */}
        <div className='flex'>
          {/* Button to edit the contact, opens the UpdateContact modal */}
          <img src="/edit.svg" alt="" className='cursor-pointer' onClick={onOpen} />
          {/* Button to delete the contact */}
          <img src="/trash.svg" alt="" onClick={() => deleteContact(contact.id)} />
        </div>
      </div>
      {/* Modal for updating contact information */}
      <UpdateContact contact={contact} isEdit isOpen={open} onClose={onClose} />
    </>
  );
};

export default Card;
