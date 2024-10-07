// src/components/Header.js
import React from 'react';
import './Header.css'; // Import CSS for styling if you have a separate CSS file

function Header() {
    return (
        <header className="header">
            <h1>My CRM Application</h1>
            <nav>
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/admin">Admin</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
