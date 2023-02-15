import { Component } from "react";

class Form extends Component {
  state = {
    name: '',
  };

  handleChangeInput = (e) => {
    this.setState({name: e.currentTarget.value})
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  }

  reset = () => {
    this.setState({name: ''})
  }

  render() {
    return (
      <>
      <form onSubmit={this.formSubmit}>
        <label>Name
          <input
            onChange={this.handleChangeInput}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button>Add contact</button>
      </form>
      </>
    );
  }
}

export default Form;
