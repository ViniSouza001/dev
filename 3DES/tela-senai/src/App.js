import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;
