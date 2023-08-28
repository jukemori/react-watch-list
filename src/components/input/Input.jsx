import PropTypes from "prop-types"; // Importing PropTypes for prop validation
import "./input.scss";

const Input = (props) => {
  const { type, placeholder, value, onChange } = props;

  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

// Prop type validation using PropTypes
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Input;
