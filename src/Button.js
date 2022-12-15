import React from "react";
import styled from "styled-components";

const Button = styled.button`
  text-align: center;
  font-size: 22px;
  border-radius: 15px;
  padding: 10px 25px;
  cursor: pointer;
  margin: 0 10px;
  transition: all 0.05s ease-in-out;
  background-color: ${props => props.minus ? "#e63946" : "#2a9d8f"};
  color: #fff;
  box-shadow: ${props => props.minus ? "0 4px 0 darken(#e63946, 10%)" : "0 4px 0 darken(#2a9d8f, 10%)"};
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
  }
`

export default Button