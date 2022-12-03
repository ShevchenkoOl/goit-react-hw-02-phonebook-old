import { Title } from "components/Phonebook/Phonebook.style";

export const Section = ({ title, children}) => (
  <Title>
  <div>{title}</div>
  {children}
</Title>
  );