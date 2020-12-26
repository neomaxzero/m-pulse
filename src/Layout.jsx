import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LayoutW = styled.section`
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  width: 75%;
  min-height: 100vh;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const Navigator = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const Layout = ({ children }) => (
  <LayoutW>
    <Navigator>
      <Link to="/">P</Link>
      <Link to="/login">Login</Link>
    </Navigator>
    <Container>{children}</Container>
  </LayoutW>
);

export default Layout;
