import "./header.scoped.scss"

import Logo from "../../../assets/img/argentBankLogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser/*FaRightFromBracket*/ } from "@fortawesome/free-solid-svg-icons";

function Header(){
    return (
        <>
            <nav id="nav">
                <div className="logoDiv">
                    <img src={Logo} alt="Logo de ArgentBank" href="/"></img>
                </div>
                <div className="HeaderProfil">
                    <a className="headerSignIn" href="/login">
                        <FontAwesomeIcon className="SignInIcon" icon={faCircleUser}/>
                    </a>
                    Sign In
                </div>
            </nav>
        </>
    )
}

export default Header;