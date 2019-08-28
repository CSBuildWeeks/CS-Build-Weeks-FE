import React, { Component,useState } from 'react';
import axios from 'axios';


const initialUser = {
  username: '',
    password: '',
  }


export default function Login(props) {
    console.log(props)
    const [user, setUser] = useState({ username: "", password: "" })

    function inputHandler(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        console.log(
          "inputHandler",
          event.target.name,
          event.target.value,
          updatedUser
        );
        setUser(updatedUser);
      }
      
    
    function submitHandler(event) {
        event.preventDefault();
        console.log("user state", user);
        
  
        // add heruko api link here:
        axios.post(`https://lambda-mud-test.herokuapp.com/api/login/`, user)
          .then(res => {
              console.log(res.data);
            if (res.status === 200 && res.data) {
              // localStorage.setItem('token', res.data.key)
              const token = res.data.key
              localStorage.setItem('token', `Token ${token}`)
              // localStorage.setItem('Authorization', res.data.key)
              console.log('localstorage', localStorage)
              console.log('res.data.key?', res.data.key)
              props.history.push('/world')
            }
          })
          .catch(err => {
            //setUser({
              //message: 'Authentication failed',
              //user: { ...initialUser }
            //})
            if (err) console.log(err)
          })
      
        }  

return (
    <div className="login-form">
    <div className="container">

    <form onSubmit={submitHandler}>
          <section>
            <h1>Login Page</h1>
          </section>
    <label htmlFor="username">username</label>
    <input className="input" 
        type="text"
        id="username" 
        name="username" required
        placeholder="Enter your username"
        value={user.username}
        onChange={inputHandler}
        />
    
    <label className="label">Password</label>
    <input className="input" 
        type="password"
        id="password" 
        name="password" required 
        placeholder="Enter password"
        value={user.password}
        onChange={inputHandler}
        />
    
    <button type="submit">Submit</button>
    </form>
    {/* {message
          ? (<h4>{message}</h4>)
          : undefined
        } */}
    </div>
</div>
  );
}