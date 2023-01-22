const sorting = require("../../app");

"coverageThreshold": {
  "branches": 100,
  "functions": 100,
  "lines": 100
}

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]

    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    const result =  sorting.sortByName()

    expect(result).toEqual(expected);
  });
});
