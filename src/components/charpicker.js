import { Component } from 'preact';

export default class Charpicker extends Component {

    updateValue(event) {
        this.props.handler(event.target.value);
    }

	render() {
        const options = this.props.characters.map((char, index) => {
            return (
				<option key={index}>{char}</option>
			)
        })
		return (
            <select class="charselect" value={this.props.picked} onChange={this.updateValue.bind(this)}>{options}</select>
		);
	}
}
