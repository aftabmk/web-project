import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Automation, GameOver, MobileView, Navbar, Timer } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route default path='/' element={<Timer/>} />
        <Route path='/mobileView' element={<MobileView/>} />
        <Route path='/automation' element={<Automation/>} />
        <Route path='/gameover' element={<GameOver/>} />
      </Routes>
    </div>
  );
}

export default App;
