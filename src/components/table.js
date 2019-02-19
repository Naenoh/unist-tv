import { Component } from 'preact';
import Line from './line';

export default class Table extends Component {

    state = {
        matches: [],
        resultCount: 0
    }

    url = 'http://localhost:3000/matches'

    componentDidMount() {
        this.getData(this.props.filters.p1, this.props.filters.p2)
    }

    getData(p1, p2) {
        const searchParams = new URLSearchParams();
        searchParams.set("limit", '25');
        //searchParams.set("offset", '0');
        const headers = new Headers({'Prefer': 'count=exact'})
        if(p1 !== 'Any' && p2 !== 'Any') {
            searchParams.set("or", `(and(playerone.eq.${p1},playertwo.eq.${p2}), and(playerone.eq.${p2},playertwo.eq.${p1}))`)
        } else if (p1 !== 'Any') {
            searchParams.set("or",`(playerone.eq.${p1}, playertwo.eq.${p1})`)
        } else if (p2 !== 'Any') {
            searchParams.set("or",`(playerone.eq.${p2}, playertwo.eq.${p2})`)
        }
        fetch(this.url + '?' + searchParams.toString(), {headers: headers})
            .then(result => {
                const count = parseInt(result.headers.get('Content-Range').split('/')[1])
                this.setState({resultCount: count})
                return result.json()
            })
            .then(result => {
                this.setState({
                    matches: result
                })
            });
    }

    componentWillReceiveProps(nextProps) {
        this.getData(nextProps.filters.p1, nextProps.filters.p2)
    }

	render() {
        const lines = this.state.matches.map((row, index) => {
            return (
                <Line key={index} match={row} />
            )
        })
		return (
            <div>
                <div class="table">
                    {lines}
			    </div>
                <span>Count : {this.state.resultCount}</span>
            </div>
		);
	}
}
