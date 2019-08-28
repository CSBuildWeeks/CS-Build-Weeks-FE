import React, {Component} from 'react';
import axios from 'axios';

//
// axios call to /adv/init to initialize world
// display response info

// Create an interface that displays the current room name, its description and the other players in the room


export default class World extends React.Component {
    state = {
        players: ["Outside Cave Entrance", "Rosa's Room"]
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get(`https://lambda-mud-test.herokuapp.com/api/adv/init/`)
            .then(res => {
                console.log('res', res);
                this.setState({ players: res.data });
                console.log('players', res.data)
            }).catch(err => err.res)
    }
    render(){
        return(
            <div>
                <h1>In the world</h1>
                <ul>
                    {this.state.players.map(room => <li>{room.players}</li>)}
                </ul>
            </div>
        )
    }
};

