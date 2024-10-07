import React from 'react';
import './Dashboard.css'; // Optional: Create a CSS file to style your dashboard

function Dashboard() {
  // Static mock data for demonstration
  const summary = {
    clients: 120,
    openClaims: 35,
    pendingTasks: 12,
  };

  const recentActivity = [
    { description: 'Updated claim #123' },
    { description: 'Added new client: John Doe' },
    { description: 'Sent follow-up email to client' },
    { description: 'Uploaded document for claim #456' },
  ];

  const notifications = [
    { message: 'Claim #789 is due for review' },
    { message: 'Follow-up with client Jane Smith' },
    { message: 'Pending approval: New client onboarding' },
  ];

  return (
    <div className="dashboard">
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
    </div>
  );
}

export default Dashboard;
