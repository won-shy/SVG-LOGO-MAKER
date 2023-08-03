// import inquirer
const inquirer = require('inquirer');


// import file system module
const fs = require('fs');

// import shapes file
const { Circle, Triangle, Square } = require('./lib/shapes');

// function generateSVG(shape) {
//     let newShape = shape.render();
//     return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${newShape}</svg>`

// }

function writeToFile(fileName, answers) {
    // Start with empty string for the text inside the svg logo, set the size of the logo, add g tag to ensure the text is in front of the image, then add the user's shape
    let svgText = "";
    svgText = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgText += "<g>";
    svgText += `${answers.shape}`;

    // Conditional to determine which shape user chooses
    let shape;
    if (answers.shape === 'Circle') {
        let circleShape = new Circle();
        svgText += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === 'Triangle') {
        let triangleShape = new Triangle();
        svgText += `<polygon points="162.5,20 250,175 75,175" fill = "${answers.shapeColor}"/>`;
    } else {
        let squareShape = new Square();
        svgText += `<rect x="73" y="40" width="175" height="175" fill = "${answers.shapeColor}"/>`;
    }
    // put answers.text within the text tag given from svg and assign the fill of the text answers.textColor
    svgText += `<text x="150" y="130" text-anchor="middle" font-size="40" fill ="${answers.textColor}">${answers.text}</text>`;
    // add cloding g and svg tags to svg text string
    svgText += "</g>";
    svgText += "</svg>";

    // generate the new file using fs module/ error handling
    fs.writeFile(fileName, svgText, (err) => {
        err ? console.log(err) : console.log("Logo generated!");
    });

}

// GIVEN a command - line application that accepts user input


// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword(OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword(OR a hexadecimal number)

//function to promp the user to answer questions about their logo and save the users answers
function promptUser() {
    inquirer
        .prompt([
            // Logo text
            {
                type: "input",
                message: "What text would you like the logo to display? Please only enter three characters.",
                name: "text",
            },
            // Text color
            {
                type: "input",
                message: "Input desired text color using a color keyword or a hexidecimal number.",
                name: "textColor",
            },
            // Logo shape
            {
                type: "list",
                message: "What shape would you like the logo to display?",
                choices: ["Triangle", "Square", "Circle"],
                name: "shape",
            },
            // Shape color
            {
                type: "input",
                message: "Input desired shape background color using a color keyword or a hexidecimal number.",
                name: "shapeColor",
            },
        ])
        .then((answers) => {
            // No more than 3 characters acceptable for user input for logo
            if (answers.text.length > 3) {
                console.log("Please enter a text input of no more than 3 characters.");
                // If user enters more than 3 characters, prompt again
                promptUser();
            } else {
                // Once prompts are answered, call function to write svg file
                writeToFile("logo.svg", answers);
            };
        });
}

// WHEN I have entered input for all the prompts
// THEN an SVG file is created named`logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

promptUser();