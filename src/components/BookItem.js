import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const BookItem = ({ book }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>
        {book.title}
        <br />
        {book.author}
      </span>
      <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>Remove</button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.isRequired,
};

export default BookItem;
