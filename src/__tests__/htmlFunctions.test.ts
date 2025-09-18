import { IMovie } from "../ts/models/Movie";
import { createHtml } from "../ts/movieApp";

describe("Html tests", () => {
  test("it should show films", () => {
    //Assign
    let movies: IMovie[] = [
      {
        Title: "Movie 1",
        imdbID: "222233",
        Type: "movie",
        Poster: "https://picsum.photos/200/300?random=8",
        Year: "2005",
      },
      {
        Title: "Movie 2",
        imdbID: "223344",
        Type: "movie",
        Poster: "https://picsum.photos/200/300?random=5",
        Year: "2008",
      },
    ];
    document.body.innerHTML += `<div id="movie-container"></div>`;
    const container = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    //Act
    createHtml(movies, container);

    //Assert
    expect(container.children.length).toBe(2);
  });
});
