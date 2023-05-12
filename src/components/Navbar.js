import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Navbar = () => (
  <header>
    <div>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <span className="user"><IoIosPerson /></span>
    </div>
  </header>
);

export default Navbar;
