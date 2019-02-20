import { Component } from 'preact';
import Line from './line';

export default class Table extends Component {

    state = {
        matches: [
            {
                "id": 1,
                "playerone": "Linne",
                "playertwo": "Orie",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h1m30s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 2,
                "playerone": "Linne",
                "playertwo": "Orie",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h4m53s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 3,
                "playerone": "Linne",
                "playertwo": "Hilda",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h7m57s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 4,
                "playerone": "Carmine",
                "playertwo": "Hilda",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h10m26s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 5,
                "playerone": "Carmine",
                "playertwo": "Carmine",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h12m47s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 6,
                "playerone": "Carmine",
                "playertwo": "Wagner",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h14m53s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 7,
                "playerone": "Hilda",
                "playertwo": "Wagner",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h18m41s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 8,
                "playerone": "Hilda",
                "playertwo": "Akatsuki",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h20m58s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 9,
                "playerone": "Hilda",
                "playertwo": "Orie",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h23m26s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 10,
                "playerone": "Hilda",
                "playertwo": "Carmine",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h26m16s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 11,
                "playerone": "Hilda",
                "playertwo": "Akatsuki",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h29m4s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 12,
                "playerone": "Hilda",
                "playertwo": "Wagner",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h32m8s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 13,
                "playerone": "Hilda",
                "playertwo": "Wagner",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h36m16s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 14,
                "playerone": "Waldstein",
                "playertwo": "Wagner",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h39m39s",
                "upload_date": "2019-01-25"
            },
            {
                "id": 15,
                "playerone": "Waldstein",
                "playertwo": "Carmine",
                "link": "https://www.youtube.com/watch?v=ggXJ5CzAoS8&t=0h41m54s",
                "upload_date": "2019-01-25"
            }
        ],
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
