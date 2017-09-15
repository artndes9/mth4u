import React, { Component } from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CustomNavbarToggle from 'components/Navbar/CustomNavbarToggle'
import { style } from "glamor"

const styles = {
    navbar: style({
        backgroundColor: '#000000',
        color: "#D3D3D3",
        position: "relative",
        zIndex: 100,
        borderRadius: 0,
        marginBottom: "0",
        border: "0",
    }),
    navbarCollapse: style({
        borderColor: "transparent !important",
    })
}

class MthNavbar extends Component{

    state = {
        expanded: false
    }

    toggle = (toggleState) => {
        this.setState({expanded: toggleState })
    }

    render(){
          return(
                <Navbar {...styles.navbar} collapseOnSelect expanded={this.state.expanded} onToggle={() => this.toggle(false) } fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img src="imgs/mthLogo.png" alt="mth4u Brand Logo"/>
                        </Navbar.Brand>
                        <CustomNavbarToggle toggleState={this.state.expanded} onToggle={(toggleState) => this.toggle(toggleState) } />
                    </Navbar.Header>
                    <Navbar.Collapse {...styles.navbarCollapse} >
                        <Nav>
                            <LinkContainer exact to="/"><NavItem>HOME</NavItem></LinkContainer>
                            <LinkContainer to="/equations"><NavItem>EQUATIONS</NavItem></LinkContainer>
                            <LinkContainer to="/solve"><NavItem>QUICK SOLVE</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default MthNavbar;