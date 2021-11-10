import { Container, Row, Col } from "react-bootstrap"
import RegistrationForm from "../../components/RegistrationForm"
import AuthForm from "../../components/AuthForm"
import ApiTokenGeneratorForm from "../../components/ApiTokenGeneratorForm"

export default function Home() {
    return (
        <Container className="mt-5" fluid>
            <Row>
                <Col md><ApiTokenGeneratorForm/></Col>
                <Col md><RegistrationForm/></Col>
                <Col md><AuthForm/></Col>
            </Row>
        </Container>
    )
}