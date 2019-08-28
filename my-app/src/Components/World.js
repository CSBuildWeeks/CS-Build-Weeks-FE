import React from 'react';
import axios from 'axios';

class World extends React.Component {
    constructor() {
        super();
        this.state = {
            playerName: "",
            roomTitle: "",
            players:"",
            uuid:"",
            description:"",
    }
}
    
    componentDidMount() {
        this.start();
    }

    start = () => {
        const token = localStorage.getItem('token'); 
        console.log('localstorage in the world', localStorage.getItem('token'))
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
                    players: res.data.players,
                    uuid: res.data.uuid,
                    description: res.data.description,
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
                <li>{this.state.uuid}</li>
                <li>{this.state.description}</li>


            </ul>
        )
    }
};

export default World;
