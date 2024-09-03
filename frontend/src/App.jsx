import Navigation from './components/Navigation'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Home, Register, Login, Profile, NotFound, Shopping, Products } from './views'
import Footer from './components/Footer'

const App = () => {
  const { state } = useLocation()

  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/productos' element={state?.logged ? <Products /> : <Navigate to='/login' />} />
        <Route path='/profile' element={state?.logged ? <Profile /> : <Navigate to='/login' />} />
        <Route path='/carrito' element={state?.logged ? <Shopping /> : <Navigate to='/login' />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
