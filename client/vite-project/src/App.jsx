import './App.css'
import React from 'react';
import Post from "./post"
import Header from "./header"
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Homepage from './pages/homepage';
import Loginpage from './pages/login';
import Registerpage from './pages/register';
import { UserContextProvider } from './UserContext';
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";


function App() {
  return (
    <UserContextProvider>
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="/login" element={<Loginpage/>}/>
        <Route path="/register" element={<Registerpage/>}/>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Route>
    </Routes>
    </UserContextProvider>

    
    

    
  );
}

export default App;
