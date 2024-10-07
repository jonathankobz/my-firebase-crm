function loadHeader() {
    const headerHTML = `
        <header>
            <div class="logo">My CRM</div>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="dashboard.html">Dashboard</a></li>
                    <li><a href="admin.html">Admin</a></li>
                    <li><button id="logout-button">Logout</button></li>
                </ul>
            </nav>
        </header>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Add event listener for logout button if necessary
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Add your logout logic here
            console.log('Logging out...');
        });
    }
}

// Export the function so it can be imported in other files
export { loadHeader };
