//import { CardWrapper, Image, Label } from './Sticker.styled';

export const Contacts = ({ contact: { contacts, name }}) => {
  return (
    <div>
      <div> {contacts}</div>
      <div>{name}</div>
      {/* <button onClick={() => onDelete(id)}>Удалить свинью</button> */}
    </div>
  );
};