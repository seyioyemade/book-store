import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook, removeBookFromAPI } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  const removeBookAction = () => {
    dispatch(removeBook(book.item_id));
    dispatch(removeBookFromAPI(book.item_id));
  };

  return (
    <li>
      <span>
        {book.title}
        <br />
        {book.author}
      </span>
      <button type="button" onClick={removeBookAction}>Remove</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.isRequired,
};

export default BookItem;
