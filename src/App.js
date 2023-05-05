import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Books from './components/pages/Books';
import Categories from './components/pages/Categories';
import './styles/app.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>
);

export default App;
