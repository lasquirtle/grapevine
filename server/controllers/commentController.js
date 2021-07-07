import db from './../models';

const commentController = {};

commentController.post = (req, res) => {
  const {
    text,
    userId,
    postId
  } = req.body;

  const comment = new db.Comment({
    text, 
    _creator: userId,
    _post: postId
  });

  comment.save().then((newComment) => {
    db.Post.findByIdAndUpdate(
      postId,
      {$push: { '_comments': newComment._id }}
      ).then((existingPost => {
        res.status(200).json({
          success: true,
          data: newUser,
          existingPost
        });
      }))
    .catch((err) => next({
      log: `Error in commentController.commentSave: ${err}`, 
      message: 'comment.save error '
      }
};