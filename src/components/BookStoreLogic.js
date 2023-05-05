import { useState } from 'react';
import AddBook from './AddBook';

const BookStoreLogic = () => {
  const [book, setBook] = useState([
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Seyi Oyemade',
    },
  ]);

  const addBookItem = (title, author) => {
    const newBook = {
      id: 2,
      title,
      author,
    };
    setBook([...book, newBook]);
  };

  return (
    <div>
      <AddBook addBookItem={addBookItem} />
      <button type="button">Remove</button>
    </div>
  );
};

export default BookStoreLogic;
