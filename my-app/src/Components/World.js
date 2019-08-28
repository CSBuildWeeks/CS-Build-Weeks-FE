import React from 'react';
import axios from 'axios';

class World extends React.Component {
    constructor() {
        super();
        this.state = {
            playerName: "",
            roomTitle: "",
            players:""
    }
}
    
    componentDidMount() {
        this.start();
    }

    start = () => {
        const token = localStorage.getItem('token'); 
        axios({
            url: `https://lambda-mud-test.herokuapp.com/api/adv/init`,
            method: "GET",
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({ 
                    playerName: res.data.name,
                    roomTitle: res.data.title,
                    players: res.data.players
                }); 
                console.log('res in the world', res)  
            })
            .catch(err => {
                console.log('errors', err.response)
            });
    };

    render(){
        return(
            <ul>
                <li>{this.state.playerName}</li>
                <li>{this.state.roomTitle}</li>
                <li>{this.state.players}</li>
            </ul>
        )
    }
};

export default World;



//Get the rooms from test server endpoint into a rooms list
//for loop through rooms
// case n:
// if theres a room then go, if not then error message
// case s:
// if theres a room then go, if not then error
// case e: 
// etc... 
// 