import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import Login from './components/auth/login/Login';
import Products from './components/productsManagement/products/Products';
import ErrorNotFound from './components/error/ErrorNotFound';
import Protected from './components/protected/Protected';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div className='d-flex justify-content-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route element={<Protected isSignedIn={loggedIn} />}>
            <Route path='/products/*' element={<Products onLogout={handleLogout} />}/>
          </Route>
          <Route path='*' element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App