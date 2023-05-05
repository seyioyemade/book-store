const AddBook = () => {
  return (
    <>
      <form>
        <input type="text" placeholder="Add Book..." />
        <select name="authors">
          <option value="Seyi Oyemade">Seyi Oyemade</option>
        </select>
        <button>ADD BOOK</button>
      </form>
    </>
  );
}
 
export default AddBook;