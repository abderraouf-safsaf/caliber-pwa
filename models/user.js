var mongoose = require('mongoose')
var Schema = mongoose.Schema

var User = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
      },
}, {timestamps: true});

User.method({
  validPassword: function (pass)  {
    console.log("is right? = " + (this.password == pass));
  }
})


User.static({

})

mongoose.model('user', User)