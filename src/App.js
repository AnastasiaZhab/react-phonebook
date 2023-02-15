import "./App.css";
import { Component } from "react";
import Phonebook from './components/Phonebook'

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  render() {
    return (
      <div className="App">
        <Phonebook />
      </div>
    );
  }
}

export default App;
