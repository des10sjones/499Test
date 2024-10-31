// src/models/Template.js
class Template {
    constructor(title, type, content) {
      this.title = title;
      this.type = type;
      this.content = content;
    }
  
    upload() {
      console.log(`Template uploaded: ${this.title}`);
    }
  
    delete() {
      console.log(`Template deleted: ${this.title}`);
    }
  }
  
  export default Template;
  