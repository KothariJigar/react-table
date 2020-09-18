import React from "react";
import styled from "styled-components";

import { colors, whitespace } from "../../styles/constants";

interface TextFieldProps {
  uniqueId: string;
  label?: string;
  type?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onBlur?: (e: React.ChangeEvent<any>) => void;
  onFocus?: (e: React.ChangeEvent<any>) => void;
  onKeyDown?: (e: React.ChangeEvent<any>) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  autoComplete?: boolean;
  value?: string;
  maxlength?: number;
}

const Wrapper = styled.div`
  margin-bottom: ${whitespace.l};

  input {
    display: block;
    max-width: 100%;
    height: 30px;
    border: 1px solid ${colors.grey.standard};
    padding: ${whitespace.xxs} ${whitespace.m};
    font-size: 16px;

    ::placeholder {
      font-style: italic;
      color: ${colors.grey.dark};
    }
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const TextField: React.FC<TextFieldProps> = ({
  uniqueId,
  label,
  type = "text",
  name,
  required = false,
  autoComplete = true,
  value,
  ...props
}) => {
  return (
    <Wrapper>
      {label && <label htmlFor={uniqueId}>{label}</label>}
      <InputWrapper>
        <input
          id={uniqueId}
          type={type}
          {...props}
          autoComplete={!autoComplete ? "off" : undefined}
          value={value ? value : ""}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default TextField;
