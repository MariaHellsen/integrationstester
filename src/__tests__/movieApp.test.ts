import { init } from "../ts/movieApp";

jest.mock("../ts/services/movieService");

describe("Movie app test", () => {
  test("it should present data correctly", async () => {
    //Assign
    document.body.innerHTML = `
      <form id="searchForm">
        <input type="text" id="searchText" value="mock search" />
      </form>
      <div id="movie-container"></div>
    `;

    //Act
    await init();

    //Assert
    // Simulate user submitting the form
    const form = document.getElementById("searchForm") as HTMLFormElement;
    form.dispatchEvent(new Event("submit"));

    // Wait for async handleSubmit to finish
    await new Promise(process.nextTick);

    const movieDivs = document.getElementsByClassName("movie");
    expect(movieDivs.length).toBe(3);

    const firstTitle = (movieDivs[0].querySelector("h3") as HTMLElement)
      .textContent;
    expect(firstTitle).toBe("Elf");
  });
});
