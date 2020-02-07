import React from 'react';
import './App.css';
import { Header } from 'components/Header';
import { Content } from 'components/Content';
import { SpaceXProvider } from 'SpaceXContext';

const App = () => {
  return (
    <SpaceXProvider>
      <div className="App">
        <Header></Header>
        <Content></Content>
      </div>
    </SpaceXProvider>
  );
};

export default App;
