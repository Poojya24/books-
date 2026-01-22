const Book = require("../models/Books"); // ✅ model
const mongoose=require("mongoose")
const getBooks = async (req, res) => {
  try {
    const books = await Book.find(); // ✅ data
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};

const getBooksbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) { return res.status(404).json({ error: "book not found by id" }) }
    res.status(200).json(book);


  } catch (error) {
    res.status(400).json({ error: "invalid book id" })
  }
}

const createBooks = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBookbyId = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) { return res.status(400).json({ error: "book not found" }) }

    res.status(200).json({ message: `book of ${id} deleted` })
  }
  catch (error) {

    res.status(500).json({ error: error.message })


  }
}
  const updateBookbyId = async (req, res) => {

    try {

      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "id not found" })
      }


        const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!book) { return res.status(400).json({ error: "book not found" }) ;
    }
      res.status(200).json(book);


      } catch (error) {res.status(500).json({error:error.message})
      
    }
      

 
};

  module.exports = { getBooks, createBooks, getBooksbyId, deleteBookbyId, updateBookbyId } ;
