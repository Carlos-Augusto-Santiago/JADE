import './css/Registro.css';
import { Formik, Field, Form } from 'formik';
import axios from "axios";
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { Card } from 'react-bootstrap';

export default function Registro() {
	return (
		<div className="registro-container">
			<Card className="registro-card">
				<Card.Img variant="top" src="/img/educacion.jpg" />
				<Card.Body>
					<Card.Title>Registrar Usuario</Card.Title>
					<Formik
						initialValues={{
							nombre: '',
							correo: '',
							password: '',
							confirmPw: ''
						}}

						validationSchema={Yup.object().shape({
							nombre: Yup.string().required("Obligatorio"),
							correo: Yup.string().email('Email inválido').required('Obligatorio'),
							password: Yup.string().required("Obligatorio"),
							confirmPw: Yup.string().when("password", {
								is: (val: any) => {
									return (val && val.length > 0 ? true : false)
								},
								then: Yup.string().oneOf(
									[ Yup.ref("password") ],
									"Las contraseñas deben de ser las mismas"
								)
							}).required("Obligatorio")
						})}

						onSubmit={async (values) => {

							if (values.password !== values.confirmPw) {
								Swal.fire(
									{
										icon: 'error',
										title: 'Las contraseñas no son iguales!'
									}
								);
							} else {
								Swal.fire(
									{
										icon: 'success',
										title: 'Cuenta creada!'
									}
								);
								// Hacer una llamada de AJAX para verificar al usuario
								let response: any = await axios.post("/login", values);

								if (response.login === true) {
									// Guardar los datos del USUARIO si está verificado

								}
							}
						}}
					>
						{({ errors, touched }) => (
							<Form>
								<div>
									<label className="form-label" htmlFor="form3Example1q">Nombre Completo</label>
									<Field type="text" id="nombre" name="nombre" className="form-control" />
									{errors.nombre && touched.nombre ? (
										<div className="text-danger">{errors.nombre}</div>
									) : null}

									<br />
									<label className="form-label" htmlFor="form3Example1q">Correo</label>
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

									<br />
									<label className="form-label" htmlFor="form3Example1q">Repite contraseña</label>
									<Field type="password" id="confirmPw" name="confirmPw" className="form-control" />
									{errors.confirmPw && touched.confirmPw ? (
										<div className="text-danger">{errors.confirmPw}</div>
									) : null}
								</div>
								<br />
								<button type="submit" className="btn btn-success btn-lg mb-1">Registrar</button>
							</Form>
						)}
					</Formik>
				</Card.Body>
			</Card>
		</div>
	);
}
