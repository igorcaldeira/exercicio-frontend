import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'assets/style/theme';
import GlobalStyle from 'components/style/GlobalStyle';
import ProfileDetails from 'components/template/ProfileDetails';
import store from 'store/store';

const Profile = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ProfileDetails />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);

export default Profile;
