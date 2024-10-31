// src/components/FacultyDashboard/UploadMaterial.js
import React, { useState } from 'react';
import { facultyCourses } from '../../models/mockData';

function UploadMaterial() {
  const [selectedCourse, setSelectedCourse] = useState(facultyCourses[0].courseCode);
  const [materialTitle, setMaterialTitle] = useState('');
  const [materialType, setMaterialType] = useState('');

  const handleUpload = () => {
    alert(`Uploaded ${materialTitle} (${materialType}) to ${selectedCourse}`);
    setMaterialTitle('');
    setMaterialType('');
  };

  return (
    <div className="section">
      <h3>Upload Course Material</h3>
      <select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
        {facultyCourses.map(course => (
          <option key={course.courseCode} value={course.courseCode}>
            {course.courseName}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Material Title"
        value={materialTitle}
        onChange={(e) => setMaterialTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Material Type (e.g., Exam, Handout)"
        value={materialType}
        onChange={(e) => setMaterialType(e.target.value)}
      />

      <button onClick={handleUpload}>Upload Material</button>
    </div>
  );
}

export default UploadMaterial;
