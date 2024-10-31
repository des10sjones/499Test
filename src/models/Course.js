// src/models/Course.js
class Course {
    constructor(courseCode, courseName) {
      this.courseCode = courseCode;
      this.courseName = courseName;
      this.courseMaterials = [];
      this.courseAssessmentPlan = null;
      this.clusterAssessmentPlan = null;
    }
  
    addMaterial(material) {
      this.courseMaterials.push(material);
      console.log(`Material added to ${this.courseCode}: ${material.title}`);
    }
  
    removeMaterial(material) {
      this.courseMaterials = this.courseMaterials.filter(m => m !== material);
      console.log(`Material removed from ${this.courseCode}: ${material.title}`);
    }
  }
  
  export default Course;
  