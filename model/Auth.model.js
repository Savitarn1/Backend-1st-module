const {Schema , model} = require('mongoose');

const AuthSchema = Schema({
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  },
  isActivated: {
    type:Boolean,
    default:false
  }
},{timestamps : true});

module.exports = model("Auth", AuthSchema);