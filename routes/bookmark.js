const router = require("express").Router();
const bookmarkController = require("../controllers/bookmarkController");
const { verifyTokenAndAuthorization, verifyToken } = require("../middleware/verifyToken");

// CREATE BOOKMARKS
router.post("/", verifyTokenAndAuthorization, bookmarkController.createBookmark);

// DELETE BOOKMARKS
router.delete("/:id", verifyTokenAndAuthorization, bookmarkController.deleteBookmark);

// GET BOOKMARKS
router.get("/", verifyTokenAndAuthorization, bookmarkController.getBookmarks);

module.exports = router
