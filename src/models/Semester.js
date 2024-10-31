// src/models/Semester.js
class Semester {
    constructor(semesterName) {
      this.semesterName = semesterName;
      this.courses = [];
    }
  
    addCourse(course) {
      this.courses.push(course);
      console.log(`Course added to ${this.semesterName}: ${course.courseCode}`);
    }
  
    removeCourse(course) {
      this.courses = this.courses.filter(c => c !== course);
      console.log(`Course removed from ${this.semesterName}: ${course.courseCode}`);
    }
  }
  
  export default Semester;
  