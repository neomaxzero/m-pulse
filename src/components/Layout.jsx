import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import Logo from './Logo';
import GlobalStyles from './globalStyles';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

const LayoutW = styled.section`
  padding: 2rem;
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
  align-items: center;
  font-size: 0.8rem;
  justify-content: space-between;
`;

const ButtonLink = styled.span`
  cursor: pointer;
`;
const Username = styled.span`
  margin-right: 1.2rem;
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
    console.log('logging out');
    try {
      await Auth.signOut();
      location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <LayoutW>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navigator>
          <Link to="/">
            <Logo />
          </Link>
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
      </ThemeProvider>
    </LayoutW>
  );
};

export default Layout;
