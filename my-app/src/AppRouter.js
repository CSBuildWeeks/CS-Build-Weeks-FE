import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';


import Login from './components/Login/Login';
import Register from './components/Register/Register';


// const StyledContainer = styled.div`
//   background: #C9E5EB;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
// `;


export default function AppRouter() {

    return <div className="page-view-ui">
        <Switch>
            <Route path='/sign-up' component={Register}/>
            <Route exact path='/' component={Login}/>
            <Route path='/home' component={() => window.location.href = 'https:netifysitehere'}/>
        </Switch>
    </div>
}