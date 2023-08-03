// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. 
const { Triangle, Square, Circle } = require("./shapes.js");

// Triangle test
describe("Triangle test", () => {
    test("should produce a tiangle with a green background", () => {
        const shape = new Triangle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<polygon points="162.5,20 250,175 75,175" fill = green/>');
    });
});

// Circle test
describe("Circle test", () => {
    test("should produce a circle with a green background", () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill = green/>');
    });
});


// Square test
describe("Square test", () => {
    test("should produce a square with a green background", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual(`<rect x="73" y="40" width="175" height="175" fill = green/>`);
    });
});