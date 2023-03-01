import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './Pages/Register';
import Contest from './Pages/Contest';
import GlobalStyle from './GlobalStyle';
import Instructions from './Pages/Instructions';
import Thanks from './Components/Thanks';
import { useState } from 'react';

function App() {
  const [isuser, setIsuser] = useState(false);

  const ProtectedRoute = ({children}) => {
    if(!isuser){
      return <Navigate to='/register'/>
    }
    return children;
  }
  
  return (

    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Instructions />} />
            <Route path='/register' element={<Register setIsuser={setIsuser}/>} />
            {/* <Route path='/contest' element={<ProtectedRoute><Contest /></ProtectedRoute>} /> */}
            <Route path='/contest' element={<Contest />} />
            <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
