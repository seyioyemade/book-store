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
      <div className="book-info">
        <p className="action">Action</p>
        <h2>{book.title}</h2>
        <h4>{book.author}</h4>
        <div className="interaction-btns">
          <div><button type="button" className="comment-btn">Comment</button></div>
          <div><button type="button" onClick={removeBookAction} className="remove-btn">Remove</button></div>
          <div><button type="button">Edit</button></div>
        </div>
      </div>
      <div className="completed-div">
        <span className="circle">.</span>
        <div>
          <p className="percent">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progress">
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.isRequired,
};

export default BookItem;
