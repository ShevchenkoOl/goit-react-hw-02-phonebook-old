// import { Component } from 'react';
// import PropTypes from 'prop-types';

import { Phonebook } from "./Phonebook/Phonebook";
import { Container } from "./Phonebook/Phonebook.style";
import { Section } from "./Section/Section";
// import {Contacts} from "./Contacts/Contacts"

export const App = () => {
  return (
      <Container>
<Section title="Phonebook">
          <Phonebook/>
</Section>
<Section title="Contacts">
  {/* <Contacts/> */}
</Section>
    </Container>
  );
};


  // App.protoType = {
  //   options: PropTypes.oneOf(['good', 'neutral', 'bad']),
  
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  //   positivePercentage: PropTypes.number.isRequired,
  //   total: PropTypes.number.isRequired,
  //   title: PropTypes.string.isRequired,
  //    };