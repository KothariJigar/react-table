import React from "react";
import styled from "styled-components";
import { whitespace, colors } from "../../styles/constants";

export interface ButtonProps {
  onClick?: () => void;
  label: string;
  isSubmit?: boolean;
  disabled?: boolean;
}

const ButtonBase = styled.button`
  font-size: 1rem;
  line-height: 20px;
  padding: ${whitespace.xxs} ${whitespace.xs};
  border-radius: 4px;
  border: 1px solid ${colors.grey.dark};
  color: ${colors.black.standard};
  background-color: #fff;
  font-weight: 600;
  display: flex;
  align-items: center;
  cursor: pointer;

  &[disabled] {
    cursor: not-allowed;
    background-color: ${colors.green.standard};
    color: #fff;
  }
`;

export const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  label,
  isSubmit = false,
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled && !!onClick) {
      onClick();
    }
  };

  return (
    <ButtonBase
      onClick={handleClick}
      type={isSubmit ? "submit" : "button"}
      disabled={disabled}
    >
      {label && <span>{label}</span>}
    </ButtonBase>
  );
};

export default Button;
