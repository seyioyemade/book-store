import { useState } from 'react';
import AddBook from './AddBook';
import BooksList from './BooksList';

const BookStoreLogic = () => {
  const [books, setBook] = useState([
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Seyi Oyemade',
    },
    {
      id: 2,
      title: 'The Future',
      author: 'Blessing Otario',
    },
  ]);

  const addBookItem = (title, author) => {
    const newBook = {
      id: 3,
      title,
      author,
    };
    setBook([...books, newBook]);
  };

  return (
    <div>
      <BooksList books={books} />
      <AddBook addBookItem={addBookItem} />
    </div>
  );
};

export default BookStoreLogic;
