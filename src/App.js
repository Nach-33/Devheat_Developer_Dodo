import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/Dashboard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
