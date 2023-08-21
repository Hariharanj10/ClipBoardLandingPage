import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavContainer = styled.nav`
  background-color: hotpink;
  color: black;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size:14px;
  font-weight:bold;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  text-decoration:none;
  align-items: center;
  gap: 1rem;
`;

const NavItem = styled.li`
  font-size: 1rem;
  text-decoration:none;
  color:black;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/TransactionPage" >TransactionPage</Link>
        </NavItem>
        <NavItem>
          <Link to="/LoginPage">Login</Link>
        </NavItem>
        <NavItem>
          <Link to="/contact">Contact</Link>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
