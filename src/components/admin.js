// src/components/Admin.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebaseConfig'; // Import Firebase config

function Admin() {
    // State to manage form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Add user to Firestore
            await setDoc(doc(db, 'users', user.uid), {
                email: email,
                role: role,
                permissions: role === 'admin' ? ['create', 'edit', 'delete'] : ['read']
            });

            console.log('User added successfully');
            // Clear the form
            setEmail('');
            setPassword('');
            setRole('');
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className="admin">
            <h2>Add New User</h2>
            <form id="add-user-form" onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        id="user-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        id="user-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Role:</label>
                    <select
                        id="user-role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        required
                    >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default Admin;
