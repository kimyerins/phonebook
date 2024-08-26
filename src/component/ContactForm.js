import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    setName("");
    setPhoneNumber("");
  };
  return (
    <div>
      <form onSubmit={addContact}>
        <div className="wrap dfbox">
          <label>이름</label>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="wrap dfbox">
          <label>전화번호</label>
          <input
            type="number"
            placeholder="전화번호를 입력해주세요"
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={phoneNumber}
          />
        </div>
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default ContactForm;
