import "./header.scoped.scss"

import Logo from "../../../assets/img/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return (
        <>
            <nav id="nav">
                <div className="logoDiv">
                    <img src={Logo} alt="Logo de ArgentBank" href="/"></img>
                </div>
                <div className="headerProfil">
                    {/* <div className="headerConnected">
                        <a className="headerSignIn" href="/user">
                            <FontAwesomeIcon className="signInIcon"
                            icon={faCircleUser}/>
                            Tony
                        </a>
                        <a className="headerSignIn" href="/">
                            <FontAwesomeIcon className="signInIcon"
                            icon={faRightFromBracket}/>
                            Sign Out
                        </a>
                    </div> */}
                    <a className="headerSignIn" href="/login">
                        <FontAwesomeIcon className="signInIcon"
                        icon={faCircleUser}/>
                        Sign In
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header;