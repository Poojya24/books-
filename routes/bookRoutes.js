 const express = require("express");
const {
  getBooks,
  createBooks,
  getBooksbyId,
  deleteBookbyId,
  updateBookbyId
} = require("../controller/bookController");

const router = express.Router();

router.get("/", getBooks);
router.post("/", createBooks);
router.get("/:id", getBooksbyId);
router.delete("/:id", deleteBookbyId);
router.put("/:id", updateBookbyId);

module.exports = router;
