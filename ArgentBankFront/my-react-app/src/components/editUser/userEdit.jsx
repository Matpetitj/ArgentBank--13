import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../services/APIService";
import { setUser } from "../../Redux/slices/authSlice";

import "./userEdit.scoped.scss"

function UserEdit({ onClick }) {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);

    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await updateUserProfile(token, firstName, lastName);
            dispatch(setUser(updatedUser)); // Met à jour dans Redux
            onClick(); // Ferme le formulaire
        } catch (error) {
            console.error("Erreur lors de la mise à jour :", error);
        }
    };

    return (
        <div className="userEdit">
            <h1 className="editTitle">Welcome back</h1>
            <form className="editForm" onSubmit={handleSubmit}>
                <div className="editFormInputContainer">
                    <div className="editFormInput">
                        <input
                            className="editInput"
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                        <input
                            className="editInput"
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="editButton">
                        <button type="submit" className="editButton">Save</button>
                        <button type="button" className="editButton" onClick={onClick}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserEdit;