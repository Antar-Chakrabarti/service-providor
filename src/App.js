import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Checkout from './components/Checkout/Checkout';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
