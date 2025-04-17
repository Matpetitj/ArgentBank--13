import "./signin.scoped.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import { useNavigate } from "react-router";
import { loginUser } from "../../services/APIService"

function SignIn(){
    // états pour l'email, le mot de passe et les erreurs
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [error, setError] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    // Gérer l'envoi du formulaire
    const handleSubmit = async (event) =>{
        event.preventDefault(); // Empêcher le rechargement de la page

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailRegex.test(userName)){
            setError("Format d'email invalide");
            return;
        }

        try {
            const token = await loginUser(userName, userPassword); // Appeler la fonction loginUser
            console.log("Connexion réussie, token :", token);

            // Si rememberMe est coché, on peut stocker le token ou une autre info dans le localStorage
            if(rememberMe) {
                localStorage.setItem("userToken", token);
            }

            // réinitilise les erreurs
            setError("")

            navigate("/user"); //redirige l'utilisateur si connexion réussie

        } catch (err){
            console.error("Erreur lors de la connexion :", err)
            setError("Identifiants incorrrects"); // affiche un message d'erreur en cas d'écher de la connexion
        }
    };

    // Gérer le changement dans les champs
    const handleUserNameChange = (e) => setUserName(e.target.value);
    const handleUserPasswordChange = (e) => setUserPassword(e.target.value);
    const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

    return (
        <>
            <main className="signIn">
                <section className="signInFormContainer">
                    <FontAwesomeIcon className="signInIcon" icon={faCircleUser}/>
                    <h1 className="signInFormTitle">Sign In</h1>
                    <form className="signInForm" onSubmit={handleSubmit}>
                        <div className="signInInputContainer">
                            <label hmtlfor="username">Username</label>
                            <input className="signInInput"
                            type="text"
                            id="username"
                            value={userName}
                            onChange={handleUserNameChange}
                            required={true}
                            />
                        </div>
                        <div className="signInInputContainer">
                            <label hmtlfor="password">Password</label>
                            <input className="signInInput"
                            type="password"
                            id="password"
                            value={userPassword}
                            onChange={handleUserPasswordChange}
                            required={true}
                            />
                        </div>
                        <div className="signInInputRemember">
                            <input className="signInInput"
                            type="checkbox"
                            id="remember-me"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                            />
                            <label hmtlfor="remember-me">Remember me</label>
                        </div>
                        <button className="signInButton">Sign In</button>
                        {error && <p className="errorMessage">{error}</p>}
                    </form>
                </section>
            </main>
        </>
    )
}

export default SignIn;