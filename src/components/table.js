import { Component } from 'preact';
import Line from './line';

export default class Table extends Component {

    state = {
        matches: [],
        resultCount: 0
    }

    url = 'http://localhost:3000/matches'

    perPage = 25

    componentDidMount() {
        this.getData(this.props.filters.p1, this.props.filters.p2, this.props.filters.page)
    }

    getData(p1, p2, page) {
        const searchParams = new URLSearchParams();
        searchParams.set("limit", this.perPage.toString());
        searchParams.set("offset", (this.perPage*(page - 1)).toString());
        const headers = new Headers();
        if (page === 1) {
            headers.set('prefer', 'count=exact');
        }
        if(p1 !== 'Any' && p2 !== 'Any') {
            searchParams.set("or", `(and(playerone.eq.${p1},playertwo.eq.${p2}), and(playerone.eq.${p2},playertwo.eq.${p1}))`)
        } else if (p1 !== 'Any') {
            searchParams.set("or",`(playerone.eq.${p1}, playertwo.eq.${p1})`)
        } else if (p2 !== 'Any') {
            searchParams.set("or",`(playerone.eq.${p2}, playertwo.eq.${p2})`)
        }
        fetch(this.url + '?' + searchParams.toString(), {headers: headers})
            .then(result => {
                if(page === 1){
                    const count = parseInt(result.headers.get('Content-Range').split('/')[1])
                    this.setState({resultCount: count})
                }
                return result.json()
            })
            .then(result => {
                this.setState({
                    matches: result
                })
            })
            .catch((error) => console.error(error));
    }

    updatePage(n) {
        this.props.updateFilters({
            ...this.props.filters,
            page: this.props.filters.page + n
        })
    }

    componentWillReceiveProps(nextProps) {
        this.getData(nextProps.filters.p1, nextProps.filters.p2, nextProps.filters.page)
    }

	render() {
        const lines = this.state.matches.map((row, index) => {
            return (
                <Line key={index} match={row} />
            )
        })

        const maxPage = Math.ceil(this.state.resultCount / this.perPage)
		return (
            <div>
                <div class="table-header-background">
                    <div class="table-header">
                        <span class="item stretched-text character"> CHARACTERS </span>
                        <span class="item stretched-text link"> LINK </span>
                        <span class="item stretched-text date"> DATE </span>
                    </div>
                </div>
                <div class="table">
                    {lines}
			    </div>
                <div>
                    <button onCLick={this.updatePage.bind(this, -1)}>-</button>
                    <span>{this.props.filters.page} / {maxPage}</span>
                    <button onCLick={this.updatePage.bind(this, 1)}>+</button>
                </div>
            </div>  
		);
	}
}
