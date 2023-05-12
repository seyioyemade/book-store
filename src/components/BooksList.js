import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BooksList = ({ books }) => (
  <ul>
    {books?.map((book) => (
      <BookItem key={book.id} book={book} />
    ))}
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.isRequired,
};

export default BooksList;
