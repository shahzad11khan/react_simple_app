import React, { Component } from 'react';
import NavBarManu from './NavBarManu'
class RestaurantSearch extends Component {
    constructor(){
        super();
        this.state={
            searchDate:null,
            noData:false,
        }
    }
    search(key){
        fetch('http://localhost:3000/restaurant?q='+key).
        then((data) => {
                data.json().then((resp)=>{
                    if(resp.length>0){
                        this.setState({searchDate:resp,noData:false})
                    }
                    else{
                        this.setState({noData:true,searchDate:null})
                    }
                    // alert("Resto has been Deleted")
                   
                })
            })

    }
    render() {
        return ( <div >
            <NavBarManu/>
            <h1> RestaurantSearch </h1> 
            <input type="text" onChange={(event)=>this.search(event.target.value)}/>
            <div>
                {
                     this.state.searchDate?
                     <div>
                         {
                         this.state.searchDate.map((item)=>
                         <div className="search-row">{item.name} {item.email} {item.rating} {item.address}</div>)
                         }
                     </div>
                     :""
                }
                {
                    this.state.noData?<h3>No Data Found</h3>:null
                }
            </div>
            </div>
        );
    }
}

export default RestaurantSearch;