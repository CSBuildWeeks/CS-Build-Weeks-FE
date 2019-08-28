import React from 'react';
import axios from 'axios';
import World from "../Components/World"

class Move extends React.Component {
    constructor() {
        super();
        this.state = {
            playerName: "",
            roomTitle: "",
            players:"",
            uuid:"",
            description:"",
            rooms: [],
            move: ""
    }
}
    
    componentDidMount() {
        this.start();
    }


    move = () => {
        const token = localStorage.getItem('token'); 
        console.log('localstorage in the world', localStorage.getItem('token'))
        axios({
            url: `https://lambda-mud-test.herokuapp.com/api/adv/move/`,
            method: "POST",
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({ 
                    roomTitle: res.data.title,
                    description: res.data.description,
                }); 
                console.log('Moving in the world', res)  
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
                <li>{this.state.uuid}</li>
                <li>{this.state.description}</li>


            </ul>
        )
    }
};

export default Move;