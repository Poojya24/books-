const express = require("express");
const { getBooks, createBooks, getBooksbyId, deleteBookbyId, updateBookbyId } = require("../controller/bookController");

const router = express.Router();
const authmiddleware = require("../middleware/authmiddleware")

router.get("/", getBooks);
router.post("/", authmiddleware, createBooks);
router.get("/:id", getBooksbyId)
router.delete("/:id", authmiddleware, deleteBookbyId);
router.put("/:id", authmiddleware, updateBookbyId);

module.exports = router;