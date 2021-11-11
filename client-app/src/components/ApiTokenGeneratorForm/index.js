import { Form, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { generateToken as apiGenerate } from '../../services/auth'
import { store } from '../../store'

export default function ApiTokenGeneratorForm() {
    const token = useSelector((state) => state.token)

    async function generateNewToken(e) {
        e.preventDefault();

        const { username, password } = store.getState()
        
        await apiGenerate({username, password})
    }

    return (
        <Form onSubmit={generateNewToken}>
            <h2>API Token</h2>
            <Form.Group className="mb-2" controlId="formBasicToken">
                <Form.Label>Token</Form.Label>
                <Form.Control disabled type="text" value={token}/>
            </Form.Group>
            <Form.Group>
                    <Button variant="outline-dark" type="submit">
                        Generate
                    </Button>
            </Form.Group>
        </Form>
    )
}