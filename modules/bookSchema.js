const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/books")
  .then(() => console.log("connecting to mongodb!"))
  .catch((err) => console.error("Could not connect to mongodb", err));

const bookSchema = mongoose.Schema({
  title: String,
  isbn: String,
  pageCount: Number,
  publishedDate: Date,
  thumbnailUrl: String,
  status: String,
  authors: [String],
  categories: [String],
});

// create Book model
const Book = mongoose.model("books", bookSchema);

module.exports = Book;
