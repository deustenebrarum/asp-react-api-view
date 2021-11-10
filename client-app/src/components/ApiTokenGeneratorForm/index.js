import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'

export default function ApiTokenGeneratorForm() {
    const [token] = useState("abcdfqq");
    return (
        <Form>
            <h2>API Token</h2>
            <Form.Group className="mb-2" controlId="formBasicToken">
                <Form.Label>Token</Form.Label>
                <Form.Control disabled type="text" value={token}/>
            </Form.Group>
            <Form.Group>
                    <Button className="button" variant="outline-dark" type="submit">
                        Generate
                    </Button>
            </Form.Group>
        </Form>
    )
}