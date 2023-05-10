import { useSelector, useDispatch } from 'react-redux';
import AddBook from './AddBook';
import BooksList from './BooksList';
import { addBook } from '../redux/books/booksSlice';

const BookStoreLogic = () => {
  const storeBooks = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const addBookItem = (id, title, author) => {
    const newBook = {
      item_id: id,
      title,
      author,
    };
    dispatch(addBook(newBook));
  };

  return (
    <div>
      <BooksList books={storeBooks} />
      <AddBook addBookItem={addBookItem} books={storeBooks} />
    </div>
  );
};

export default BookStoreLogic;
