import Select from 'react-select/async';
import PropTypes from 'prop-types';
import selectStyle from '../../../styles/selectAutocompleteStyles.js';
import labelStyle from '../../../styles/labelStyles.js';

const AutocompleteSelect = ({ value, label = null, name, loadOptions, onChange, ...props }) => {
  return (
    <>
      {label && (
        <label htmlFor={name} style={labelStyle}>
          {label}
        </label>
      )}
      <Select
        name={name}
        styles={selectStyle}
        value={value}
        loadOptions={loadOptions}
        onChange={onChange}
        {...props}
      ></Select>
    </>
  );
};

AutocompleteSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  loadOptions: PropTypes.func,
  value: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
};

export default AutocompleteSelect;
