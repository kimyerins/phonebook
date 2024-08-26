import React from "react";

const ContactItem = ({ item }) => {
  return (
    <div>
      <div className="contactItem_wrap">
        <div className="dfbox">
          <div className="imgbox">
            <img src="people.png" alt="img" />
          </div>
          <div className="txtbox">
            <h3>{item.name}</h3>
            <p>{item.phoneNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
