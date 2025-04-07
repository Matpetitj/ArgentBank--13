import "./welcome.scoped.scss"

function Welcoming({onClick}){
    return (
        <>
            <div className="welcomeUser">
                <h1>Welcome back <br /> Tony Jarvis!</h1>
                <button className="editButton" onClick={onClick}>Edit Name</button>
            </div>
        </>
    )
}

export default Welcoming;