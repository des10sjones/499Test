// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import AbetDashboard from './components/AbetCoordinatorDashboard/AbetDashboard';
import FacultyDashboard from './components/FacultyDashboard/FacultyDashboard';
import LoginPage from './components/LoginPage';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            user ? (
              user.role === 'ABET Coordinator' ? (
                <AbetDashboard />
              ) : (
                <FacultyDashboard />
              )
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
