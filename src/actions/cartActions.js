"use strict"

import axios from 'axios';

// GET CART
export function getCart(){
	var config = {
    	headers: {'Access-Control-Allow-Origin': '*'}
	};
	return function(dispatch){
		axios.get("http://localhost:3001/cart", config, config)
			.then(function(response){
				console.log("response.data: " + response.data);
				dispatch({type: "GET_TO_CART", payload: response.data})
			})
			.catch(function(err){
				dispatch({type: "GET_TO_CART_REJECTED", msg: 'error when getting to the session'})
			})
	}
}

//ADD TO CART
export function addToCart(cart){
	var config = {
    	headers: {'Access-Control-Allow-Origin': '*'}
	};
	return function(dispatch){
		axios.post("http://localhost:3001/cart", cart, config)
			.then(function(response){
				console.log("response.data-addCart: " + response.data);
				dispatch({type: "ADD_TO_CART", payload: response.data})
			})
			.catch(function(err){
				dispatch({type: "ADD_TO_CART_REJECTED", msg: 'error when adding to the cart'})
			})
	}
	
	/*
	return {	
		type: "ADD_TO_CART",
		payload: cart
	}
	*/
}

//UPDATE CART
export function updateCart(_id, unit, cart){

			//Create a copy of the current array of books
			const currentBookToUpdate = cart;
			//Determine at wich index in books array is the book to be deleted
			const indexToUpdate = currentBookToUpdate.findIndex(
				function(cart){
					return cart._id === _id;
				}
			)
			//
			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				quantity: currentBookToUpdate[indexToUpdate].quantity + unit
			}
			//Use slice to remove the book at the specified index
			let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]

	var config = {
    	headers: {'Access-Control-Allow-Origin': '*'}
	};
	return function(dispatch){
		axios.post("http://localhost:3001/api/cart", cartUpdate, config)
			.then(function(response){
				dispatch({type: "UPDATE_CART", payload: response.data})
			})
			.catch(function(err){
				dispatch({type: "UPDATE_CART_REJECTED", msg: 'error when updating to the cart'})
			})
	}
	/*
	return {	
		type: "UPDATE_CART",
		payload: cartUpdate
	}*/
}

//DELETE FROM CART
export function deleteCartItem(cart){
	var config = {
    	headers: {'Access-Control-Allow-Origin': '*'}
	};
	return function(dispatch){
		axios.post("http://localhost:3001/api/cart", cart)
			.then(function(response){
				dispatch({type: "DELETE_CART_ITEM", payload: response.data})
			})
			.catch(function(err){
				dispatch({type: "DELETE_CART_ITEM_REJECTED", msg: 'error when deleting an item from the cart'})
			})
	}
/*
	return {	
		type: "DELETE_CART_ITEM",
		payload: cart
	}
	*/
}