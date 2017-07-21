import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import "./nav.css";

class MthNavbar extends Component{

  render(){
      return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src="imgs/mthLogo.png" alt="mth4u Brand Logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#">HOME</NavItem>
                        <NavItem eventKey={2} href="#">EQUATIONS</NavItem>
                        <NavItem eventKey={2} href="#">QUICK SOLVE</NavItem>
                        <NavItem eventKey={2} href="#">GET VIP</NavItem>
                    </Nav>
                    <Navbar.Form pullRight>
                        <FormGroup>
                        <FormControl type="text" placeholder="Search" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">LOGIN</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
      );
  }
}

export default MthNavbar;