import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class World extends React.Component {
    constructor() {
        super();
        this.state = {
            playerName: "",
            startingRoom: "",
            startingPlayers:"",
            userID:"",
            startingDescription:"",
            rooms: [],
            currentRoom: "",
    }
}
    
    componentDidMount() {
        this.start();
        this.move();
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
                    startingRoom: res.data.title,
                    startingPlayers: res.data.players,
                    userID: res.data.uuid,
                    startingDescription: res.data.description,
                }); 
                console.log('res in the world', res)  
            })
            .catch(err => {
                console.log('errors', err.response)
            });        
    };

    move = (direction) => {
        const token = localStorage.getItem('token'); 
        console.log('localstorage in the move', localStorage.getItem('token'))
        axios({
            url: `https://lambda-mud-test.herokuapp.com/api/adv/move/`,
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
                })
            })
            .catch(err => {
                console.log('errors', err.response)
            });
    };

    // Shorthand for If currentRoom then show currentRoom, if not then show startingRoom info
    render(){
        return(
           <div> 
                {this.state.currentRoom ? 
                <div>
                    <p>Moved to: {this.state.currentRoom}</p>
                </div> 
                :
                <div className='startRoom'>
                    Starting Room: 
                    <li>{this.state.playerName}</li>
                    <li>{this.state.startingRoom}</li>
                    <li>{this.state.startingPlayers}</li>
                    <li>{this.state.userID}</li>
                    <li>{this.state.startingDescription}</li>
                    
                </div>}
                <div>
                    <button type="button" className="btn north" onClick={() => this.move('n')}>North</button>
                    <button type="button" className="btn south" onClick={() => this.move('s')}>South</button>
                    <button type="button" className="btn east" onClick={() => this.move('e')}>East</button>
                    <button type="button" className="btn west" onClick={() => this.move('w')}>West</button>
                </div>
            </div>
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