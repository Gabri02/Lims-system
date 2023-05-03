import { Nav, NavDropdown } from "react-bootstrap";
import React from "react";

class Location extends React.Component {
    render(){
        return(
            <Nav>
                <NavDropdown title="Area" id="nav-dropdown" className="ms-auto" style={{color: '#CF704A'}}>
                    <NavDropdown.Item>
                        igcc
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        isab
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
    } 
}

export default Location;