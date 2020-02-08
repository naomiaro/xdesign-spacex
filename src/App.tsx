import React from 'react';
import './App.module.css';
import { Header } from 'components/Header';
import { Aside } from 'components/Aside';
import { Content } from 'components/Content';
import { SpaceXProvider } from 'SpaceXContext';

const App = () => {
  return (
    <SpaceXProvider>
      <div className="App">
        <Header></Header>
        <Aside></Aside>
        <Content></Content>
      </div>
    </SpaceXProvider>
  );
};

export default App;
