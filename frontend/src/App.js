import React from "react";
import { ToastContainer } from 'react-toastify';
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/Signup";
import { UserPlatform } from "./screens/UserPlatform";
import LearnPlatform from "./screens/LearnPlatform";
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); 
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

export default function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        
        {/* Protected Route for User Platform */}
        <Route path="user" element={<ProtectedRoute element={<UserPlatform />} />} />
        <Route path="/user/learn" element={<ProtectedRoute element={<LearnPlatform />} />} />
      </Routes>
    </Router>
  );
}
