import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap-v5'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faEdit,faTrash,faHouseDamage,faClipboardList,faSearch,faPlus,faHotel,fauser, faUser} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavBarManu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">RESTO <FontAwesomeIcon icon={faHotel}/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="mr-auto my-2 my-lg-0">
                        <Nav.Link href=""><Link to="/"><FontAwesomeIcon icon={faHouseDamage}/>Home</Link></Nav.Link>
                        <Nav.Link href=""><Link to="/Create"><FontAwesomeIcon icon={faPlus}/>Create</Link> </Nav.Link>
                        <Nav.Link href=""><Link to="/Search"><FontAwesomeIcon icon={faSearch}/>Search</Link></Nav.Link>
                        <Nav.Link href=""><Link to="/List"><FontAwesomeIcon icon={faClipboardList}/>List</Link></Nav.Link>
                        {
                            localStorage.getItem('login')?
                            <Nav.Link href=""><Link to="/logout"><FontAwesomeIcon icon={faUser}/>log out</Link></Nav.Link>
                            :
                            <Nav.Link href=""><Link to="/Login"><FontAwesomeIcon icon={faUser}/>log in</Link></Nav.Link>
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                 </Navbar>
            </div>
        );
    }
}

export default NavBarManu;