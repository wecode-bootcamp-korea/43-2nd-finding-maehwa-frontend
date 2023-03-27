import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import variables from './styles/variables';
import Router from './Router';
import AppLayout from './styles/AppLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <ThemeProvider theme={{ style: theme, variables }}>
      <GlobalStyle />
      <AppLayout>
        <Router />
      </AppLayout>
    </ThemeProvider>
  </RecoilRoot>
);
