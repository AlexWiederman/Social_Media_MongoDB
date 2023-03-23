const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createCourse,
  updateCourse,
  deleteCourse,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getCourses).post(createCourse);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').get()

// /api/thoughts/:thoughtId/reactions/:reactionId

router.route('/:thoughtId/reactions/:reactionId').delete(removeFriend).post(addFriend);


module.exports = router;
