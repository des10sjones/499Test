// src/models/CourseAssessmentPlan.js
class CourseAssessmentPlan {
    constructor(course, assessmentCriteria, clusterAssessment = false) {
      this.course = course;
      this.assessmentCriteria = assessmentCriteria;
      this.clusterAssessment = clusterAssessment;
    }
  
    createAssessment() {
      console.log(`Assessment created for course: ${this.course.courseCode}`);
    }
  
    updateAssessment(newCriteria) {
      this.assessmentCriteria = newCriteria;
      console.log(`Assessment updated for course: ${this.course.courseCode}`);
    }
  }
  
  export default CourseAssessmentPlan;
  