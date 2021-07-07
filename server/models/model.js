const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = `mongodb+srv://grapevine:grapevine@grapevine.j9mlk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
.connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to Mongo DB Successfully'))
.catch((err) => console.log(err));


const commentSchema = new Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now},
  _creator: { type: Schema.ObjectId, ref: 'User'},
  _thread: { type: Schema.ObjectId, ref: 'Thread'}
});

const threadSchema = new Schema({
  user: {type: String, required: true},
  title: {type: String, required: true},
  body: {type: String, required: true},
  created_at: {type: Date, default: Date.now},
  comments: [commentSchema]
});

const categorySchema = new Schema({
  title: {type: String, required: true},
  threads: [threadSchema]
})

const autoPopulateCreator = function(next) {
  this.populate({
    path: '_creator',
    select: 'username created -_id'
  });
  next();
}

const Category = mongoose.model('category', categorySchema);

module.exports = { Category }