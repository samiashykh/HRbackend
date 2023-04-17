const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password:{
    type: String,
    
  },
  source:{
    type: String
  },
  random1:{
    type:String
  },
  record1Names:{
    type:String
  },
  record1Email:{
    type:String
  },
  record1Mobile:{
    type:String
  },
  record1Role:{
    type:String
  },
  record1Date:{
    type:String
  },
  record2Names:{
    type:String
  },
  record2Email:{
    type:String
  },
  record2Mobile:{
    type:String
  },
  record2Role:{
    type:String
  },
  record2Date:{
    type:String
  },
  record3Names:{
    type:String
  },
  record3Email:{
    type:String
  },
  record3Mobile:{
    type:String
  },
  record3Role:{
    type:String
  },
  record3Date:{
    type:String
  },
  // data:{
  //   fullname:{
  //     type:String
  //   },
  //   role:{
  //     typr:String
  //     }
  //     }
  
 
});

module.exports = mongoose.model("User", UserSchema);
