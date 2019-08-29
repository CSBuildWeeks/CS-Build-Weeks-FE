import React, { Component,useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom'


const initialUser = {
  username: '',
    password: '',
  }


export default function Login(props) {
    console.log(props)
    const [user, setUser] = useState({ username: "", password: "" })

    function inputHandler(event) {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        // console.log(
        //   "inputHandler",
        //   event.target.name,
        //   event.target.value,
        //   updatedUser
        // );
        setUser(updatedUser);
      }
      
    
    function submitHandler(event) {
        event.preventDefault();
        // console.log("user state", user);
        
  
        // add heruko api link here:
        axios.post(

        // uncomment this for heruko endpoint:
        // `https://lambdamud-cs.herokuapp.com/api/adv/login/`, user
          
        `https://lambda-mud-test.herokuapp.com/api/login/`, user
          )
          .then(res => {
              console.log(res.data);
            if (res.status === 200 && res.data) {
              // localStorage.setItem('token', res.data.key)
              const token = res.data.key
              localStorage.setItem('token', `Token ${token}`)
              // localStorage.setItem('Authorization', res.data.key)
              // console.log('localstorage', localStorage)
              // console.log('res.data.key?', res.data.key)
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
              <Content>
                <div className="container">

          
              <Form onSubmit={submitHandler}>
              <Content>
                    <Legend>
                      Log In to Your Account</Legend>
                      <Span>Welcome Back</Span>
                    </Content>

              {/* <Label htmlFor="username">Username</Label> */}
              <Inputt className="input" 
                  type="text"
                  id="username" 
                  name="username" required
                  placeholder="username"
                  value={user.username}
                  onChange={inputHandler}
                  />
              
              {/* <Label className="label">Password</Label> */}
              <Inputt className="input" 
                  type="password"
                  id="password" 
                  name="password" required 
                  placeholder="password"
                  value={user.password}
                  onChange={inputHandler}
                  />
                          {/* </Inputs> */}

              <Button type="submit">Submit</Button>
              </Form>
              </div>
              {/* {message
                    ? (<h4>{message}</h4>)
                    : undefined
                  } */}
              {/* </div> */}
              <Previous class = "previous">Need an account? <Link to = '/sign-up'>Sign Up </Link></Previous>
          </Content>
            );
          }
                  


{/* Styled Components */}

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 5px;
margin:5px;
border-radius: 8px;
color: #343028;
font-size: 20px;
width: 40rem;
margin-top: 7rem;
border-bottom: 2px solid #343028;


`
const Legend = styled.legend`
font-size: 39px;
margin: 26px;
color: white;
`

const Button = styled.button`
border-radius: 8px;
border: none;
color: white;
padding: 15px 32px;
margin: 15px;
margin-top: 15px;
background: #343028
font-size: 1rem;
`
const Inputs = styled.div`
margin: 5px;
display: flex;
flex-direction: column;
// border-bottom: 2px solid #343028;
color: white;

`

const Label = styled.div`
margin: 5px;
color: #white;


`
const Inputt = styled.input`
// border: solid 1.8px #aacddf;
// border-radius: 8px;
// width: 27rem;
// height: 2rem;
padding: 0.5em;
margin: 0.5em;
color: #343028;
background: papayawhip;
border: none;
border-radius: 8px;
`

const Span = styled.span`
margin-bottom: 15px;
font-size: 19px;
color: white;

`
const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const Previous = styled.div`
text-align: center;
margin-top: 30px;
margin-bottom: 6rem;
font-size: 18px;
color: #white;

`

