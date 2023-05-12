import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BooksList';
import { addBook, bookData, addBookToAPI } from '../redux/books/booksSlice';

const BookStoreLogic = () => {
  const { loading, books, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookData());
  }, [dispatch]);

  const addBookItem = (id, title, author, category = 'Fiction') => {
    const newBook = {
      item_id: id,
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    dispatch(addBookToAPI(newBook));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <BooksList books={books} />
      <AddBook addBookItem={addBookItem} books={books} />
    </div>
  );
};

export default BookStoreLogic;
