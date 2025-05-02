import './App.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './componets/NavBar';
import Footer from './componets/Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { Routes , Route } from 'react-router-dom';
import { Suspense } from "react";
import Loader from './componets/Loader';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Register';
import Login from './pages/Login';
import Check from './pages/Check';
import Profile from './pages/Profile';
import OrderSuccess from './pages/OrderSuccess';
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
import Product from "./pages/Product"


function App() {
  return (
    <>
    <NavBar/>
    <Suspense fallback={<Loader/>}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/checkout' element={<Check/>}/>
        <Route path='/order-success' element={<OrderSuccess/>}/>
        <Route path='/shop/:id' element={<Product/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Suspense>
    </>
  );
}

export default App;
