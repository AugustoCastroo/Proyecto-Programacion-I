import {useState} from 'react';
// import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { UserContextProvider } from './context/UserContext';

import { Navbar } from "./components/JS/Navbar";
import { Footer } from './components/JS/Footer';

import { UserContext } from './context/UserContext';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';

import './App.css'
import './index.css'


export const App = () => {

  const [user, setUser] = useState({
    role:'',
    logged:false,
    id: ''
  })

  return (
    <div className='background'>
      {/* los componentes tienen acceso a las variables user y setUser */}
      <UserContext.Provider value={{user, setUser}}> 
        <Navbar />
          <Routes>
            {
              user.logged ? (
                <Route path="/*" element={<PrivateRoutes />} />
              ) : (
                <Route path="/*" element={<PublicRoutes />} />
              )
            }
          </Routes>
        <Footer/>
      </UserContext.Provider>
    </div>
    
  )
}

export default App