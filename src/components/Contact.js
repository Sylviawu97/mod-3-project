import React from 'react'
import "./Contact.css";
import { useState } from 'react';
import { MdOutlineEmail,MdOutlinePhone  } from 'react-icons/md';

const Contact = () => {

       const [message, setMessage] = useState(false); 
       const handleSubmit = (e) => {
              e.preventDefault();
              setMessage(true);
       
            };

       return (
              <div className="sec__one">
              <img className="Gif" src="https://househuntindia.com/wp-content/uploads/2021/07/contact.gif" alt=""/>
              <div>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Sylvia668899@gmail.com</h5>
            <a href="Sylvia668899@gmail.com" onSubmit={handleSubmit}>Send a message</a>
           
              <p></p><br />
            <MdOutlinePhone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>425-999-6892</h5></article>
        </div>
                     </div>      
</div>
</div>
       )
}

export default Contact
