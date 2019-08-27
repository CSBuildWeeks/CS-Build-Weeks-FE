import React, { Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';

/*********************** Styles ****************************************/

const DivWrapper = styled.div`

`;


/******************************** Components ***************************/

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            // email: "",
            password1: "",
            password2: "",
            // password_confirmation: "",
            registrationErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log('in submit')
        const test = 'https://lambda-mud-test.herokuapp.com';
        // const {
        //     username,
        //     password1,
        //     password2,
        //     email
        //     // password_confirmation
        // } = this.state;
        e.preventDefault();

        axios({
            url: `${test}/api/registration/`,
            method: 'POST',
            data: {
                username: `${this.state.username}`,
                // email: `${this.state.email}`,
                password1: `${this.state.password1}`,
                password2: `${this.state.password2}`
                // password_confirmation: password_confirmation
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log("registration res", res);
            // const token = response.data["key"];
            // localStorage.setItem("token", `Token ${token}`);
            // this.props.history.push('/adventure');
        }).catch(err => {
            console.log('registration error', err.res);
        });
        
    };

    render() {
        return (
            <DivWrapper>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='username' 
                        name='username' 
                        placeholder="Username" 
                        value = {this.state.username} 
                        onChange={this.handleChange} 
                        required
                    />
                    {/* <input 
                        type='email' 
                        name='email' 
                        placeholder="E-mail" 
                        value = {this.state.email} 
                        onChange={this.handleChange} 
                    /> */}
                    <input 
                        type='password' 
                        name='password1' 
                        placeholder="Password1" 
                        value = {this.state.password1} 
                        onChange={this.handleChange} 
                        required
                    />
                    <input 
                        type='password' 
                        name='password2' 
                        placeholder="Password2" 
                        value = {this.state.password2} 
                        onChange={this.handleChange} 
                        required
                    />
                    {/* <input 
                        type='password' 
                        name='password_confirmation' 
                        placeholder="Password Confirmation" 
                        value = {this.state.password_confirmation} 
                        onChange={this.handleChange} 
                        required
                    /> */}
                    <button type='submit'>Register</button>
                </form>
            </DivWrapper>);
    }
};