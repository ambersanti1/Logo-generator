
const { Circle, Triangle, Square } = require("./shape");

describe("Circle", () => {
  test("Test for a pink circle", () => {
    const shape = new Circle();
    shape.setColor("pink");
    expect(shape.render()).toEqual(
      '<circle cx = "150" cy = "100" r = "90" fill = "pink" />'
    );
  });
});

describe("Triangle", () => {
  test("Test for an orange triangle", () => {
    const shape = new Triangle();
    shape.setColor("orange");
    expect(shape.render()).toEqual(
      '<polygon points = "150, 18 244, 182 56, 182" fill = "orange" />'
    );
  });
});


describe("Square", () => {
  test("Test for a green square", () => {
    const shape = new Square();
    shape.setColor("#00800");
    expect(shape.render()).toEqual(
      '<rect x = "60" y = "10" width = "180" height = "180" fill = "#00800" />'
    );
  });
});

