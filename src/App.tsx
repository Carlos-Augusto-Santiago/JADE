import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import Registro from "./routes/unlogin/Registro";
import Home from "./routes/unlogin/Home";
import Login from "./routes/unlogin/Login";
import Nosotros from "./routes/unlogin/Nosotros";
import FAQ from "./routes/unlogin/FAQ";
import Espanol from "./routes/login/cursos/Espanol";
import Mates from "./routes/login/cursos/Mates";
import Gestionar from "./routes/login/adminView/Gestionar";
import Session from "./session/Session";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logout from "./routes/unlogin/Logout";

export default function App() {
    // Con esto se obtiene el login c:
    let login = Session.isLogin();
    let user = Session.getUser();
    
    
    function actualizar() {}
    /* TODO gestionar alumnos:
        eliminar alumnos
        ver respuestas de alumnos        
    */
    return (
        <BrowserRouter>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="">
                        <Link to="/">JADE</Link>
                    </Navbar.Brand>
                    <Nav className="me-auto navegacion-links">
                        <Nav.Link>
                            <Link to="/Nosotros">Nosotros</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/FAQ">FAQ</Link>
                        </Nav.Link>
                        {login === true ? (
                            <>
                                {user === "usuario" ? (
                                    <>
                                        <NavDropdown
                                            title="Cursos"
                                            id="collasible-nav-dropdown"
                                        >
                                            <NavDropdown.Item>
                                                <Link to="/login/cursos/Espanol">
                                                    Español
                                                </Link>
                                            </NavDropdown.Item>
                                            <NavDropdown.Item>
                                                <Link to="/login/cursos/Mates">
                                                    Matemáticas
                                                </Link>
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                    </>
                                ) : (
                                    <>
                                        <Nav.Link>
                                            <Link to="/login/adminView/Gestionar">
                                                Gestionar
                                            </Link>
                                        </Nav.Link>
                                    </>
                                )}
                                <Nav.Link>
                                    <Link to="/Logout">Salir de sesión</Link>
                                </Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link>
                                    <Link to="/login">Iniciar sesión</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/registrar">Registrarse</Link>
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Nosotros" element={<Nosotros />} />
                <Route path="/FAQ" element={<FAQ />} />
                {login === true ? (
                    <>
                        <Route path="/Logout" element={<Logout />} />
                        {user === "usuario" ? (
                            <>
                                <Route
                                    path="/login/cursos/Espanol"
                                    element={<Espanol />}
                                />
                                <Route
                                    path="/login/cursos/Mates"
                                    element={<Mates />}
                                />
                            </>
                        ) : (
                            <>
                                <Route
                                    path="/login/adminView/Gestionar"
                                    element={<Gestionar />}
                                />
                            </>
                        )}
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Login />} />
                        <Route path="/registrar" element={<Registro />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    );
}
