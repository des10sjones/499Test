// src/models/Faculty.js
import User from './User';

class Faculty extends User {
  constructor(username, password) {
    super(username, password, 'Faculty');
    this.assignedCourses = [];
  }

  uploadMaterial(material) {
    // Logic to upload material for assigned courses
    console.log('Material uploaded:', material);
  }

  viewToDoList() {
    // Logic to retrieve and view the to-do list
    console.log('Viewing to-do list');
  }
}

export default Faculty;
