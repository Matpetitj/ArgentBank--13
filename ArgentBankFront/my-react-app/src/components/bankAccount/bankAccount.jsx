import "./bankAccount.scoped.scss";

function BankAccount(){
    return (
        <>
            <section className="userBankAccountContainer">
                <div className="userBankAccount">
                    <h3 className="userBankTitle">Argent Bank Checking (x8349)</h3>
                    <p className="userBankAccountAmount">$2,082.79</p>
                    <p className="userBankAccountState">Available Balance</p>
                </div>
                <div className="userBankAccountButton">
                    <button>View transactions</button>
                </div>
            </section>
            <section className="userBankAccountContainer">
                <div className="userBankAccount">
                    <h3 className="userBankTitle">Argent Bank Savings (x6712)</h3>
                    <p className="userBankAccountAmount">$10,928.42</p>
                    <p className="userBankAccountState">Available Balance</p>
                </div>
                <div className="userBankAccountButton">
                    <button>View transactions</button>
                </div>
            </section>
            <section className="userBankAccountContainer">
                <div className="userBankAccount">
                    <h3 className="userBankTitle">Argent Bank Credit Card (x8349)</h3>
                    <p className="userBankAccountAmount">$184.30</p>
                    <p className="userBankAccountState">Current Balance</p>
                </div>
                <div className="userBankAccountButton">
                    <button>View transactions</button>
                </div>
            </section>
        </>
    )
}

export default BankAccount;