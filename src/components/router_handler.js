import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import About from '../pages/about';
import NotMatch from '../pages/not_match';
import Navbar from './nav_bar';

const RouterHandler = () => (
  <>

    <BrowserRouter>

      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>

  </>

);

export default RouterHandler;
