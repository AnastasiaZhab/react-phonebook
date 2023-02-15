import Form from "../Form";
import { Component } from "react";
import ContactList from '../ContactList'

class Phonebook extends Component {
  state = {
    contacts: [],
  };

  createContact = (data) => {
    const {contacts} = this.state;

    if (contacts.find(({name}) => name.trim().toLowerCase() === data.name.toLowerCase()))
    {
        return (alert `${data.name} is already in contacts`)
    }

    this.setState((prevState) => ({
        contacts: [...prevState.contacts, data]
    }))
    
    console.log(data);
  };


  render() {
    return (
      <>
        <Form onSubmit={this.createContact} />
        <ContactList list={this.state.contacts}/>
      </>
    );
  }
}

export default Phonebook;
