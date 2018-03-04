"use strict"

import React from 'react';
import {Nav, NavItem, Navbar, Badge} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCart} from '../../src/actions/cartActions';



class Menu extends React.Component{
	render(){
		return(
			<Navbar inverse fixedTop>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="/">React-Bootstrap</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav>
			        <NavItem eventKey={1} href="/about">About</NavItem>			        
			        <NavItem eventKey={2} href="/contacts">Contact</NavItem>
			      </Nav>
			      <Nav pullRight>
			        <NavItem eventKey={1} href="/admin">Admin</NavItem>
			        <NavItem eventKey={2} href="/cart">
			        	Your Cart
		 				{ (this.props.totalQty > 0)?( // if # of items in cart is > 0
		                <Badge className="badge">
		                {this.props.totalQty}</Badge>):('')}
		                {/* display the # of items in cart, if zero items, display nothing  :{''} */}
			        </NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
		);
	}
}

function mapStateToProps(state){
  return {
    totalQty: state.cart.totalQty
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getCart:getCart
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)

//export default  Menu;