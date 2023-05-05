import PropTypes from 'prop-types';

const BookItem = ({ book }) => (
  <li>
    <span>
      {book.title}
      <br />
      {book.author}
    </span>
    <button type="button">Remove</button>
  </li>
);

BookItem.propTypes = {
  book: PropTypes.isRequired,
};

export default BookItem;
