import React, { useState }from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom'


const Register = (props) => {

    const [inputs, setInputs] = useState({ password1:'', password2:'', username: ''});

    const registerUser = (newUser) => {
        axios.post(`https://lambda-mud-test.herokuapp.com/api/registration/`,newUser)
  
        .then(res => {
        //   console.log('response.data.token', response.data.token)
          console.log('response', res)
          const token = res.data.key
          localStorage.setItem('token', `Token ${token}`)
          props.history.push('/login')
        })
  
        .catch(error => {
          console.log('ERROR', error.response)
        })
      }

    const handleSubmit = (event) => {
        console.log('UserState: ', inputs)
        if (event) {
            event.preventDefault();
         registerUser(inputs);     
        }
     
    }

    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name] : event.target.value }))
    }

      
    return (
        <Content>
        <Form onSubmit = {handleSubmit}>
            <Legend>Create an Account</Legend>
            <Span>It's free and only takes a minute</Span>
           <div>
   
            <Inputs>
            {/* <label>Enter Your Username</label> */}
                <Inputt                   placeholder="username"
type = 'username' name = 'username' onChange = {handleChange} value = {inputs.username} required/>
            </Inputs>
            <Inputs>
            {/* <label>Password1</label> */}
                <Inputt                   placeholder="password1"
type = 'password1' name = 'password1' onChange = {handleChange} value = {inputs.password1} required/>
            </Inputs>
            <Inputs>
            {/* <label>Password2</label> */}
                <Inputt                   placeholder="password2"
type = 'password2' name = 'password2' onChange = {handleChange} value = {inputs.password2} required/>
            </Inputs>
            </div>
            <Button type = 'submit' >Sign Up</Button>
        </Form>
        <Previous class = "previous">Already Have an Account? <Link to = '/login'>Login Here</Link></Previous>
        </Content>
    )
}

export default Register;

///Styled Components

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
// background: #CAD4DD;
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
