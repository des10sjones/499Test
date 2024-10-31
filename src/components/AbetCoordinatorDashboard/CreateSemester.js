// src/components/AbetCoordinatorDashboard/CreateSemester.js
import React, { useState } from 'react';
import { semesters } from '../../models/mockData';

function CreateSemester() {
  const [semesterName, setSemesterName] = useState('');
  const [allSemesters, setAllSemesters] = useState(semesters);

  const handleCreateSemester = () => {
    if (semesterName) {
      const newSemester = { id: allSemesters.length + 1, name: semesterName, courses: [] };
      setAllSemesters([...allSemesters, newSemester]);
      setSemesterName('');
      alert(`Created new semester: ${newSemester.name}`);
    } else {
      alert('Please enter a semester name');
    }
  };

  return (
    <div className="section">
      <h3>Create Semester</h3>
      <input
        type="text"
        placeholder="Semester Name"
        value={semesterName}
        onChange={(e) => setSemesterName(e.target.value)}
      />
      <button onClick={handleCreateSemester}>Create Semester</button>

      <h4>Existing Semesters</h4>
      <ul>
        {allSemesters.map(semester => (
          <li key={semester.id}>{semester.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CreateSemester;
