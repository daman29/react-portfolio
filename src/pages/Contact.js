import React, {  useState } from "react";
import { ContentContainer } from "../styles/PageStyle";
import {
  SButton,
  SForm,
  SFormControl,
  SFormTitle,
  SInput,
  SLabel,
  SMessage,
} from "../styles/FormStyle";

import { validateEmail } from "../utils/helpers";

export function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === "email") {
      setEmail(inputValue);
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
      }else{
        setErrorMessage("")
      }
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }
    alert(`Form Submitted`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <ContentContainer>
      <SFormTitle>Contact Me:</SFormTitle>

      <SForm>
        <SFormControl>
          <SLabel>Name:</SLabel>
          <SInput
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
          />
        </SFormControl>
        <SFormControl>
          <SLabel>Email:</SLabel>
          <SInput
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          />
        </SFormControl>
        <SFormControl>
          <SLabel>Message:</SLabel>
          <SMessage
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
          />
        </SFormControl>
        <SButton type="button" onClick={handleFormSubmit}>
          Submit
        </SButton>
      </SForm>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </ContentContainer>
  );
}
