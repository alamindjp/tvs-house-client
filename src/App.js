import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Components/SharedPage/Footer/Footer';
import Header from './Component/Components/SharedPage/Header/Header';
import NotFound from './Component/Components/SharedPage/NotFound/NotFound';
import About from './Component/Pages/About/About';
import Blogs from './Component/Pages/Blogs/Blogs';
import Home from './Component/Pages/Home/Home';
import Inventory from './Component/Pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
