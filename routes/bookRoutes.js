const express = require("express");
const {
  getBooks,
  createBooks,
  getBooksbyId,
  updateBookbyId,
  deleteBookbyId
} = require("../controller/bookController");

const authmiddleware = require("../middleware/authmiddleware");

const router = express.Router();
 
router.get("/", getBooks);
router.get("/:id", getBooksbyId);

  
router.post("/", authmiddleware, createBooks);
router.put("/:id", authmiddleware, updateBookbyId);
router.delete("/:id", authmiddleware, deleteBookbyId);

module.exports = router;
