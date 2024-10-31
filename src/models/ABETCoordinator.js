// src/models/ABETCoordinator.js
import Faculty from './Faculty';

class ABETCoordinator extends Faculty {
  constructor(username, password) {
    super(username, password);
    this.role = 'ABETCoordinator';
  }

  assignCourseToFaculty(course, faculty) {
    // Logic to assign a course to a faculty member
    console.log(`Assigned course ${course} to ${faculty.username}`);
  }

  createSemester(semester) {
    // Logic to create a new semester
    console.log('Semester created:', semester);
  }

  uploadTemplate(template) {
    // Logic to upload a template
    console.log('Template uploaded:', template);
  }

  reviewSubmission(submission) {
    // Logic to review and update submission status
    console.log('Submission reviewed:', submission);
  }

  sendNotifications(faculty, message) {
    // Logic to send a notification to faculty
    console.log(`Notification sent to ${faculty.username}: ${message}`);
  }
}

export default ABETCoordinator;
