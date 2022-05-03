import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, cHome, pHome, eHome} from './components';
import {ErrorPage} from './pages';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          Learn React
          </p>
      </header>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/c' element={<cHome />} />
          <Route path='/p' element={<pHome />} />
          <Route path='/e' element={<eHome />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
