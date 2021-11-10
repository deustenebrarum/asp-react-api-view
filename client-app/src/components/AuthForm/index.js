import { Form, Button } from 'react-bootstrap'
import './AuthForm.module.css'

export default function AuthForm() {
    return (
        <Form>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email"/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group>
                <Button className="button" variant="outline-dark" type="submit">
                    Log In
                </Button>
                <Button className="button" variant="outline-dark" type="submit">
                    Log Out
                </Button>
            </Form.Group>
        </Form>
    )
}