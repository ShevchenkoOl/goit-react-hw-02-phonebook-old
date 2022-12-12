import PropTypes from 'prop-types';
import { Label, Input } from './Filter.style';

function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        onChange={onChange}
      />
    </Label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;