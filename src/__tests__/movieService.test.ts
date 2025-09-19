import { getData } from "../ts/services/movieService";
jest.mock("axios", () => ({
  __esModule: true, // tells Jest this is an ES module
  default: {
    get: async (url: string) => {
      if (url.includes("s=comedy")) {
        return {
          data: {
            Search: [
              {
                Title: "Mrs. Doubtfire",
                imdbID: "777",
                Type: "movie",
                Poster: "https://picsum.photos/200/300?random=7",
                Year: "1993",
              },
              {
                Title: "Home Alone",
                imdbID: "666",
                Type: "movie",
                Poster: "https://picsum.photos/200/300?random=6",
                Year: "1990",
              },
              {
                Title: "Borat",
                imdbID: "222",
                Type: "movie",
                Poster: "https://picsum.photos/200/300?random=2",
                Year: "2006",
              },
              {
                Title: "Anchorman",
                imdbID: "111",
                Type: "movie",
                Poster: "https://picsum.photos/200/300?random=1",
                Year: "2004",
              },
            ],
          },
        };
      } else if (url.includes("s=nonexistentmovie")) {
        return { data: { Search: [], Response: "False" } };
      } else {
        return { data: { Search: [] } };
      }
    },
  },
}));

describe("getData service tests", () => {
  test("it should get movies when searching for 'comedy'", async () => {
    const movies = await getData("comedy");
    expect(movies.length).toBe(4);
  });

  test("it should return an empty array for an empty search", async () => {
    const movies = await getData("");
    expect(movies.length).toBe(0);
  });

  test("it should return an empty array when searching for a nonexistent movie", async () => {
    const movies = await getData("nonexistentmovie");
    expect(movies.length).toBe(0);
  });
});
