import './css/Registro.css';
import { Formik, Field, Form } from 'formik';
import axios from "axios";
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import Session from "../../session/Session";

export default function Login() {
	const navigate = useNavigate();
	return (
		<div className="registro-container">
			<Card className="registro-card">
				<Card.Img variant="top" src="/img/jade_logo.jpg" />
				<Card.Body>
					<Card.Title>Iniciar Sesión</Card.Title>
					<Formik
						initialValues={{				
							correo: '',
							password: ''							
						}}

						validationSchema={Yup.object().shape({							
							correo: Yup.string().email('Email inválido').required('Obligatorio'),
							password: Yup.string().required("Obligatorio"), 							
						})}

						onSubmit={async (values) => {
														
							// Hacer una llamada de AJAX para verificar al usuario
							let response = await axios.post("http://localhost:3500/api/login", values);						

							if (response.data.login === true) {
								// Guardar los datos del USUARIO si está verificado
								await Swal.fire({
									icon: "success",
									title: "Entraste pa",
									timer: 2000,
									timerProgressBar: true
								});				
								Session.setLogin(true);
								Session.setUser( response.data.user == 0 ? "usuario" : "admin");								
								navigate("/");				
							}							
							else{
								Session.setLogin(false);
							}
						}}
					>
						{({ errors, touched }) => (
							<Form>
								<div>

									<label className="form-label" htmlFor="form3Example1q">Correo electrónico</label>
									<Field type="text" id="correo" name="correo" className="form-control" />
									{errors.correo && touched.correo ? (
										<div className="text-danger">{errors.correo}</div>
									) : null}							
																		
									<br />
									<label className="form-label" htmlFor="form3Example1q">Contraseña</label>
									<Field type="password" id="password" name="password" className="form-control" />
									{errors.password && touched.password ? (
										<div className="text-danger">{errors.password}</div>
									) : null}
									
								</div>
								<br />
								<button type="submit" className="btn btn-success btn-lg mb-1">Ingresar</button>
								<br />
								<br />
								¿No tienes cuenta?&nbsp;
								<Link to="/registrar" >Registrate aquí</Link>
							</Form>
						)}
					</Formik>
				</Card.Body>
			</Card>
		</div>
	);
}
