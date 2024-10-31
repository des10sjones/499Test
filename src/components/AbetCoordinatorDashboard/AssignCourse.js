// src/components/AbetCoordinatorDashboard/AssignCourse.js
import React, { useState } from 'react';
import { courses, users } from '../../models/mockData';

function AssignCourse() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].courseCode);
  const [selectedFaculty, setSelectedFaculty] = useState(users.faculty1.username);

  const handleAssign = () => {
    alert(`Assigned ${selectedCourse} to ${selectedFaculty}`);
    // Here you would update the backend or mockData.js to reflect the assignment.
  };

  return (
    <div className="section">
      <h3>Assign Course to Faculty</h3>
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        {courses.map(course => (
          <option key={course.courseCode} value={course.courseCode}>
            {course.courseName}
          </option>
        ))}
      </select>

      <select value={selectedFaculty} onChange={(e) => setSelectedFaculty(e.target.value)}>
        {[users.faculty1, users.faculty2].map(faculty => (
          <option key={faculty.username} value={faculty.username}>
            {faculty.username}
          </option>
        ))}
      </select>

      <button onClick={handleAssign}>Assign Course</button>
    </div>
  );
}

export default AssignCourse;
