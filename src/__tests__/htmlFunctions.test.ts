import { IMovie } from "../ts/models/Movie";
import { createHtml } from "../ts/movieApp";
import { displayNoResult } from "../ts/movieApp";

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

    const firstMovieDiv = container.children[0] as HTMLDivElement;
    const titleElement = firstMovieDiv.children[0] as HTMLHeadingElement;
    expect(titleElement.textContent).toBe("Movie 1");
  });

  test("it should display NoResult message", () => {
    //Assign

    document.body.innerHTML += `<div id="movie-container"></div>`;
    let container = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    container.innerHTML = "";

    //Act
    displayNoResult(container);

    //Assert
    expect(container.children.length).toBe(1);

    const messageElement = container.querySelector("p");
    expect(messageElement?.textContent).toBe("Inga sökresultat att visa");
  });

  // test("it should sort movies", () => {});
});
