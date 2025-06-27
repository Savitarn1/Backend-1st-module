const {Schema , model} = require('mongoose');

const UserSchema = Schema({
  name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password : {
    type : String,
    required : true
  },
  isAdmin : {
    type : Boolean,
    default : false
  },
  userImg:{
    type : String
  }
})

const userModel = model('User', UserSchema);

module.exports = userModel;