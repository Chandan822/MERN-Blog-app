import { useState } from "react";

export default function Registerpage(){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    async function register(ev){
        ev.preventDefault();
        console.log('Submitting registration form...');
        try{
        const response=await fetch("http://localhost:4000/register",{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })
        if(response.status==200){
            alert('registration successful!');
        }
        else{
            alert('registration failed,try again later');
        }
    }
    catch (error) {
        setErrorMessage('Error occurred while connecting to the server. Please try again.');
        console.error('Fetch error: ', error);
    }
    }

    return(
            <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" 
                    placeholder="username"
                    value={username} 
                    onChange={ev =>{setUsername(ev.target.value)}}></input>

            <input type="password" 
                    placeholder="password"
                    value={password}
                    onChange={ev =>{setPassword(ev.target.value)}}></input>
            <button>Register</button>
        </form>
     
    );
}