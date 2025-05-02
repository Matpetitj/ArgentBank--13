import "./welcome.scoped.scss";
import { useSelector } from "react-redux";

function Welcoming({ onClick }) {
    const user = useSelector((state) => state.auth.user); // récupère les infos du store

    return (
        <div className="welcomeUser">
            <h1>
                Welcome back <br />
                {user?.firstName} {user?.lastName} !
            </h1>
            <button className="editButton" onClick={onClick}>Edit Name</button>
        </div>
    );
}

export default Welcoming;