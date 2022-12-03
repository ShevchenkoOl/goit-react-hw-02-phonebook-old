
// import PropTypes from 'prop-types'
import {Button, 
        Form,
        Field,
        Input
            } from "./Phonebook.style";

export const Phonebook = () => (
    <div>
      <Form>
        <Field>
   Name:
   <Input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<Button type="button">Add contact</Button>
</Field>
</Form>
    </div>
  );



