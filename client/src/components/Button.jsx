import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  border-radius: 10px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: min-content;
  padding: 16px 26px;

  border: 1px solid #3b82f6; /* Manually defined border color */
  @media (max-width: 600px) {
    padding: 8px 12px;
  }

  background: #3b82f6; /* Manually defined background color for primary type */
  
  ${({ type }) =>
    type === "secondary"
      ? `
        background: #34d399; /* Manually defined background color for secondary type */
        border: 1px solid #34d399; /* Manually defined border color for secondary type */
      `
      : ''
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
      opacity: 0.8;
      cursor: not-allowed;
    `}
  
  ${({ isLoading }) =>
    isLoading &&
    `
      opacity: 0.8;
      cursor: not-allowed;
    `}

  ${({ flex }) =>
    flex &&
    `
      flex: 1;
    `}

  ${({ small }) =>
    small &&
    `
      padding: 10px 28px;
    `}

  ${({ outlined }) =>
    outlined &&
    `
      background: transparent;
      color: #3b82f6; /* Manually defined text color for outlined */
      box-shadow: none;
    `}

  ${({ full }) =>
    full &&
    `
      width: 100%;
    `}

  &:hover {
    background-color: #2563eb; /* Manually defined background color on hover */
    box-shadow: 0 4px 14px 0 rgba(37,99,235,0.5); /* Manually defined box-shadow on hover */
  }
`;


const button = ({
  text,
  isLoading,
  isDisabled,
  rightIcon,
  leftIcon,
  type,
  onClick,
  flex,
  small,
  outlined,
  full,
}) => {
  return (
    <Button
      onClick={() => !isDisabled && !isLoading && onClick()}
      isDisabled={isDisabled}
      type={type}
      isLoading={isLoading}
      flex={flex}
      small={small}
      outlined={outlined}
      full={full}
    >
      {isLoading && (
        <CircularProgress
          style={{ width: "18px", height: "18px", color: "inherit" }}
        />
      )}
      {leftIcon}
      {text}
      {isLoading && <> . . .</>}
      {rightIcon}
    </Button>
  );
};

export default button;
