import PropTypes from 'prop-types';
import { Item, List, Button} from './ContactList.style';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name }) => (
        <Item key={id}>
          <p>
            {name}
          </p>
          <Button
            type="button"
            onClick={() => onDeleteContact(id)}
          />
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