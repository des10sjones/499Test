// src/models/Material.js
class Material {
    constructor(title, type, content) {
      this.title = title;
      this.type = type;
      this.content = content;
    }
  
    upload() {
      console.log(`Material uploaded: ${this.title}`);
    }
  
    delete() {
      console.log(`Material deleted: ${this.title}`);
    }
  }
  
  export default Material;
  