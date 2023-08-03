// Render circle shape
class Shape {
    constructor() {
        this.color = "";
    };
    setColor(color) {
        this.color = color;
    }
}

// Each shape inherits the class properties defined in 'Shape'
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill = ${this.color}/>`
    };
};

class Triangle extends Shape {
    render() {
        return `<polygon points="162.5,20 250,175 75,175" fill = ${this.color}/>`
    };
};

class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="175" height="175" fill = ${this.color}/>`
    };
};

module.exports = { Circle, Triangle, Square };