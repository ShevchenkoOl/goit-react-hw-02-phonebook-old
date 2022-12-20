import PropTypes from 'prop-types';
import { Button, Item, List } from './ContactList.style';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <Button
            type="button"
            onClick={() => onDeleteContact(id)}>DELETE</Button>
        </Item>
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
