import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";

class Vidly extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: "All Genres" }, ...getGenres()];

    this.setState({ movies: getMovies(), genres });
  }

  deleteRow = (movie) => {
    const result = this.state.movies.filter((film) => film._id !== movie._id);
    this.setState({ movies: result });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.state.movies.filter((movie) => movie.genre.name === genre.name);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
    } = this.state;

    let filtered =
      selectedGenre && selectedGenre._id !== "All Genres"
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filtered, currentPage, pageSize);

    const x = `Showing ${movies.length} Movies in the DB from Total ${this.state.movies.length}`;
    const y = "There is no Movies in DB";

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            onItemSelect={this.handleGenreSelect}
            items={this.state.genres}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          {" "}
          <p className="h4">{this.state.movies.length > 0 ? x : y}</p>
          <table className="table table-dark">
            <thead>
              <tr>
                <th key="Title" scope="col">
                  Title
                </th>
                <th key="Genre" scope="col">
                  Genre
                </th>
                <th key="Stock" scope="col">
                  Stock
                </th>
                <th key="Rate" scope="col">
                  Rate
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie) => (
                <tr key={movie._id}>
                  <th scope="row">{movie.title}</th>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.deleteRow(movie)}
                      type="button"
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Vidly;
