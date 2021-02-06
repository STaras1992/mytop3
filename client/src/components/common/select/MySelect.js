import Select from 'react-select';
import PropTypes from 'prop-types';
import selectStyle from '../../../styles/selectStyles.js';
import labelStyle from '../../../styles/labelStyles.js';

const MySelect = ({ value, label, name, options, onChange }) => {
  return (
    <>
      {
        <label htmlFor={name} style={labelStyle}>
          {label}
        </label>
      }
      <Select
        name={name}
        isClearable={false}
        defaultValue={options[0].value}
        styles={selectStyle}
        value={value}
        options={options}
        onChange={onChange}
      ></Select>
    </>
  );
};

MySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default MySelect;
