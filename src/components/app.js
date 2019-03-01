import { Component } from 'preact';
import Header from './header';
import Footer from './footer';
import Content from './content';

export default class App extends Component {

	render() {
		return (
			<div class="app">
				<Header />
                <Content />
                <Footer />
			</div>
		);
	}
}
