import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const StyledB = styled.div`
  width: 2rem;
  height: 2rem;
  top:20px;
  right:5px;
  display: none;
  z-index: 20;

  @media only screen and (max-width: 1007px) {
    justify-content: space-around;
    flex-flow: column nowrap;
    display: flex;
    position:absolute;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? `white` : `#3b7ec2`)};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    cursor: pointer;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, Setopen] = useState(false);
  return (
    <>
      <StyledB open={open} onClick={() => Setopen(!open)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledB>

      <Navbar open={open} />
    </>
  );
};

export default Burger;
