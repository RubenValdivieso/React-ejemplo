"use strinc"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getBooks} from '../../actions/boooksActions';
import {Carousel, Grid, Col, Row, Button} from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';

class BooksList extends React.Component{
	componentDidMount(){
		//Dispatch an action
		//this.props.getBooks();
		/*
		this.props.getBooks(
			[
			{
					id: 6,
					title: 'this is the book file',
					description: 'this is the book description',
					price: 44.33
				},{
					id: 7,
					title: 'this is the second book file',
					description: 'this is the second book description',
					price: 56
				}
				]
			);
			*/
	}
	render(){
		//console.log('ARE WE ACCESSING THE STATE??: ', this.props.books);
		//Mapeo de listado
		const booksList = this.props.books.map(function(booksArr){
			return(
				<Col xs={12} sn={6} md={4} key={booksArr._id} >
					<BookItem
						_id={booksArr._id}
						title={booksArr.title}
						description={booksArr.description}
						images={booksArr.images}
						price={booksArr.price}
					/>
				</Col>
				/*
				<div key={booksArr.id}>
					<h2>{booksArr.title}</h2>
					<h2>{booksArr.description}</h2>
					<h2>{booksArr.price}</h2>
					<Button bsStyle='primary'>Buy Now</Button>
				</div>
				*/
			)
		})
		//HTML que se muestra
		return (
			<Grid>
				<Row>
					<Carousel>
						<Carousel.Item>
							<img width={900} height={300} alt="900x300" src="/images/fma01.jpg" />
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
							</Carousel.Caption>
						</Carousel.Item>
						<Carousel.Item>
							<img width={900} height={300} alt="900x300" src="/images/fma02.jpg" />
							<Carousel.Caption>
								<h3>Second slide label</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</Carousel.Caption>
						</Carousel.Item>
					</Carousel>
				</Row>
				<Row>
					<Cart />
				</Row>
				<Row style={{marginTop: '15px'}} >
					{booksList}
				</Row>
			</Grid>
/*
			<div>
				<h1>Hello React</h1>
				{booksList}
			</div>
			*/
		)
	}
}
function mapStateToProps(state){
	return{
		books: state.books.books
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getBooks: getBooks}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
//export default BooksList;
