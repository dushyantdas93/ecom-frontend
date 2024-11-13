
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Category from './pages/Category';
import Cart from './pages/Cart';
import UserDashboard from "./pages/user/UserDashboard";
import Private from './conponents/Routes/Private';
import Forgotpassword from './pages/Auth/Forgotepassword';
import AdminRoute from './conponents/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateCategory from './pages/Admin/CreateCategory';
import CreateProducts from './pages/Admin/CreateProducts';
import Users from './pages/Admin/Users';
import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotepassword" element={<Forgotpassword />} />

      <Route path="/dashboard" element={<Private />}>
        <Route path="" element={<UserDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="orders" element={<Orders/>} />
      </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/create-category" element={<CreateCategory/>} />
        <Route path="admin/create-products" element={<CreateProducts />} />
        <Route path="admin/users" element={<Users />} />
      </Route>

      <Route path="/about" element={<About />} />
      <Route path="/category" element={<Category />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App