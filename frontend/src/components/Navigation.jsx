import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { FaUser, FaShoppingCart, FaStore } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'

const Navigation = () => {
  const { state } = useLocation()

  const handleMenu = ({ isActive }) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'

  return (
    <>
      <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
        <Container>
          <NavLink className={handleMenu} to='/'>
            <Navbar.Brand>LOGO</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            {
              state?.logged
                ? (
                  <Nav className='ms-auto user'>
                    <NavLink className={handleMenu} to='/productos'><FaStore /></NavLink>
                    <NavLink className={handleMenu} to='/profile'><FaUser /></NavLink>
                    <NavLink className={handleMenu} to='/carrito'><FaShoppingCart /></NavLink>
                    <NavLink className={handleMenu} to='/'><IoLogOut /></NavLink>
                  </Nav>
                  )
                : (
                  <Nav className='ms-auto'>
                    <NavLink className={handleMenu} to='/register'>Registrarse</NavLink>
                    <NavLink className={handleMenu} to='/login'>Iniciar Sesión</NavLink>
                    <NavLink className={handleMenu} to='/register'>Registrarse</NavLink>
                    <NavLink className={handleMenu} to='/login'>Iniciar Sesión</NavLink>
                  </Nav>
                  )
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
