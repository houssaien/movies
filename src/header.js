import React, { Component } from 'react';
import Rating from './rating';
import './movie.css';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
           
            keyword:'',
         }
         this.toggle = this.toggle.bind(this);
         this.state = {
           isOpen: false
         };
    }
    
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });      
      }
handelchange=(event)=>{
    this.setState({keyword:event.target.value})
    this.props.searchname(event.target.value)
}


    render() { 
    
        return ( <div className='header-container'>

            
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><h1>Movies</h1>
        </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Rating serachrating1={val=>this.props.serachrating1(val)} />
    </Nav>
    <Form inline>
    
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  onChange={this.handelchange} />
    
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div> );
    }
}
 
export default Header;