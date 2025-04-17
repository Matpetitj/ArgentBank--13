import "./user.scoped.scss";

import Welcome from "../../components/welcome/welcome.jsx"
import EditUser from "../../components/editUser/userEdit.jsx"
import BankAccount from "../../components/bankAccount/bankAccount.jsx"

import { useState } from "react";

function User(){

const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <main className="user">
                {isOpen ? (
                    <EditUser firstname="firstName" lastname="lastName"
                    onClick={() => setIsOpen(!isOpen)}/>   
                ) : (
                    <Welcome firstname="firstName" lastname="lastName"
                    onClick={() => setIsOpen(!isOpen)}/>
                )}
                <BankAccount />
            </main>
        </>
    )
}

export default User;