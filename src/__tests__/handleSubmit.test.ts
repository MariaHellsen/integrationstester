import { handleSubmit } from "../ts/movieApp";
import * as movieService from "../ts/services/movieService";
import * as movieApp from "../ts/movieApp";

describe("handleSubmit test", () => {
  const mockedGetData = jest.spyOn(movieService, "getData");
  const mockedCreateHtml = jest.spyOn(movieApp, "createHtml");
  const mockedDisplayNoResult = jest.spyOn(movieApp, "displayNoResult");

  beforeEach(() => {
    mockedGetData.mockClear();
    mockedCreateHtml.mockClear();
    mockedDisplayNoResult.mockClear();

    document.body.innerHTML = `
      <input type="text" id="searchText" value="batman">
      <div id="movie-container"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  test("it should call getData and createHtml functions", async () => {
    // Arrange

    // Act
    await handleSubmit();

    // Assert
    expect(mockedGetData).toHaveBeenCalled();
    expect(mockedCreateHtml).toHaveBeenCalled();
  });
});
