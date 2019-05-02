import React, {Component} from 'react';

class ApplyFilter extends Component {
	constructor (props){
		super(props);
		const { filterType } = this.props
		this.state={
			mark:filterType,
		}
	}

	handleFilter = (event) => {
		this.setState({mark:event.target.id},() => this.props.getFilter(this.state.mark));
	}
	// componentDidUpdate(){
	// 	this.props.getFilter(this.state.mark)
	// }
	render(){
		return(
			<div>
				<input id="mark" type="radio" onChange={this.handleFilter} checked={this.state.mark==='mark'}/>Marked
				<input id="unmark" type="radio" onChange={this.handleFilter} checked={this.state.mark==='unmark'}/>Unmarked
				<input id="review" type="radio" onChange={this.handleFilter} checked={this.state.mark==='review'}/>Marked for review
				<input id="all" type="radio" onChange={this.handleFilter} checked={this.state.mark==='all'}/>All
			</div>
		);
	}
}

export default ApplyFilter;