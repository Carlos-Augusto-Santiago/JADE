import "./css/Home.css";
import { Card } from "react-bootstrap";

export default function Home() {
    return (
        <div className="home-container">
            <Card className="home-card">
                <Card.Img
                    className="home-card-img"
                    variant="top"
                    src="/img/jade_logo.jpg"
                />
                <Card.Body>
                    <Card.Title>Bienvenido a JADE!</Card.Title>
                    <br />
                    <Card.Text>
                        JADE es una plataforma educativa diseñada por alumnos de
                        ESCOM con el objetivo de ser una herramienta de apoyo
                        para los alumnos de primaria que están cursando el sexto
                        grado y desean mejorar sus conocimientos sobre la
                        materia de matemáticas y español.                         
                    </Card.Text>
                    <br />
                    <div className="home-container-2">
                        <Card className="home-card-2">
                            <Card.Img
                                className="home-card-img"
                                variant="top"
                                src="/img/matematicas.jpeg"
                            />
                            <Card.Body>
                                <Card.Title>Matemáticas</Card.Title>
                                <br />
                                <Card.Text>
                                    Nuestro curso de matemáticas busca ayudar a
                                    refozar los conocimientos vistos en la
                                    materia con el uso de actividades didácticas
                                    y material variado.
                                </Card.Text>
                                <br />
                            </Card.Body>
                        </Card>
                        <Card className="home-card-2">
                            <Card.Img
                                className="home-card-img"
                                variant="top"
                                src="/img/español.jpeg"
                            />
                            <Card.Body>
                                <Card.Title>Español</Card.Title>
                                <br />
                                <Card.Text>
                                    Nuestro curso de español busca ayudar a
                                    refozar los conocimientos vistos en la
                                    materia con el uso de actividades didácticas
                                    y material variado.
                                </Card.Text>
                                <br />
                            </Card.Body>
                        </Card>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
