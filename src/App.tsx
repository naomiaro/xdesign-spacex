import React from 'react';
import styles from './App.module.css';
import { Header } from 'components/Header';
import { Aside } from 'components/Aside';
import { Content } from 'components/Content';
import { SpaceXProvider } from 'SpaceXContext';

const App = () => {
  return (
    <SpaceXProvider>
      <div className={styles.App}>
        <Header className={styles.Header}></Header>
        <Aside className={styles.Aside}></Aside>
        <Content className={styles.Content}></Content>
      </div>
    </SpaceXProvider>
  );
};

export default App;
