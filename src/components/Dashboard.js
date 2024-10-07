// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfig'; // Import auth from firebaseConfig
import { signOut } from 'firebase/auth';
import './Dashboard.css'; // Import the CSS file for styling

function Dashboard() {
  // States to hold data
  const [summary, setSummary] = useState({
    clients: 0,
    openClaims: 0,
    pendingTasks: 0,
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Fetch data from Firebase (replace this with actual fetching logic)
  useEffect(() => {
    // Example: Update mock data (Replace this with Firebase fetching)
    setSummary({ clients: 120, openClaims: 35, pendingTasks: 12 });
    setRecentActivity([
      { description: 'Updated claim #123' },
      { description: 'Added new client: John Doe' },
      { description: 'Sent follow-up email to client' },
      { description: 'Uploaded document for claim #456' },
    ]);
    setNotifications([
      { message: 'Claim #789 is due for review' },
      { message: 'Follow-up with client Jane Smith' },
      { message: 'Pending approval: New client onboarding' },
    ]);
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/'; // Redirect to login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="card">Clients: {summary.clients}</div>
        <div className="card">Open Claims: {summary.openClaims}</div>
        <div className="card">Pending Tasks: {summary.pendingTasks}</div>
      </div>

      {/* Recent Activity Section */}
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          {recentActivity.map((item, index) => (
            <li key={index}>{item.description}</li>
          ))}
        </ul>
      </div>

      {/* Notifications Section */}
      <div className="notifications">
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification.message}</li>
          ))}
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links">
        <button>Add New Client</button>
        <button>Create New Claim</button>
      </div>

      {/* Logout Button */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
