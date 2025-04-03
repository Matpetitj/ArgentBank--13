import "./welcome.scoped.scss"

function Welcoming(){
    return (
        <>
            <div className="welcomeUser">
                <h1>Welcome back <br /> Tony Jarvis</h1>
                <button className="userEditButton">Edit Name</button>
            </div>
        </>
    )
}

export default Welcoming;