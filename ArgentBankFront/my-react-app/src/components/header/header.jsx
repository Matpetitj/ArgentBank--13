import "./header.scoped.scss";

import Logo from "../../../assets/img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/slices/authSlice";

function Header() {
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user); // récupère les infos utilisateur
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem("userToken");
        sessionStorage.removeItem("userToken");
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
                            {user?.firstName || "Profil"} {/* Affiche le prénom ou un fallback */}
                        </Link>
                        <button
                            className="headerSignIn"
                            onClick={handleLogout}
                            style={{ background: "none", border: "none", cursor: "pointer" }}
                        >
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