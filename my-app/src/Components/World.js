import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


class World extends React.Component {
    constructor() {
        super();
        this.state = {
            // playerName: "",
            startingRoom: "",
            // startingPlayers: [],
            // userID:"",
            startingDesc:"",
            // rooms: [],
            currentRoom: "",
            currentDesc: "",
            // currentPlayers: [],
    }
}
    
    componentDidMount() {
        this.start();
        this.move();
    }

    start = () => {
        const token = localStorage.getItem('token'); 
        axios({
            // uncomment when ready for deploy api
            url: `https://lambdamud-cs.herokuapp.com/api/adv/rooms/`,
            // url: `https://lambda-mud-test.herokuapp.com/api/adv/init`,
            method: "GET",
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({ 
                    // playerName: res.data.name,
                    startingRoom: res.data.rooms[0].title,
                    // startingPlayers: res.data.players,
                    userID: res.data.uuid,
                    // startingDesc: res.data.description,
                    startingDesc: res.data.rooms[0].description,
                }); 
                console.log('res in the world', res.data.rooms)  
            })
            .catch(err => {
                console.log('errors', err.response)
            });        
    };

    move = (direction) => {
        const token = localStorage.getItem('token'); 
        console.log('localstorage in the move', localStorage.getItem('token'))
        axios({
            // uncomment this for heruko enpoint:
            url: `https://lambdamud-cs.herokuapp.com/api/adv/move/`,
            // url: `https://lambda-mud-test.herokuapp.com/api/adv/move/`,
            method: "POST",
            headers: {
                Authorization: token
            },
            data: {
                direction: direction
            }
        })
            .then(res => {
                console.log('moving data', res.data);
                this.setState({
                    currentRoom: res.data.title,
                    currentDesc: res.data.description,
                    // currentPlayers: res.data.players
                })
            })
            .catch(err => {
                console.log('errors', err.response)
            });
    };

    // Shorthand for If currentRoom then show currentRoom, if not then show startingRoom info
    render(){
        return(
           <Form> 
                {this.state.currentRoom 
                ? 
                <div>
                    <Legend>You have moved to: </Legend>
                    <p>{this.state.currentRoom}</p>
                    <p>{this.state.currentDesc}</p>
                    {/* <p>Current players in this room: </p>
                    <div>{this.state.currentPlayers.map(player =>(<li>{player}</li>))}</div> */}
                </div> 
                :
                <div className='startRoom'>
                    <Legend>Starting Room: </Legend>
                    {/* <Span>Player ID: {this.state.userID}</Span>
                    <p>Player: {this.state.playerName}</p> */}
                    <Span>Room: {this.state.startingRoom}</Span>
                    <p>{this.state.startingDescription}</p>
                    {/* <div>Players currently in the room: {this.state.startingPlayers.map(player =>(<li>{player}</li>))}</div>   */}
                </div>}
                <div>
                    <button type="button" className="btn north" onClick={() => this.move('n')}>North</button>
                    <button type="button" className="btn south" onClick={() => this.move('s')}>South</button>
                    <button type="button" className="btn east" onClick={() => this.move('e')}>East</button>
                    <button type="button" className="btn west" onClick={() => this.move('w')}>West</button>
                </div>
            </Form>
        )
        
    }
};

export default World;       {/* <Link to='/move'>
      <button type="button" className="btn north">North</button>
      </Link>
      <Link to='/'>
      <button type="button" className="btn south">South</button>
      </Link>
      <Link to='/move'>
      <button type="button" className="btn east">East</button>
      </Link>
      <Link to='/move'>
      <button type="button" className="btn west">West</button>
      </Link>
      </div> */}


      // 1. How to show the information for ONLY current room, with ROOM ID

const Form = styled.form`
width: 40rem;
margin-top: 1rem;
height: 15rem;
border-radius: 8px;
border: 1px solid white;
`
const Span = styled.span`
margin-bottom: 15px;
font-size: 19px;
color: white;
`

const Legend = styled.legend`
font-size: 39px;
margin: 26px;
color: white;
border: 1px solid white;
`

