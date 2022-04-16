import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
