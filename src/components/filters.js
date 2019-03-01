import { Component } from 'preact';

import Charpicker from './charpicker';

export default class Filters extends Component {

	updateFilter = (filterType) => ((newValue) => this.props.handler({
		...this.props.filtersValue,
		page: 1,
		[filterType]: newValue
	}));

	render() {
		const characters = [
			"Any", "Hyde", "Linne", "Waldstein", "Carmine", "Orie", 
			"Merkava", "Vatista", "Seth", "Yuzuriha", "Hilda", "Eltnum", 
			"Chaos", "Akatsuki", "Nanase", "Byakuya", "Phonon", "Mika", 
			"Wagner", "Enkidu", "Gordeau"
		]

		return (
            <div class="filter">
				<Charpicker characters={characters} picked={this.props.filtersValue.p1} handler={this.updateFilter('p1')}/>
				<span class="stretched-text">VS</span>
				<Charpicker characters={characters} picked={this.props.filtersValue.p2} handler={this.updateFilter('p2')}/>
			</div>
		);
	}
}
