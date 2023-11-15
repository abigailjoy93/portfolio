// Include a message card with fields for name, email, and message
import { useState } from "react";
import "./style.css";

// Creating a contact form
function Form() {
  // creating fields for first and last name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // creating field for email
  const [email, setEmail] = useState("");
  // creating field for message
  const [message, setMessage] = useState("");

  // creating an event handler to register the input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // checking to ensure all fields are filled out
    function validateForm() {
      if (firstName.trim() === "" || lastName.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("This field is required!");
      }
    }

    // validating the form, alerting the user if a required field is left blank and setting the value with the name if not
    if (name === "firstName") {
      // alerting the user if they left a required field blank
      if (firstName.trim() === "") {
        validateForm();
      } else {
        // otherwise, it will give the value the corresponding name
        return setFirstName(value);
      }
    } else if (name === "lastName") {
      // alerting the user if they left a required field blank
      if (lastName.trim() === "") {
        validateForm();
      } else {
        // otherwise, it will give the value the corresponding name
        return setLastName(value);
      }
    } else if (name === "email") {
      // alerting the user if they left a required field blank
      if (email.trim() === "") {
        validateForm();
      } else {
        // otherwise, it will give the value the corresponding name
        return setEmail(value);
      }
    } else {
      // alerting the user if they left a required field blank
      if (message.trim() === "") {
        validateForm();
      } else {
        // otherwise, it will give the value the corresponding name
        return setMessage(value);
      }
    }
  };

  // prevents the page from reloading when the form is submiited
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  // Clear the inputs once submitted
  setFirstName("");
  setLastName("");
  setEmail("");
  setMessage("");

  return (
    <div className="container text-center">
      <h1>Please submit your contact information below if you would like to speak further.</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input value={firstName} name="firstName" onChange={handleInputChange} type="text" placeholder="First Name" />
        <input value={lastName} name="lastName" onChange={handleInputChange} type="text" placeholder="Last Name" />
        <input value={email} name="email" onChange={handleInputChange} type="text" placeholder="Email Address" />
        <textarea value={message} name="message" onChange={handleInputChange} type="text" placeholder="Please leave a brief message here."></textarea>
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
