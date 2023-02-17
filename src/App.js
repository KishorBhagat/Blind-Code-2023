import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Contest from './Pages/Contest';
import GlobalStyle from './GlobalStyle';
import Instructions from './Pages/Instructions';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Instructions />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/contest' element={<Contest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
