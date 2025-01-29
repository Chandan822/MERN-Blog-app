import { Link, useNavigate } from "react-router-dom";
import {useContext,useEffect} from 'react';
import {UserContext} from './UserContext'
import { Navigate } from "react-router-dom";

export default function Header(){
  const navigate = useNavigate()
  const {setUserInfo,userInfo}=useContext(UserContext)
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials: 'include',
    
  }).then(response=>(
    response.json())).then(userInfo=>{
      if(userInfo.login){
      setUserInfo(userInfo);}
    });
  ;
},[]);

function logout(){
  fetch('http://localhost:4000/logout',{
    credentials:'include',method:'POST',
  })
  setUserInfo(null);
}

const username=userInfo?.username;


    return(
        <header>
                <Link to="/"className="logo">CARS</Link>
                <nav>
                  {username && (
                    <>
                    <Link to="/create">Create new post</Link>
                    <Link onClick={logout} to="/">Logout</Link>
                    </>
                  )}

                  {!username && (
                    <>
                      <Link to="/login">Login</Link>
                      <Link to="/register">Register</Link>
                    </>
                  )}
                  
                </nav>
        </header>
    );
}