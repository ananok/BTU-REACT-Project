import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledN=styled.div`
  display:none;
  flex-direction: column;
 
  @media (max-width:1007px){
    background-color: rgb(9, 42, 133);
    width:100%;
    display:flex;
    flex-direction:row;
    position:fixed;
    height:80px;
    align-items:center;
    justify-content:center;
    right:0px;
    transform:${({open})=> open?`translateX(0)`:`translateX(100%)`};
    transition: transform 0.3s easy-in-out;

  }
`
const Navbar=({open})=>{
    return(
  
        <StyledN  open={open}  >
               <NavLink className="burger-nav" to="/">Main</NavLink>
               <NavLink className="burger-nav" to="/Services">Services</NavLink> 
            </StyledN>
        
    )

}

export default Navbar;