import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useForm } from '../hooks/useForm'
import { useDispatch } from 'react-redux'
import { login } from '../actions/actions'
import { loginGoogle } from '../actions/actions'

const Login = () => {

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = formValues;

    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    const handleLoginGoogle = () => {
        dispatch(loginGoogle())
    }
    return (
        <Container>
            <Container className="w-25 my-5 border border-dark p-2">
                <Form onSubmit={handleLogin}>
                    <Container>
                        <div>
                            <h2 className="text-center">Iniciar Sesión</h2>
                            <p className="text-center">Inicie sesión aquí con su nombre de usuario y contraseña</p>
                        </div>
                        <br />
                        <div>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={handleInputChange}
                                required />
                            <br />
                            <button className="btn btn-primary mx-2">Inicie Sesión</button>
                            <button className="btn btn-white mx-2 my-2"
                                onClick={handleLoginGoogle}
                            ><img className="google-icon btn-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="googlebutton" /></button>
                            <button className="btn btn-white mx-2 my-2"><img className="google-icon btn-icon" src="https://image.flaticon.com/icons/png/512/20/20673.png" alt="google button" /></button>
                        </div>
                    </Container>
                </Form>
            </Container>
        </Container>
    )
}

export default Login
