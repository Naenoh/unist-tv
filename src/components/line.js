import { Component } from 'preact';

export default class Line extends Component {
	render() {
        const match = this.props.match;
		return (
            <li>
                {match.playerone} {match.playertwo} {match.link} {match.upload_date}
            </li>
		);
	}
}
