const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MONGO_URI = `mongodb+srv://grapevine:grapevine@grapevine.j9mlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to Mongo DB Successfully'))
.catch((err) => console.log(err));

const userSchema = new Schema({
  username: {type: String, require: true, unique: true},
  password: {type: String, require: true },
  firstName: {type: String, require: true},
  lastName: {type: String, require: true},
  admin: {type: Boolean, default: false}
});

module.exports = mongoose.model('user', userSchema);