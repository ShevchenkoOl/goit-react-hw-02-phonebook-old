import { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import { Button, Form, Input, Label } from './ContactForm.stayl';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
             onChange={this.handleChange}
             placeholder="Ivan Ivanov"
          />
        </Label>
        <Label>
          Number
          <Input
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            placeholder="111-11-11"
          />
        </Label>
        <Button type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;