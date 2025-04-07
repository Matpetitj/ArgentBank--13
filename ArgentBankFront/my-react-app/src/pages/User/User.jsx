import "./user.scoped.scss";

import Welcome from "../../components/welcome/welcome.jsx"
import EditUser from "../../components/editUser/userEdit.jsx"
import BankAccount from "../../components/bankAccount/bankAccount.jsx"

import { useState } from "react";

function User(){

const [isActive, setIsActive] = useState(false);

    return (
        <>
            <main className="user">
                {isActive ? (
                    <EditUser firstname="firstName" lastname="lastName"
                    onClick={() => setIsActive(!isActive)}/>   
                ) : (
                    <Welcome firstname="firstName" lastname="lastName"
                    onClick={() => setIsActive(!isActive)}/>
                )}
                <BankAccount />
            </main>
        </>
    )
}

export default User;