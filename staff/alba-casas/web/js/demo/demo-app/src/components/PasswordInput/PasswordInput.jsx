import React from "react";
import { useState } from "react";
import Feedback from "../Feedback/Feedback";
import "./PasswordInput.css";

const CAPS_CHAR = 20;

const PasswordInput = ({
  passwordFeedback,
  id,
  name = "password",
  className,
}) => {
  const [capsLoock, setCapsLoock] = useState();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("🙈");

  const changeIcon = () => {
    if (type === "password") {
      setType("tex");
      setIcon("🐵");
    } else {
      setType("password");
      setIcon("🙈");
    }
  };

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
      <div className={`password ${passwordFeedback && "password--error"}`}>
        <input
          className={`password__input ${className}`}
          type={type}
          name={name}
          id={id}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
        />
        <span onClick={changeIcon} className="password__icon">
          {icon}
        </span>
      </div>
      {passwordFeedback && (
        <Feedback message={passwordFeedback} level="error" version="mini" />
      )}
      <p className="password-input__text-capsLock">{capsLoock}</p>
    </>
  );
};

export default PasswordInput;
