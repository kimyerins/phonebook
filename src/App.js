import "./App.css";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
import SearchBox from "./component/SearchBox";

function App() {
  // 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다.
  // 2. 리스트에 유저이름과 전화번호를 추가할 수 있다.
  // 3. 리스트에 아이템이 몇개있는지 보인다.
  // 4. 사용자가 유저를 이름검색으로 찾을 수 있다.
  return (
    <div className="full_container">
      <h1 className="title">PHONE BOOK</h1>
      <div className="container dfbox">
        <div className="left">
          <ContactForm />
        </div>
        <div className="right">
          <ContactList />
        </div>
      </div>
    </div>
  );
}

export default App;
