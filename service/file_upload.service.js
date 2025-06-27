const { v4: uuidv4 } = require('uuid');
const fs = require('fs/promises');
const path = require('path');

class FileService {
  async save(file) {
    try {
      const fileName = uuidv4() + path.extname(file.name);
      const currentDir = __dirname;
      const staticDir = path.join(currentDir, '..', 'static');
      const filePath = path.join(staticDir, fileName);

      await fs.mkdir(staticDir, { recursive: true });
      await file.mv(filePath);

      return fileName;

    } catch (error) {
      throw new Error(`Error saving file: ${error.message}`);
    }
  }
}
module.exports = new FileService();
