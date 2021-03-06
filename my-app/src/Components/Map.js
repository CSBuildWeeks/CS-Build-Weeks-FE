import React from 'react';
import axios from 'axios';

// Use this component to draw the map with a for loop

class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            rooms : [],
    }
}
    
    componentDidMount() {
        this.map();
        // this.move() - "moved to World Component"
    }

   
    map = () => {
        const token = localStorage.getItem('token'); 
        axios({
            
            // uncomment this for heruko endpoint:
            url: `https://lambdamud-cs.herokuapp.com/api/adv/rooms/`,

            // url: `https://lambda-mud-test.herokuapp.com/api/adv/rooms/`,
            method: "GET",
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                this.setState({ 
                    rooms: res.data.rooms,
                    // rooms: JSON.parse(res.data.rooms),
                    // uncomment for deployed:
                    // rooms: res.data.room),

                    // id: res.data.rooms.pk,
                    // roomTitle: res.data.rooms.fields.title,
                    // roomDesc: res.data.rooms.fields.description
                }); 
                console.log('res in the map', JSON.parse(res.data.rooms)) 
                console.log('res rooms objects', res.data.rooms) 
            })
            .catch(err => {
                console.log('errors', err.response)
            });
    };

    // Moved to World Component

    // move = (direction) => {
    //     const token = localStorage.getItem('token'); 
    //     console.log('localstorage in the move', localStorage.getItem('token'))
    //     axios({
    //         url: `https://lambda-mud-test.herokuapp.com/api/adv/move/`,
    //         method: "POST",
    //         headers: {
    //             Authorization: token
    //         },
    //         data: {
    //             direction: direction
    //         }
    //     })
    //         .then(res => {
    //             console.log('moving data', res.data); 
    //         })
    //         .catch(err => {
    //             console.log('errors', err.response)
    //         });
    // };



    render(){
        return(
            <div>
                 <div>{this.state.rooms.map(room => (
                     <ul>
                         <li>ID: {room.id}</li>
                         <li>Name: {room.title}</li>
                         {/* <li>ID: {room.pk}</li> */}
                         {/* <li>Name: {room.fields.title}</li> */}
                         {/* <li>Description: {room.fields.description}</li> */}
                         <li>Description: {room.description}</li>
                         {/* for test add room.fields.n_to */}
                         <li>North to: {room.n_to}</li>
                         <li>South to: {room.s_to}</li>
                         <li>East to: {room.e_to}</li>
                         <li>West to: {room.w_to}</li>
                         {/* Buttons moved to World Component
                         <button type="button" className="btn north" onClick={() => this.move('n')}>North</button>
                        <button type="button" className="btn south" onClick={() => this.move('s')}>South</button>
                        <button type="button" className="btn east" onClick={() => this.move('e')}>East</button>
                        <button type="button" className="btn west" onClick={() => this.move('w')}>West</button> */}
                     </ul>
                     ))}
                 </div>
            </div>
        )
    }
};

export default Map;

// {/* <li>{this.state.id}</li>
//                 




// Maybe the room api (model, pk(id), fields.title(name), fields.description(description),
// moving directions) ..is for the positioning when mapping later? maybe when that room is reached, a bigger description is given

// I want the move data (name, title, description, players) in order to move and render room descriptions with players

//Lets render single buttons 