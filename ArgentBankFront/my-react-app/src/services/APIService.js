// APIService.js

const BASE_URL = 'http://localhost:3001/api/v1'; // URL de base de l'API

// Fonction de connexion (POST) → envoie email + password et retourne un token
export async function loginUser(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/user/login`, { // appel à l'endpoint de login
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // on précise qu'on envoie du JSON
            },
            body: JSON.stringify({ // on envoie email et mdp sous forme de JSON
                email,
                password,
            }),
        });

        if (!response.ok) { // vérification de la réponse HTTP
            throw new Error('Erreur lors de la connexion');
        }

        const data = await response.json(); // transformation de la réponse en JSON

        return data.body.token; // on retourne uniquement le token récupéré
    } catch (error) {
        console.error("Erreur de login :", error); // en cas d'erreur réseau ou autre
        throw error;
    }
}

// Fonction pour récupérer les infos utilisateur (POST) → nécessite un token
export async function getUserProfile(token) {
    try {
        const response = await fetch(`${BASE_URL}/user/profile`, { // appel à l'endpoint profil
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // le token doit être passé en header
            }
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération du profil');
        }

        const data = await response.json(); // transformation de la réponse en JSON

        return data.body; // on retourne les infos utilisateur (firstName, lastName, etc.)
    } catch (error) {
        console.error("Erreur lors du fetch du profil :", error); // en cas d'erreur
        throw error;
    }
}

export async function updateUserProfile(token, firstName, lastName) {
    try {
        const response = await fetch(`${BASE_URL}/user/profile`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                firstName,
                lastName
            }),
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la mise à jour du profil');
        }

        const data = await response.json();
        return data.body; // les nouvelles données renvoyées
    } catch (error) {
        console.error("Erreur lors de la mise à jour du profil :", error);
        throw error;
    }
}