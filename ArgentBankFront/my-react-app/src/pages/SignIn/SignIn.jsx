import "./signin.scoped.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function SignIn(){

    const handleSubmit = async (event) =>{
        event.preventDefault();
    }

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
                            // value={userName}
                            // onChange={}
                            required={true}
                            />
                        </div>
                        <div className="signInInputContainer">
                            <label hmtlfor="password">Password</label>
                            <input className="signInInput"
                            type="password"
                            id="password"
                            // value={userPassword}
                            // onChange={}
                            required={true}
                            />
                        </div>
                        <div className="signInInputRemember">
                            <input className="signInInput"
                            type="checkbox"
                            id="remember-me"
                            // value={userName}
                            // onChange={}
                            />
                            <label hmtlfor="remember-me">Remember me</label>
                        </div>
                        <button className="signInButton">Sign In</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default SignIn;