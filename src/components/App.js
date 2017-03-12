import React, { Component } from 'react';
import './App.css';
import Product from './Product';

import '../bootstrap/css/bootstrap.css';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = { items: this.props.products};
								 
		this.filterList = this.filterList.bind(this);	
		
		}
		
		filterList(e) {
			var filteredList = this.props.products.filter(function(item){
				return item.title.toLowerCase().search(e.target.value.toLowerCase())!== -1;
			});
			
			this.setState({items: filteredList});
		}

	render() {
		return (
			<div className="App">
				<FormGroup className="filter">
					<FormControl type="text" placeholder="Поиск" onChange={this.filterList} />
				</FormGroup>
					{
						this.state.items.map(function(item) {
							return <Product key={item.id} data={item} />               
					})}
			</div>
		);
	}
}

export default App;
