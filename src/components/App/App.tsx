import React from 'react';
import './App.scss';
import Menu from '../Menu/Menu';

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <div className="content">
        <xui-grid 
          style={{
            margin: '0 auto',
            maxWidth: '980px',
          }}
        >
          <xui-grid-column>
            <xui-text>Content</xui-text>
          </xui-grid-column>
        </xui-grid>
      </div>
    </>
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
