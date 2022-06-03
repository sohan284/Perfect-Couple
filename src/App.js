import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Home/Home/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Checkout from './Pages/Home/Checkout/Checkout';
import NotFound from './Pages/NotFound/NotFound';
import RequirAuth from './Pages/Login/Login/RequirAuth/RequirAuth';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
     <Header></Header>
         <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/blog' element={<Blog></Blog>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/checkout' element={
                  <RequirAuth>
                    <Checkout></Checkout>
                  </RequirAuth>
                }></Route>
                <Route path='/service/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
              
                
               
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
