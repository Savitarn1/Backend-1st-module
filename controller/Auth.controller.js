const AuthModel = require('../model/Auth.model.js');
const bcrypt = require('bcrypt');

class AuthController {
  async registr(req, res, next) {
    try {
      const { email, password } = req.body;
      const existUser = await AuthModel.findOne({ email });

      if (existUser) throw new Error(`User email ${email} already exist`);

      const hashPassword = await bcrypt.hash(password, 10);
      const user = await AuthModel.create({ email, password: hashPassword });
      return res.status(201).json({ success: true, data: user });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }

  async activation(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await AuthModel.findById(userId);

      if (!user) throw new Error('User is not defined');

      user.isActivated = true;
      await user.save();
      return res.status(200).json({ success: true, message: 'User activated' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
  }
}

module.exports = new AuthController();
