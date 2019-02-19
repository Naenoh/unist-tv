import { Component } from 'preact';
import Line from './line';

export default class Table extends Component {

    state = {
        matches: []
    };

    componentDidMount() {
        const url = 'http://localhost:3000/matches?limit=10';
        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    matches: result
                })
            });
    };

	render() {
        const lines = this.state.matches.map((row, index) => {
            return (
                <Line key={index} match={row} />
            )
        })
		return (
			<ul>
                {lines}
			</ul>
		);
	}
}
