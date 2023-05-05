const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Book..." />
      <select name="authors">
        <option value="" disabled selected>Author</option>
        <option value="Seyi Oyemade">Seyi Oyemade</option>
        <option value="Blessing Otario">Blessing Otario</option>
        <option value="James Spiner">James Spiner</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

export default AddBook;
