import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./moviesTable";
import _ from "lodash";

class Vidly extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "",
    sortColumn: { path: "title", order: "asc" },
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

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  getPageData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn,
    } = this.state;
    // filter=> sort => paginate
    const filtered =
      selectedGenre && selectedGenre._id !== "All Genres"
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: movies };
  };

  render() {
    const { pageSize, currentPage, sortColumn } = this.state;

    const { data, totalCount } = this.getPageData();

    const x = `Showing ${data.length} Movies in the DB from Total ${this.state.movies.length}`;
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
          <p className="h4">{this.state.movies.length > 0 ? x : y}</p>
          <MovieTable
            movies={data}
            sortColumn={sortColumn}
            onHandleLike={this.handleLike}
            onDeleteRow={this.deleteRow}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
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
