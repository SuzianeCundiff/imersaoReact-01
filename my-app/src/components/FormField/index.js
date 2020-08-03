import React from 'react';
import PropTypes from 'prop-types';

function FormField({ label, type, value, name, onChange }){
  const fieldId = `id_${ name }`;

  return (
      <div>
        <label
          htmlFor={ fieldId }
        >
          { label }: 

          <input 
            id = { fieldId }
            type = { type }
            value = { value }
            name = { name}
            onChange = { onChange }
          />
        </label>
      </div>
  )
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {}
};

FormField.propTypes = {
  label: PropTypes.string.isRequired, 
  type: PropTypes.string, 
  value: PropTypes.string.isRequired, 
  name: PropTypes.string, 
  onChange: PropTypes.func
};

export default FormField;
