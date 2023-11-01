import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MeusLivros from './components/pages/MeusLivros';
import MaisLidos from './components/pages/MaisLidos';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/MeusLivros' element={<MeusLivros />} />
        <Route path='/MaisLidos' element={<MaisLidos />} />
      </Routes>
    </Router>
  );
}

export default App;
