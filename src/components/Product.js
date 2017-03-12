import React, { Component } from 'react';
import './Product.css';

import '../bootstrap/css/bootstrap.css';

import Col from 'react-bootstrap/lib/Col';
import Label from 'react-bootstrap/lib/Label';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {item: this.props.data, class: "product-info-off"};

		this.press = this.press.bind(this);
	}

	press(e) {
		var className = (this.state.class === "product-info-off") ? "product-info-on" : "product-info-off";
		this.setState({class: className});
	}

	render() {
		return (
			<div> 
				<Col>
					<Thumbnail src={'img/' + this.state.item.imageUrl} onClick={this.press} className="product" alt="244x200">
						<h3>{this.state.item.title}</h3>
						<p>{this.state.item.price + 'BYN'}</p>
						<div className={this.state.class}>
							<p>{this.state.item.description}</p>
							<h4><Label bsStyle="info">{(this.state.item.available === true) ? 'В наличии' : "Под заказ"}</Label></h4>
						</div>
					</Thumbnail>                          
				</Col>
			</div>
		)
	}
}

export default Product;