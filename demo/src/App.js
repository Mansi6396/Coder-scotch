import logo from './logo.svg';
import './App.css';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/details/:id' element={<Page2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
