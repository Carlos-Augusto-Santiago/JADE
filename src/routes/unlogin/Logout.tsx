import "./css/Registro.css";
import { useNavigate } from "react-router-dom";
import Session from "../../session/Session";

export default function Logout() {
    const navigate = useNavigate();
    Session.setLogin(false);
    Session.setUser("usuario");
    console.log(Session.isLogin());
    navigate("/");
    return <></>;
}
