import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Components/SharedPage/Footer/Footer';
import Header from './Component/Components/SharedPage/Header/Header';
import NotFound from './Component/Components/SharedPage/NotFound/NotFound';
import About from './Component/Pages/About/About';
import AddInventory from './Component/Pages/AddInventory/AddInventory';
import Blogs from './Component/Pages/Blogs/Blogs';
import Home from './Component/Pages/Home/Home';
import Inventories from './Component/Pages/Inventories/Inventories';
import LogIn from './Component/Pages/LogIn/LogIn';
import RequireAuth from './Component/Pages/LogIn/RequireAuth/RequireAuth';
import ManageProduct from './Component/Pages/ManageProduct/ManageProduct';
import MyItems from './Component/Pages/MyItems/MyItems';
import SignUp from './Component/Pages/SignUp/SignUp';
import UpdateProduct from './Component/Pages/UpdateProduct/UpdateProduct';

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
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/product/:productId' element={
          <RequireAuth>
            <UpdateProduct></UpdateProduct>
          </RequireAuth>
        }></Route>
        <Route path='/addInventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>
        }></Route>
        <Route path='/manageProduct' element={
          <RequireAuth>
            <ManageProduct></ManageProduct>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
