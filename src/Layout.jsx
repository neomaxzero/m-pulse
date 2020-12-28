import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";

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

const ButtonLink = styled.span`
  cursor: pointer;
`;
const Username = styled.span`
  font-size: 0.8rem;
`;
const Layout = ({ children }) => {
  const [user, setUser] = useState();
  const history = useHistory();

  useEffect(() => {
    const checkUser = async () => {
      const user = await Auth.currentAuthenticatedUser();
      if (user) {
        setUser(user.attributes.email);
      }
      console.log(user);
    };
    checkUser();
  }, [setUser]);

  const logout = async () => {
    console.log("logging out");
    try {
      await Auth.signOut();
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <LayoutW>
      <Navigator>
        <Link to="/">P</Link>
        {user ? (
          <div>
            <Username>{user}</Username>
            <ButtonLink onClick={logout}> Log out</ButtonLink>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </Navigator>
      <Container>{children}</Container>
    </LayoutW>
  );
};

export default Layout;
