require('dotenv').config()

const mongoose = require('mongoose');

const MONGO_URI = `mongodb+srv://grapevine:${process.env.MONGO_URI}@grapevine.j9mlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to Mongo DB Successfully'))
.catch((err) => console.log(err));

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, require: true, unique: true},
  password: {type: String, require: true },
});

module.exports = mongoose.model('user', userSchema);