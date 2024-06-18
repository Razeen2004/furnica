import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import ShopContextProvider from './context/shop-context';
import Shop from './pages/Shop';
import SingleProductPage from './pages/SingleProduct';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Signin from './components/Signin';


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
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  )
}

export default App