// import './App.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import './App.scss';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
    </Routes>
    </Router>
    </>
  );
}

export default App;
