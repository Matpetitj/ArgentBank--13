import "./header.scoped.scss";

import Logo from "../../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/slices/authSlice"; // importer l'action logout

function Header() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        // 1. Vide Redux
        dispatch(logout());
        // 2. Supprime localStorage & sessionStorage
        localStorage.removeItem("userToken");
        sessionStorage.removeItem("userToken");
        // 3. Redirige vers l'accueil
        navigate("/");
    };

    return (
        <nav id="nav">
            <div className="logoDiv">
                <Link to="/">
                    <img src={Logo} alt="Logo de ArgentBank" />
                </Link>
            </div>
            <div className="headerProfil">
                {token ? (
                    <div className="headerConnected">
                        <Link className="headerSignIn" to="/user">
                            <FontAwesomeIcon className="signInIcon" icon={faCircleUser} />
                            {/* Ici tu pourrais aussi afficher dynamiquement le prénom si tu veux */}
                            Tony
                        </Link>
                        <button className="headerSignIn" onClick={handleLogout} style={{ background: "none", border: "none", cursor: "pointer" }}>
                            <FontAwesomeIcon className="signInIcon" icon={faRightFromBracket} />
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <Link className="headerSignIn" to="/login">
                        <FontAwesomeIcon className="signInIcon" icon={faCircleUser} />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Header;