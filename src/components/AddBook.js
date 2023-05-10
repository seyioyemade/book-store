import { useState } from 'react';
import PropTypes from 'prop-types';

const AddBook = ({ addBookItem, books }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && (author !== '')) {
      if (books.length <= 0) {
        addBookItem('item1', title, author);
        setTitle('');
      } else if (books.length > 0) {
        const lastItemID = books[books.length - 1].item_id;
        const lastItemIDToNum = Number(lastItemID.substring(lastItemID.length - 1));
        addBookItem(`item${lastItemIDToNum + 1}`, title, author);
        setTitle('');
      }
    } else {
      setMessage('Please add item.');
    }
  };

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSelectChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          placeholder="Add Book..."
          onChange={handleInputChange}
        />
        <select name="authors" onChange={handleSelectChange}>
          <option value="" disabled selected>Author</option>
          <option value="Seyi Oyemade">Seyi Oyemade</option>
          <option value="Blessing Otario">Blessing Otario</option>
          <option value="James Spiner">James Spiner</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
      <span className="submit-warning">{message}</span>
    </>
  );
};

AddBook.propTypes = {
  addBookItem: PropTypes.isRequired,
  books: PropTypes.isRequired,
};

export default AddBook;
