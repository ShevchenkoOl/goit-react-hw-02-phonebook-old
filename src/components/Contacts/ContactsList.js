
import { Contacts } from './Contacts';
// import { List } from './StickerList.styled';

export const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          <Contacts contact={item} />
        </li>
      ))}
    </ul>
  );
};