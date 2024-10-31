// src/components/FacultyDashboard/AssignedCourses.js
import React from 'react';
import { facultyCourses } from '../../models/mockData';

function AssignedCourses() {
  return (
    <div className="section">
      <h3>Assigned Courses</h3>
      <ul>
        {facultyCourses.map(course => (
          <li key={course.courseCode}>
            {course.courseName} ({course.courseCode})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssignedCourses;
