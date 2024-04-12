import React from 'react';
import Modaal from './Modaal'; // Importing the Modaal component
import { ErrorMessage, Field, Form, Formik } from 'formik'; // Importing Formik components
import { collection, doc, addDoc, updateDoc } from 'firebase/firestore'; // Importing Firestore functions
import { db } from "../config/firebase"; // Importing the Firebase Firestore database instance
import { toast } from "react-toastify"; // Importing toast notifications from react-toastify
import * as Yup from "yup"; // Importing Yup for form validation

// Validation schema for contact form
const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.number().required("Mobile is required"),
    email: Yup.string().required("Email is required").email("Invalid email format"),
});

// UpdateContact component
const UpdateContact = ({ isOpen, onClose, isEdit, contact }) => {
    
    // Function to add a new contact
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact); // Adding contact to Firestore
            onClose(); // Closing the modal
            toast.success("Contact Added Successfully"); // Showing success toast
        } catch (error) {
            console.error("Error adding contact:", error);
        }
    };
    
    // Function to edit an existing contact
    const editContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact); // Updating contact in Firestore
            onClose(); // Closing the modal
            toast.success("Contact Updated Successfully"); // Showing success toast
        } catch (error) {
            console.error("Error editing contact:", error);
        }
    };
    
    return (
        <div>
            {/* Modal for updating contact information */}
            <Modaal isOpen={isOpen} onClose={onClose}>
                {/* Formik form for contact details */}
                <Formik
                    validationSchema={contactSchemaValidation} // Validation schema for form fields
                    initialValues={
                        isEdit ? { // If editing an existing contact, prefill form with contact details
                            name: contact.name,
                            mobile: contact.mobile,
                            email: contact.email,
                        } : { // Otherwise, initialize form with empty values
                            name: "",
                            mobile: "",
                            email: "",
                        }
                    }
                    onSubmit={(values) => {
                        // Submit handler for form submission
                        isEdit ? editContact(values, contact.id) : addContact(values);
                    }}
                >
                    <Form className='flex flex-col gap-4 '>
                        {/* Form fields for contact details */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="border h-10" />
                            {/* Error message for name field */}
                            <div className='text-xs text-red-600'>
                                <ErrorMessage name="name" />
                            </div>
                            <label htmlFor="mobile">Mobile No:</label>
                            <Field name="mobile" className="border h-10" />
                            {/* Error message for mobile field */}
                            <div className='text-xs text-red-600'>
                                <ErrorMessage name="mobile" />
                            </div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" className="border h-10" />
                            {/* Error message for email field */}
                            <div className='text-xs text-red-600'>
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        {/* Button for submitting the form */}
                        <button className='self-end bg-orange px-3 border py-1.5' type="submit">{isEdit ? "Edit" : "Add"} Contact</button>
                    </Form>
                </Formik>
            </Modaal>
        </div>
    );
};

export default UpdateContact;
