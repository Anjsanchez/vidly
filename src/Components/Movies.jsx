import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService.js";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  renderMovie() {
    if (this.state.movies.length == 0)
      return <h1>There are no movies in the database</h1>;

    return (
      <div>
        <span style={{ marginBottom: "335px" }}>
          Showing {this.returnNumberOfMovieRecords()} moves in the database.{" "}
        </span>
        <table style={{ marginTop: "1.5em" }} class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((n) => {
              return (
                <tr>
                  <th scope="row">{n.title}</th>
                  <td>{n.genre.name}</td>
                  <td>{n.numberInStock}</td>
                  <td>{n.dailyRentalRate}</td>
                  <td>
                    <button
                      onClick={() => this.deleteCurrentRow(n._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return this.renderMovie();
  }

  deleteCurrentRow = (id) => {
    deleteMovie(id);
    this.setState({ movies: getMovies() });
  };

  returnNumberOfMovieRecords = () => {
    return this.state.movies.length;
  };
}

export default Movies;
