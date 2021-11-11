import { Form, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { generateToken as apiGenerate } from '../../services/auth'
import { store } from '../../store'
import { useState } from 'react'

export default function ApiTokenGeneratorForm() {
    const token = useSelector((state) => state.token)
    const [valutes, setValutes] = useState(null)

    async function generateNewToken(e) {
        e.preventDefault();

        const { username, password } = store.getState()
        
        await apiGenerate({username, password})
    }

    async function fetchAPIResult() {
        if(valutes)
            setValutes(null)
        else {
            const response = await fetch("/api/valutes/01-01-2001", 
                {
                        "headers": {
                            "content-type": "application/json",
                            "Authorization": `Bearer ${token}`
                        },
                        "method": "GET"
                }).then(data => data.json())
            setValutes(JSON.stringify(response.slice(0,5)
                .map(obj => ({
                        id: obj.id, 
                        name: obj.name, 
                        value: obj.value
                    }))
                )
            )
        }
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
            <button onClick={fetchAPIResult} className="mt-5 button btn btn-success">Check API</button>
            <div className="container mt-5">{valutes}</div>
        </Form>
    )
}