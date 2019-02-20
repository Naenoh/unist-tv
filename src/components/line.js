import { Component } from 'preact';

export default class Line extends Component {

	render() {
        const match = this.props.match;
		return (
            <div class="wrapper">
                <div class="item p1">
                    <img src={'/assets/'+match.playerone+'.jpg'} alt={match.playerone}></img>
                </div>
                <div class="item vs stretched-text">VS</div>
                <div class="item P2">
                    <img src={'/assets/'+match.playertwo+'.jpg'} alt={match.playertwo}></img>
                </div>
                <div class="item link stretched-text"><a href={match.link} target="_blank">WATCH</a></div>
                <div class="item date stretched-text">{match.upload_date}</div>   
            </div>
		);
	}
}
