import React from 'react';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';


const App = () => (
  <>
    <GlobalStyle />
    <NavBar />
    <Menu />
  </>
);


export default App;
