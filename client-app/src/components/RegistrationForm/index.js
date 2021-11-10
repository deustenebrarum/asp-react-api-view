import { Form, Button } from 'react-bootstrap'

export default function RegistrationForm() {
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
            <Form.Group className="mb-2" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password" placeholder="Enter password"/>
            </Form.Group>
            <Form.Group>
                <Button className="button" variant="outline-dark" type="submit">
                    Register
                </Button>
            </Form.Group>
        </Form>
    )
}