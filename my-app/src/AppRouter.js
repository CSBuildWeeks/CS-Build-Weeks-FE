import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import styled from 'styled-components';


import Login from './Components/Login';
import Register from './Components/Register';
import World from './Components/World';
import Map from './Components/Map';


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
            <Route exact path='/' component={Login}/>
            <Route path='/world' component={World}/>
            <Route path='/map' component={Map} />
        </Switch>
    </div>
}