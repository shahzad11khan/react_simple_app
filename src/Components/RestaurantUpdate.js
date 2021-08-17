import React, { Component } from 'react';
import NavBarManu from './NavBarManu'
class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null,
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                this.setState({
            id:result.id,
            name:result.name,
            email:result.email,
            rating:result.rating,
            address:result.address,
                })
            })

        })
    }
    update(){
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(this.state)
                }).
             then((result) => {
            result.json().then((resp)=>{
                alert("Resto has been updated")
            })
        })
    }
    render() {
        return ( <div>
            <NavBarManu/>
            <h1> RestaurantUpdate </h1>
            <div>
                <input onChange={(event)=>{this.setState({id:event.target.value})}} placeholder="Restaurant id" value={this.state.id}/><br/><br/>
                <input onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="Restaurant Name" value={this.state.name}/><br/><br/>
                <input onChange={(event)=>{this.setState({email:event.target.value})}} placeholder="Restaurant Email" value={this.state.email}/><br/><br/>
                <input onChange={(event)=>{this.setState({rating:event.target.value})}} placeholder="Restaurant Rating" value={this.state.rating}/><br/><br/>
                <input onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Restaurant address" value={this.state.address}/><br/><br/>
                <button onClick={()=>{this.update()}}>Resto Update</button>
            </div>
             </div>
        );
    }
}

export default RestaurantUpdate;