// src/components/AbetCoordinatorDashboard/AbetDashboard.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import AssignCourse from './AssignCourse';
import ReviewSubmissions from './ReviewSubmissions';
import CreateSemester from './CreateSemester';
import './Dashboard.css';

function AbetDashboard() {
  const { logout } = useAuth();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>ABET Coordinator Dashboard</h2>
        <ul>
          <li><button>Dashboard</button></li>
          <li><button>Semester Management</button></li>
          <li><button>Course Assignment</button></li>
          <li><button>Submission Review</button></li>
        </ul>
        <button className="logout" onClick={logout}>Logout</button>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Welcome, ABET Coordinator!</h1>

        {/* Sections */}
        <AssignCourse />
        <ReviewSubmissions />
        <CreateSemester />
      </div>
    </div>
  );
}

export default AbetDashboard;
