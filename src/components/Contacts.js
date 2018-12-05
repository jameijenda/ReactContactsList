import React, { Component } from "react";
import Contact from "./Contact.js";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555 - 555 - 5555"
      },
      {
        id: 2,
        name: "Karen Page",
        email: "jdoe@gmail.com",
        phone: "333 - 333 - 3333"
      },
      {
        id: 3,
        name: "Jerry Williams",
        email: "jwilliams@gmail.com",
        phone: "111 - 111 - 1111"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
