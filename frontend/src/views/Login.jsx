import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { FaUser } from 'react-icons/fa'
import { RiLockPasswordFill } from 'react-icons/ri'

const Login = () => {
  const { user, handleChange } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)

    navigate('/profile', {
      replace: true,
      state: {
        logged: true
      }
    })
  }

  return (

    <Form onSubmit={handleSubmit} className='col-10 col-sm-8 col-md-6 col-lg-4 m-auto border border-light-subtle rounded-5 p-5 mt-5'>
      <legend className='mb-3 text-center'>Inicia Sesión</legend>
      <Form.Group className='mt-2'>
        <Form.Label>Ingresa tu nombre de usuario</Form.Label>
        <InputGroup>
          <InputGroup.Text><FaUser /></InputGroup.Text>
          <Form.Control
            type='text'
            name='name'
            onChange={handleChange}
            value={user.name}
          />
        </InputGroup>
      </Form.Group>

      <Form.Group className='mt-2'>
        <Form.Label>Ingresa tu contraseña</Form.Label>
        <InputGroup>
          <InputGroup.Text><RiLockPasswordFill /></InputGroup.Text>
          <Form.Control
            type='password'
            name='password'
            autoComplete='off'
            onChange={handleChange}
            value={user.password}
          />
        </InputGroup>
      </Form.Group>

      <div className='text-center'>
        <Button className='mt-3 px-5' type='submit' variant='dark'>Enviar</Button>
      </div>
    </Form>
  )
}

export default Login
