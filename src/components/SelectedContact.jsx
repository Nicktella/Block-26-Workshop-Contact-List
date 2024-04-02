import React, { useState, useEffect } from "react";
import "./SelectedContact.css"; // Import CSS file for styling

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        async function fetchContact() {
            try {
                const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const data = await response.json();
                setContact(data);
                console.log("Contact:", data);
            } catch (error) {
                console.error("Error fetching contact:", error);
            }
        }

        fetchContact();
    }, [selectedContactId]);

    return (
        <div className="selected-contact">
            <h2>Contact Details</h2>
            {contact ? (
                <>
                    <p><strong>Name:</strong> {contact.name}</p>
                    <p><strong>Email:</strong> {contact.email}</p>
                    <p><strong>Phone:</strong> {contact.phone}</p>
                    {/* Add additional contact details here */}
                    <button onClick={() => setSelectedContactId(null)}>Go Back</button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
