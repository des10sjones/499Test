// src/models/Submission.js
class Submission {
    constructor(material, status = 'Unreviewed') {
      this.material = material;
      this.status = status;
    }
  
    updateStatus(newStatus) {
      this.status = newStatus;
      console.log(`Submission status updated to: ${newStatus}`);
    }
  }
  
  export default Submission;
  