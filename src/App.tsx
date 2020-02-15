import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './App.module.css';
import { Header } from 'components/Header';
import { Aside } from 'components/Aside';
import { Content } from 'components/Content';
import { SpaceXProvider } from 'SpaceXContext';

const App = () => {
  return (
    <SpaceXProvider>
      <div className={styles.App}>
        <Helmet>
          <meta
            name="description"
            content="React and Typescript app for SpaceX Launches"
          />
          <title>Space X Launches</title>
        </Helmet>
        <Header className={styles.Header}></Header>
        <Aside className={styles.Aside}></Aside>
        <Content className={styles.Content}></Content>
      </div>
    </SpaceXProvider>
  );
};

export default App;
