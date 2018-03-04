"use strict"
import axios from 'axios';


//GET BOOKS
export function getBooks(){
	var config = {
    	headers: {'Access-Control-Allow-Origin': '*'}
	};
	return function(dispatch){
		axios.get("http://localhost:3001/books", config)
			.then(function(response){
				dispatch({type: "GET_BOOKS", payload: response.data})
			})
			.catch(function(err){
				dispatch({type: "GET_BOOKS_REJECTED"}, payload:err)
			})
	}
	/*
	return {
		type: "GET_BOOKS"
	}
	*/
}


//POST A BOOK
export function postBooks(book){
	var config = {
    	headers: {'Access-Control-Allow-Origin': '*'}
	};
	return function(dispatch){
		axios.post("http://localhost:3001/books", book)
			.then(function(response){
				dispatch({type: "POST_BOOK", payload: response.data})
			})
			.catch(function(err){
				dispatch({type: "POST_BOOK_REJECTED"}, payload:"there was an error while posting a new book")
			})
	}
	/*
	return {
		type: "POST_BOOK", 
		payload: book
	}
	*/
}

//DELETE A BOOK
export function deleteBooks(id){
	var config = {
    	headers: {'Access-Control-Allow-Origin': '*'}
	};
	return function(dispatch){
		axios.delete("http://localhost:3001/api/books/"+id)
			.then(function(response){
				dispatch({type: "DELETE_BOOK", payload: id})
			})
			.catch(function(err){
				dispatch({type: "DELETE_BOOK_REJECTED", payload:err})
			})
	}
	/*
	return{
		type:"DELETE_BOOK", 
		payload: id
	}
	*/
}

//UPDATE A BOOK
export function updateBooks(book){
	return{
		type:"UPDATE_BOOK", 
		payload: book
	}
}

//RESET FORM BUTTON
export function resetButton(){
	return{
		type:"RESET_BUTTON"
	}
}