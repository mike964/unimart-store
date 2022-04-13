import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { getProduct } from '../utils'

const Product = props => {
	const product = getProduct(props.product)

	// console.log(props.product.rating.slice(0, 3))

	return (
		<Card className='my-3 card-product-grid'>
			{/* <Card.Img src={product.image} variant='top' /> */}
			<div className='img-wrap'>
				<img src={product.image} alt='' />
			</div>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as='div'>
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>

				<Card.Text as='div'>
					<Rating
						value={product.rating}
						text={`${product.numReviews} reviews`}
					/>
				</Card.Text>

				<Card.Text as='h3'>${product.price}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default Product
