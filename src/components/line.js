import { Component } from 'preact';

export default class Line extends Component {

	render() {
        const match = this.props.match;
		return (
            <div class="wrapper">
                <div class="item">
                    <img src={'/assets/'+match.playerone+'.jpg'} alt={match.playerone}></img>
                </div>
                <div class="item"><span style="vertical-align: middle;">VS</span></div>
                <div class="item">
                    <img src={'/assets/'+match.playertwo+'.jpg'} alt={match.playertwo}></img>
                </div>
                <div class="item"><a href={match.link} target="_blank">WATCH</a></div>
                <div class="item">{match.upload_date}</div>   
            </div>
		);
	}
}
