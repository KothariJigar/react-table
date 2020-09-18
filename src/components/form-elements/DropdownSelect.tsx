import React from "react";
import styled from "styled-components";
import { whitespace, colors } from "../../styles/constants";

export interface OptionProps {
  id: number;
  text: string;
}

export interface DropdownSelectProps {
  onChange?: (selectedValue: OptionProps) => void;
  options: OptionProps[] | null;
  value: OptionProps | null;
  placeholder?: string;
  disabled?: boolean;
}

const DropDownBase = styled.select`
  width: 100%;
  height: 40px;
  padding: ${whitespace.xxs} ${whitespace.m};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  vertical-align: middle;
  border: 1px solid ${colors.grey.standard};
  border-radius: 4px;
`;

export const DropdownSelect: React.FunctionComponent<DropdownSelectProps> = ({
  onChange,
  options,
  value,
  disabled = false,
  placeholder = "Select",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue =
      options &&
      options.find((option) => option.id.toString() === e.target.value);
    if (!disabled && !!onChange && selectedValue) {
      onChange(selectedValue);
    }
  };

  return (
    <DropDownBase
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
      disabled={disabled}
      value={value ? value.text : ""}
      placeholder={placeholder}
    >
      {options ? (
        options.map((option: OptionProps) => (
          <option key={`value-${option.id}`} value={option.id}>
            {option.text}
          </option>
        ))
      ) : (
        <option disabled>No options available</option>
      )}
    </DropDownBase>
  );
};

export default DropdownSelect;
