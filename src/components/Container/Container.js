import PropTypes from 'prop-types';
import { Section } from './Container.style';

function Container({ children }) {
  return <Section>{children}</Section>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
