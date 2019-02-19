import { Component } from 'preact';

export default class Line extends Component {
	render() {
        const match = this.props.match;
		return (
            <div class="wrapper">
                <div class="item">{match.playerone}</div>
                <div class="item">{match.playertwo}</div>
                <div class="item"><a href={match.link} target="_blank">Watch !</a></div>
                <div class="item">{match.upload_date}</div>   
            </div>
		);
	}
}
