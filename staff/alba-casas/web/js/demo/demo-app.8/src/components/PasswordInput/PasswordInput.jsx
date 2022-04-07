import React from "react";
import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import "./PasswordInput.css";

const CAPS_CHAR = 20;

const PasswordInput = ({ passwordFeedback, id, name = "password" }) => {
  const [capsLoock, setCapsLoock] = useState();

  const handleKeyDown = (event) => {
    if (event.keyCode === CAPS_CHAR) {
      setCapsLoock("WARNING! Caps lock is ON.");
    }
  };

  const handleKeyUp = (event) => {
    if (event.keyCode === CAPS_CHAR) {
      setCapsLoock(null);
    }
  };
  return (
    <>
      <input
        className={`password-input ${
          passwordFeedback ? "password-input--error" : ""
        }`}
        type="password"
        name={name}
        id={id}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
      />
      {passwordFeedback && (
        <Feedback message={passwordFeedback} level="error" version="mini" />
      )}
      <p className="password-input__text-capsLock">{capsLoock}</p>
    </>
  );
};

export default PasswordInput;
