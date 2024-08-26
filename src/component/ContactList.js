import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, search } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (search !== "") {
      let list = contactList.filter((item) => item.name.includes(search));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [contactList, search]);
  return (
    <div>
      <SearchBox />
      <p>총 {filteredList.length}명</p>
      {filteredList.map((item, index) => (
        <ContactItem item={item} key={index} />
      ))}
    </div>
  );
};

export default ContactList;
