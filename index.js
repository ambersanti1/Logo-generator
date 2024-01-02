const inquirer = require("inquirer");
const fs = require("fs"); //fs = file system

const { Triangle, Square, Circle } = require("./lib/shape");

const generateSVGFile = ({ shape, shapeColor, textColor, text }) =>
  `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>${shape}<text x="150" y="110" text-anchor="middle" font-size="40" fill="${textColor}">${text}</text></g></svg>`;

function prompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message:
          "Type in the the text on your logo (enter no more than 3 characters):",
      },
      {
        type: "input",
        name: "textColor",
        message:
          "Type in the color keyword or the hexadecimal number of the text: ",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose the shape of your logo: ",
        choices: ["Triangle", "Square", "Circle"],
      },
      {
        type: "input",
        name: "shapeColor",
        message:
          "Type in the color keyword or the hexadecimal number of the shape: ",
      },
    ])
    .then((answers) => {
      if (answers.text.length > 3) {
        console.log("Text length must contain no more than 3 characters");
        prompt();
      } else {
        if (answers.shape === "Triangle") {
          answers.shape = `<polygon points = "150, 18 244, 182 56, 182" fill = "${answers.shapeColor}" />`;
        } else if (answers.shape === "Circle") {
          answers.shape = `<circle cx = "150" cy ="100" r = "90" fill = "${answers.shapeColor}" />`;
        } else if (answers.shape === "Square") {
          answers.shape = `<rect x = "60" y = "10" width = "180" height = "180" fill="${answers.shapeColor}" />`;
        }
        const svgContent = generateSVGFile(answers);
        fs.writeFile("logo.svg", svgContent, (err) =>
          err ? console.log(err) : console.log("Successfully created logo.svg!")
        );
      }
    });
}
prompt();
