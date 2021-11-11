import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { register as apiRegister } from '../../services/auth'
import { useState } from 'react'

export default function RegistrationForm() {
    const dispatch = useDispatch()

    const [status, setStatus] = useState("")

    async function register(e) {
        e.preventDefault()
        
        const form = new FormData(e.target)

        const username = form.get("username")
        const password = form.get("password")
        const passwordConfirm = form.get("password-confirm")

        if (password !== passwordConfirm) {
            setStatus("Passwords aren't match")
            return null
        }

        if (await apiRegister({ username, password})) {
            setStatus("Successfull registration")
            dispatch({type: "SET_USERNAME", payload: username})
            dispatch({type: "SET_PASSWORD", payload: password})
        } else {
            setStatus("Server error")
        }
    }

    return (
        <Form onSubmit={register}>
            <h2>Register</h2>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="username" type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control name="password-confirm" type="password" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group>
                <Button className="button" variant="outline-dark" type="submit">
                    Register
                </Button>
            </Form.Group>
            <span class="help-block">{status}</span>
        </Form>
    )
}