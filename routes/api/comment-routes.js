const router = require('express').Router();
const {
  addComment,
<<<<<<< HEAD
  removeComment,
  addReply,
  removeReply
=======
  removeComment
>>>>>>> f3b0a678453fc33d4c9d29adf238982feac21750
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
<<<<<<< HEAD
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);
=======
router.route('/:pizzaId/:commentId').delete(removeComment);
>>>>>>> f3b0a678453fc33d4c9d29adf238982feac21750

module.exports = router;
