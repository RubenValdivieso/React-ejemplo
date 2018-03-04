"use strict"



//BOOKS REDUCERS
export function booksReducers(state={
	books:[
	/*
				{
					_id: 6,
					title: 'this is the book file',
					description: 'this is the book description',
					price: 44.33
				},{
					_id: 7,
					title: 'this is the second book file',
					description: 'this is the second book description',
					price: 56
				}
	*/			
	]
	}, action){
	//const reducer = function(state={books:[]}, action){
	switch(action.type){
		case "GET_BOOKS":
			return {...state, books:[...action.payload]}
			break;
		case "POST_BOOK":
	//		let books = state.books.concat(action.payload);
	//		return {books};
			return {...state, books:[...state.books, ...action.payload], msg: 'Saved! Click to continue', style:'success',
					validation:'success'}
			break;
		case "POST_BOOK_REJECTED":
	//		let books = state.books.concat(action.payload);
	//		return {books};
			return {...state, msg: 'Please, try again', style:'danger', validation:'error'}
			break;
		case "RESET_BUTTON":
			return {...state, msg: null, style:'primary', validation:null}
			break;
		case "UPDATE_BOOK":
			//Create a copy of the current array of books
			const currentBookToUpdate = [...state.books]
			//Determine at wich index in books array is the book to be deleted
			const indexToUpdate = currentBookToUpdate.findIndex(
				function(book){
					return book._id === action.payload._id;
				}
			)
			//
			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			}
			console.log("what is it newBookToUpdate: " , newBookToUpdate);

			//Use slice to remove the book at the specified index
			return {books:[...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
			break;
		case "DELETE_BOOK":
			//Create a copy of the current array of books
			const currentBookToDelete = [...state.books]
			//Determine at wich index in books array is the book to be deleted
			const indexToDelete = currentBookToDelete.findIndex(
				function(book){
					return book._id == action.payload;
				}
			)
			//Use slice to remove the book at the specified index
			return {books:[...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
			break;
	}
	return state;
}