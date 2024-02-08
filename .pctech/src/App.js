import {Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Register from './pages/Auth/Register';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Policy from './pages/Policy';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login.js';
import Dashboard from './pages/user/dashboard';
import PrivateRoute from './components/routes/private';
import ForgotPassword from './pages/Auth/forgotPassword';
import AdminRoute from './components/routes/adminRoute';
import AdminDashboard from './pages/admin/AdminDashboard';
import Users from './pages/admin/Users';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Order from './pages/user/Orders';
import Profile from './pages/user/Profile';
import Products from './pages/admin/Products';
import UpdateProduct from './pages/admin/UpdateProduct';
import Search from "./pages/Search.js"
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';
import AdminOrders from './pages/admin/AdminOrders';


function App() {
  return (
    <>
  
 <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/register" element={<Register />} />
   <Route path="/product/:slug" element={<ProductDetails />} />
   <Route path="/categories" element={<Categories />} />
   <Route path="/category/:slug" element={<CategoryProduct />} />
   <Route path="/cart" element={<CartPage />} />
   <Route path="/search" element={<Search />} />
   {/* private User routes start  */}
   <Route path ="/dashboard" element= {<PrivateRoute />}>
   <Route path="user" element={<Dashboard />} />
   <Route path="user/orders" element={<Order />} />
   <Route path="user/profile" element={<Profile />} />
   </Route>
   {/* private User routes end */}
   {/* private Admin routes start  */}
   <Route path ="/dashboard" element= {<AdminRoute />}>
   <Route path="admin" element={<AdminDashboard />} />
   <Route path="admin/create-category" element={<CreateCategory />} />
   <Route path="admin/create-product" element={<CreateProduct />} />
   <Route path="admin/products" element={<Products />} />
   <Route path="admin/product/:slug" element={<UpdateProduct />} />
   <Route path="admin/orders" element={<AdminOrders />} />
   <Route path="admin/users" element={<Users />} />
   </Route>
   {/* private Admin routes end */}

   <Route path="/login" element={<Login />} />
   <Route path="/forgot-password" element={<ForgotPassword />} />
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />} />
   <Route path="/policy" element={<Policy />} />
   <Route path="*" element={<PageNotFound />} />
 </Routes>
      
    </>
  );
}

export default App;
