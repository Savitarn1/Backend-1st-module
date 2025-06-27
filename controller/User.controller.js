const userModel = require('../model/User.model.js');
const fileService = require('../service/file_upload.service.js');
class UserController {
  async getAllUsers(req, res) {
    try {
      console.log(req.requestTime);
      const users = await userModel.find({});
      return res.status(200).json({ success: true, data: users });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async createUser(req, res) {
    try {
      if (!req.files || !req.files.userImg) {
        return res
          .status(400)
          .json({ success: false, message: 'No file uploaded' });
      }
      const userImg = await fileService.save(req.files.userImg);
      const user = await userModel.create({ ...req.body, userImg });
      console.log(user);
      return res.status(201).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await userModel.findByIdAndDelete(id);
      return res.status(200).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.status(200).json({ success: true, data: updatedUser });
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new UserController();
