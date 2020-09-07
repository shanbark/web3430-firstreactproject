import React from 'react'
import { Movie } from './movie'
export class MovieList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { movies: this.props.movies }
        this.sortMovies = this.sortMovies.bind(this)
    }

    sortMovies() {
        this.state.movies.sort((a, b) => {
            return a.rating - b.rating
        })
        this.setState({
            movies: this.state.movies
        })
    }
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Top 10 Movies: Shannon Barker</h1>
                </header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>List</li>
                        <li>About</li>
                    </ul>
                    <button className="primary" onClick={this.sortMovies}>Sort</button>
                </nav>
                <main>
                    {this.state.movies.map(m => {
                        return <Movie key={m.id} movie={m} />
                    })}
                </main>
            </div>
        )
    }
}
