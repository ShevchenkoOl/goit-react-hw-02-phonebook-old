
//import PropTypes from 'prop-types';
//import { nanoid } from 'nanoid';
import { Component } from "react";
import { ContactsList } from "./Contacts/ContactsList";
import { Phonebook } from "./Phonebook/Phonebook";
import { Container } from "./Phonebook/Phonebook.style";
import { Section } from "./Section/Section";
// import {Contacts} from "./Contacts/Contacts"

export class App extends Component () {
  // static defaultProps = {
  //   initialContact: [],
  // }
    
    state = {
      contacts: [],
      name: ''
    }
  render (){

  
  return (
      <Container>
<Section title="Phonebook">
          <Phonebook/>
</Section>
<Section title="Contacts">
<ContactsList items={this.state.contacts}/>
  
</Section>
    </Container>
  );
};
}

  // App.protoType = {
  //   options: PropTypes.oneOf(['good', 'neutral', 'bad']),
  
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  //   positivePercentage: PropTypes.number.isRequired,
  //   total: PropTypes.number.isRequired,
  //   title: PropTypes.string.isRequired,
  //    };