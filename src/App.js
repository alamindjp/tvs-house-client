import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Components/SharedPage/Footer/Footer';
import Header from './Component/Components/SharedPage/Header/Header';
import NotFound from './Component/Components/SharedPage/NotFound/NotFound';
import About from './Component/Pages/About/About';
import Blogs from './Component/Pages/Blogs/Blogs';
import Home from './Component/Pages/Home/Home';
import LogIn from './Component/Pages/LogIn/LogIn';
import ManageProduct from './Component/Pages/ManageProduct/ManageProduct';
import SignUp from './Component/Pages/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/product/:productId' element={<ManageProduct></ManageProduct>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
