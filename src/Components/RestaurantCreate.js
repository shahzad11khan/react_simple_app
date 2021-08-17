import React, { Component } from 'react';
import NavBarManu from './NavBarManu'
class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null,
        }
    }
    create(){
        fetch("http://localhost:3000/restaurant",{
        method:"Post",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state)
                }).
             then((result) => {
            result.json().then((resp)=>{
                alert("Resto has been added")
            })
        })
    }        

    
    render() {
        return ( <div >
            <NavBarManu/>
            <h1 > RestaurantCreate </h1>
            <div>
                <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name"/><br/><br/>
                <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email"/><br/><br/>
                <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurant Rating"/><br/><br/>
                <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurant address"/><br/><br/>
                <button onClick={()=>{this.create()}}>Resto Add</button>
            </div>
            </div>
        );
    }
}

export default RestaurantCreate;