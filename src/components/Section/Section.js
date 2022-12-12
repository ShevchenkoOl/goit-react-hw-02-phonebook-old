import { Title } from './Section.style';

export const Section = ({ title, children}) => (
  <Title>
  <div>{title}</div>
  {children}
</Title>
  );

  export default Section;