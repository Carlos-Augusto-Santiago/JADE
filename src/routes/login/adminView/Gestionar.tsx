import "../css/Home.css";
import { Card } from "react-bootstrap";

export default function Gestionar() {
    return (
        <div className="home-container">
            <Card className="home-card">
                <Card.Img
                    className="home-card-img"
                    variant="top"
                    src="/img/jade_logo.jpg"
                />
                <Card.Body>
                    <Card.Title>Gestionar</Card.Title>
                    
                </Card.Body>
            </Card>
        </div>
    );
}
