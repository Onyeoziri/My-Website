import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {ErrorPage, Home, HomeComp, HomeEng} from './pages';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/computerScience' element={<HomeComp />} />
          <Route path='/e' element={<HomeEng />} />
          <Route path='*' element={<ErrorPage />} />

          <Route path="/Website" element={<Navigate to="/" replace />}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
