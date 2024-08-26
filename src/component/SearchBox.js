import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const contactSearch = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_NAME", payload: { search } });
  };
  return (
    <div>
      <form onSubmit={contactSearch}>
        <div className="search_wrap">
          <div className="dfbox">
            <input
              type="text"
              placeholder="이름을 입력해주세요"
              onChange={(item) => setSearch(item.target.value)}
            />
            <button type="submit">찾기</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBox;
