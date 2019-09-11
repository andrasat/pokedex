import React from 'react';
import { AppWrapper, AppHeader, AppLink } from './App.module.scss';

// ADD COMMENT
const App: React.FC = () => (
  <div className={AppWrapper}>
    <header className={AppHeader}>
      <p>
        Edit <code>src/App.tsx</code> and save to reload
      </p>
      <a
        className={AppLink}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
