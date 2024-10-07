// src/components/Login.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import './login.css'; // Ensure this import matches your file structure

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError('');
            window.location.href = "/dashboard";
        } catch (error) {
            setError(error.message);
        }
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = "/dashboard";
        }
    });

    return (
        <div className="login-page">
            <div className="login-image"></div> {/* Background image */}
            <div className="login-form-container">
                <div className="logo">
                    <img src="https://apexadjustinggroup.com/wp-content/uploads/2021/10/234db.png" alt="Apex Adjusting Group Logo" />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button onClick={handleLogin}>Login</button>
                {error && <div className="error-message">{error}</div>}
                <div className="login-footer">
                    &copy; 2024 Apex Adjusting Group. All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Login;
