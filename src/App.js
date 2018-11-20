import React from "react";
import Contact from "./components/Contacts";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contacts list" />
        <Contact name="John" email="jdoe@gmail.com" phone="555-555-5555" />
        <Contact name="Karen" email="kdoe@gmail.com" phone="333-333-3333" />
      </div>
    );
  }
}

export default App;
