import React, { Component } from 'react';
import NavBarManu from './NavBarManu'
class Login extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        }
    }
    login(){
        fetch('http://localhost:3000/login?q='+this.state.name).
        then((data) => {
                data.json().then((resp)=>{
                    if(resp.length>0){
                        localStorage.setItem('login',resp)
                        console.warn(this.props.history.push('list'))
                    }
                    else{
                        alert("please correct username and password")
                    }
                    // alert("Resto has been Deleted")
                   
                })
            })
    }
    render() {
        return (
            <div> 
                <NavBarManu/>
                <h1 > Admin Login </h1>
            <div>
                <input type="text" name="user" onChange={(event)=>{this.setState({name:event.target.value})}} placeholder="User Name"/><br/><br/>
                <input type="password" name="password" onChange={(event)=>{this.setState({password:event.target.value})}} placeholder="Pass word"/><br/><br/>
                <button onClick={()=>{this.login()}}>Log in</button>
            </div>
            </div>

        );
    }
}

export default Login;