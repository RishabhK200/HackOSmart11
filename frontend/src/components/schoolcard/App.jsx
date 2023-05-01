import React from "react";
import Card from "./Card";
import Contacts from "../contacts";

function createCard(Contacts) {
  return (
    <Card
      key={Contacts.id}
      name={Contacts.name}
      img={Contacts.imgURL}
      fees = {Contacts.fees}
      type = {Contacts.type}
      board = {Contacts.board}
      grade= {Contacts.grade}
      add = {Contacts.address}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">School List</h1>
      {Contacts.map(createCard)};
    </div>
  );
}

export default App;
