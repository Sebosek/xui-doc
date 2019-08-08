import React from 'react';
import styles from './App.module.scss';
import Menu from '../Menu/Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Introduction from '../../pages/Introduction/Introduction';
import Components from '../../pages/Components/Components';
import About from '../../pages/About/About';
import NotFound from '../../pages/NotFound/NotFound';

const routes = (
  <Switch>
    <Route
      path="/"
      component={Introduction}
      exact
    />
    <Route
      path="/components"
      component={Components}
    />
    <Route
      path="/about"
      component={About}
    />
    <Route
      component={NotFound}
    />
  </Switch>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Menu />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          { routes }

          <xui-grid>
            <xui-grid-column>
              <xui-text>Content</xui-text>
            </xui-grid-column>
          </xui-grid>
        </div>
      </div>
    </BrowserRouter>
  );
}

// import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//     </div>
//   );
// }

export default App;
