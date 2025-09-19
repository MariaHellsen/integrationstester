import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";

describe("movieSort function test", () => {
  test("it should sort movies from A to Z", () => {
    //Assign
    let movies: IMovie[] = [
      {
        Title: "Rush Hour",
        imdbID: "333333",
        Type: "movie",
        Poster: "https://picsum.photos/200/300?random=3",
        Year: "2020",
      },
      {
        Title: "Dumb and Dumber",
        imdbID: "111111",
        Type: "movie",
        Poster: "https://picsum.photos/200/300?random=1",
        Year: "2021",
      },
      {
        Title: "Batman",
        imdbID: "222222",
        Type: "movie",
        Poster: "https://picsum.photos/200/300?random=2",
        Year: "2019",
      },
    ];

    //Act
    const sortedMovies = movieSort(movies, true);

    //Assert
    expect(sortedMovies.length).toBe(3);
    expect(sortedMovies[0].Title).toBe("Batman");
    expect(sortedMovies[1].Title).toBe("Dumb and Dumber");
    expect(sortedMovies[2].Title).toBe("Rush Hour");
  });
});
