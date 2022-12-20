import { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Label } from './ContactForm.style';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
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
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
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
