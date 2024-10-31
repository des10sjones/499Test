// src/components/FacultyDashboard/FacultyDashboard.js
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import AssignedCourses from './AssignedCourses';
import UploadMaterial from './UploadMaterial';
import ToDoList from './ToDoList';
import './FacultyDashboard.css';

function FacultyDashboard() {
  const { logout } = useAuth();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Faculty Dashboard</h2>
        <ul>
          <li><button>Dashboard</button></li>
          <li><button>Assigned Courses</button></li>
          <li><button>Upload Material</button></li>
          <li><button>To-Do List</button></li>
        </ul>
        <button className="logout" onClick={logout}>Logout</button>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="title">Welcome, Faculty Member!</h1>

        {/* Sections */}
        <AssignedCourses />
        <UploadMaterial />
        <ToDoList />
      </div>
    </div>
  );
}

export default FacultyDashboard;
