import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';


import Login from './Components/Login';
import Register from './Components/Register';
import World from './Components/World';
<<<<<<< HEAD
=======

>>>>>>> 434414d1efc5396f671f26f25442f0308b7fa207
import Move from './Components/Move';


// const StyledContainer = styled.div`
//   background: #C9E5EB;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
// `;


export default function AppRouter() {

    return <div className="page-view-ui">
        <Switch>
            <Route path='/register' component={Register}/>
            <Route exact path='/login' component={Login}/>
            <Route path='/home' component={() => window.location.href = 'https:netifysitehere'}/>
            <Route path='/world' component={World}/>
            <Route path='/move' component={Move}/>
        </Switch>
    </div>
}