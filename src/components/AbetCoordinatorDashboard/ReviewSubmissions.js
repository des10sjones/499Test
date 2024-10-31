// src/components/AbetCoordinatorDashboard/ReviewSubmissions.js
import React, { useState } from 'react';
import { submissions } from '../../models/mockData';

function ReviewSubmissions() {
  const [submissionData, setSubmissionData] = useState(submissions);

  const handleReview = (submissionId, status) => {
    const updatedSubmissions = submissionData.map(submission => 
      submission.id === submissionId ? { ...submission, status } : submission
    );
    setSubmissionData(updatedSubmissions);
    alert(`Submission ${submissionId} marked as ${status}`);
  };

  return (
    <div className="section">
      <h3>Review and Approve Submissions</h3>
      <ul>
        {submissionData.map(submission => (
          <li key={submission.id}>
            {submission.title} - Status: {submission.status}
            <button onClick={() => handleReview(submission.id, 'Approved')}>Approve</button>
            <button onClick={() => handleReview(submission.id, 'Needs Revision')}>Needs Revision</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewSubmissions;
