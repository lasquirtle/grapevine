const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const MONGO_URI = `mongodb+srv://grapevine:grapevine@grapevine.j9mlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to Mongo DB Successfully'))
.catch((err) => console.log(err));

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true },
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  admin: {type: Boolean, default: false}
});

userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, SALT_WORK_FACTOR, (error, hash) => {
    this.password = hash;
    next();
  });
});

module.exports = mongoose.model('user', userSchema);