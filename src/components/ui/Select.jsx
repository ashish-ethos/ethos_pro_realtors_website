import React from 'react';
import { Select } from 'antd';

const { Option, OptGroup } = Select;

const CustomSelect = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select...',
  disabled = false,
  name,
  className = '',
  mode, // Add mode prop to support multiple selection
  children,
  ...rest
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      className={`common-select ${className}`}
      mode={mode} // Pass mode prop to Ant Design Select
      {...rest}
    >
      {children ||
        options.map((option) =>
          typeof option === 'object' ? (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ) : (
            <Option key={option} value={option}>
              {option}
            </Option>
          )
        )}
    </Select>
  );
};

// Expose OptGroup and Option as static properties
CustomSelect.OptGroup = OptGroup;
CustomSelect.Option = Option;

export default CustomSelect;