import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap-v5'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'
import NavBarManu from './NavBarManu'
class RestaurantList extends Component {
            constructor() {
                super();
                this.state = {
                    list: null,
                }
            }
            componentDidMount() {
                fetch("http://localhost:3000/restaurant").then((response) => {
                    response.json().then((result) => {
                        this.setState({ list: result })
                    })

                })
            }
            delete(id){
                fetch('http://localhost:3000/restaurant/'+id,
                {
                    method:"DELETE",
                    // headers:{
                    //     'Content-Type':'application/json'
                    // },
                   }).then((result) => {
                        result.json().then((resp)=>{
                            alert("Resto has been Deleted")
                        })
                    })

            }

            render() {
                return ( 
                <div>    
                    <NavBarManu/>    
                    <h1> RestaurantList </h1> {
                    this.state.list ?
                    <div>
                    <center>
                    <Table responsive striped bordered hover cellSpacing = "10%">
                    <thead>
                    <tr >
                    <th > # </th> 
                    <th > Name </th>
                    <th > Email </th> 
                    <th> Rating </th> 
                    <th> Address </th>
                    <th> Oprations </th>
                     </tr> 
                    </thead> <tbody> {
                        this.state.list.map((item, i) =>
                            <tr>
                            <td> { item.id } </td> 
                            <td> { item.name } </td> 
                            <td> { item.email } </td> 
                            <td> { item.rating } </td>
                            <td> { item.address } </td> 
                            <td> <Link to={"/Update/"+item.id}><FontAwesomeIcon icon={faEdit}/></Link>
                            <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash}/></span>
                            </td> 
                            </tr>
                        )
                    } </tbody> 
                    </Table >
                    </center> 
                     </div> 
                    :<p> plzz wait </p>        
                }                 </div>  
            );
        }
        
}

export default RestaurantList;