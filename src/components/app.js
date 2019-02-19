import { Component } from 'preact';
import Header from './header';
import Footer from './footer';
import Content from './content';

export default class App extends Component {

	render() {

        const { matches } = this.state;

		return (
			<div>
				<Header />
                <Content />
                <Footer />
			</div>
		);
	}
}
