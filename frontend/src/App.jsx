import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopContextProvider from './context/shop-context';
import Shop from './pages/Shop';
import SingleProductPage from './pages/SingleProduct';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Signin from './components/Signin';
import Upload from './pages/Upload';
import Admin from './pages/Admin';

import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import ReviewProduct from './components/ReviewProduct';


function App() {

  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/shop' element={<Shop />}  />
            <Route path='/cart' element={<Cart/>} /> 
            <Route path='/product/:id' element={<SingleProductPage />}  />
            <Route path='/signup' element={<Register/>} />
            <Route path='/signin' element={<Signin/>} />
            {/* <Route path='/create' element={<Upload/>} /> */}
            <Route path='/admin' element={<Admin/>} />


            <Route path="/admin/dashboard" element={<Dashboard/>} />
            <Route path="/admin/product" element={<ReviewProduct/>} />
            <Route path="/admin/orders" element={<Orders/>} />
            <Route exact path="/admin" element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  )
}

export default App