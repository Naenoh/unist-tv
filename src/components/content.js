import { Component } from 'preact';
import Table from './table';
import Filters from './filters';

export default class Content extends Component {

    state = {
        filters: {
            p1: 'Any',
            p2: 'Any',
            page: 1
        }
    };

    updateFilters = (newValues) => {
        this.setState({
          filters: newValues
        })
    };

	render() {

		return (
			<div class="content">
                <Filters filtersValue={this.state.filters} handler={this.updateFilters}/>
                <Table filters={this.state.filters} updateFilters={this.updateFilters}/>
			</div>
		);
	}
}
