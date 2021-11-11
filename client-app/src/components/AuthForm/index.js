import { Form, Button } from 'react-bootstrap'
import styles from './AuthForm.module.css'
import { useDispatch } from 'react-redux'
import { login as apiLogin } from '../../services/auth'
import { useState } from 'react'

export default function AuthForm() {
    const dispatch = useDispatch()

    const [status, setStatus] = useState("")

    async function login(e) {
        e.preventDefault()
        
        const form = new FormData(e.target)

        const username = form.get("username")
        const password = form.get("password")

        if (await apiLogin({ username, password})) {
            setStatus("Successfully logged in")
            dispatch({type: "SET_USERNAME", payload: username})
            dispatch({type: "SET_PASSWORD", payload: password})
        } else {
            setStatus("User not found")
        }
    }

    function logout() {
        dispatch({type: "SET_AUTH_TOKEN", payload: ""})
        setStatus("")
    }

    return (
        <Form onSubmit={login}>
            <h2>Log In</h2>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="username" type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group>
                <Button className={styles.formButton} variant="outline-dark" type="submit">
                    Log In
                </Button>
                <Button className={styles.formButton} variant="outline-dark" onClick={logout}>
                    Log Out
                </Button>
            </Form.Group>
            <span class="help-block">{status}</span>
        </Form>
    )
}