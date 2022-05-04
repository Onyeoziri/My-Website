import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {NavBar, Footer} from './components';
import {ErrorPage, Home, cHome, eHome} from './pages';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/computerScience' element={<cHome />} />
          <Route path='/e' element={<eHome />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
