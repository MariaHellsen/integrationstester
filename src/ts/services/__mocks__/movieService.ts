import { IMovie } from "../../models/Movie";

const testData: IMovie[] = [
  {
    Title: "Elf",
    imdbID: "444",
    Type: "movie",
    Poster: "https://picsum.photos/200/300?random=4",
    Year: "2003",
  },
  {
    Title: "Dumb and Dumber",
    imdbID: "333",
    Type: "movie",
    Poster: "https://picsum.photos/200/300?random=3",
    Year: "1994",
  },
  {
    Title: "Rush Hour",
    imdbID: "999",
    Type: "movie",
    Poster: "https://picsum.photos/200/300?random=9",
    Year: "1998",
  },
];

export const getData = async (): Promise<IMovie[]> => {
  return new Promise((resolve) => {
    resolve(testData);
  });
};
