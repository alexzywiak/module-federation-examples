import React from "react";
import NavBar from "@pluralsight/ps-design-system-navbar";
import NavItem from "@pluralsight/ps-design-system-navitem";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  width: 100vw;
`;

const NavItems = styled.div`
  display: flex;
`;

const Brand = styled.div`
  margin-right: 48px;
`;

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <NavBar
        items={
          <NavItems>
            <Link to="/rnc">
              <NavItem selected={pathname === "/rnc"}>RNC</NavItem>
            </Link>
            <Link to="/bctwo">
              <NavItem selected={pathname === "/bctwo"}>BC Two</NavItem>
            </Link>
            <Link to="/bcthree">
              <NavItem selected={pathname === "/bcthree"}>BC Three</NavItem>
            </Link>
          </NavItems>
        }
      />
    </Container>
  );
};

export default Nav;
