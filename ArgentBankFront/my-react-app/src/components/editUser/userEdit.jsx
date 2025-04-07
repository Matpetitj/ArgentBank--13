import "./userEdit.scoped.scss";

function UserEdit ({onClick}){
    return (
        <>
            <div className="userEdit">
                <h1 className="userTitle">Welcome back</h1>
                <form className="editForm">
                    <div className="editFormInputContainer">
                        <div className="editFormInput">
                            <input className="editInput"
                            id="userFirstname"
                            type="text"
                            placeholder="prenom"
                            // value={}
                            // onChange={}
                            required={true}
                            />
                            <input className="editInput"
                            id="userLastname"
                            type="text"
                            placeholder="nom"
                            // value={}
                            // onChange={}
                            required={true}
                            />
                        </div>
                        <div className="editButton">
                            <button type="submit" className="editButton">
                                Save
                            </button>
                            <button className="editButton"
                            onClick={onClick}
                            type="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserEdit;