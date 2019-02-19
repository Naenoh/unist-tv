import { Component } from 'preact';
import Table from './table';
import Filters from './filters';

export default class Content extends Component {

    state = {
        matches: [],
        filters: {
            p1: 'Any',
            p2: 'Any'
        }
    };

    updateFilters = (newValues) => {
        this.setState({
          filters: newValues
        })
    };

	render() {

        const { matches } = this.state;

		return (
			<div class="content">
                <Filters filtersValue={this.state.filters} handler={this.updateFilters}/>
                <Table filters={this.state.filters}/>
			</div>
		);
	}
}
