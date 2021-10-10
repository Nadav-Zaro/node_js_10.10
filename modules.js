//--1--
const chalk = require("chalk");
function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
function arrSumBlue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(chalk.blue(sum));
}
function arrSumBoldY(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(chalk.yellow.bold(sum));
}
function addText(str) {
    const fs = require("fs");
    fs.appendFile("only_text.txt", str, err => {
        if (err) {
            console.log(err);
        }
    })
}
function fileNameAsync(fileName) {
    const fs = require("fs");
    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log("async", data);
    })
}
function fileNameSync(fileName) {
    const fs = require("fs");
    const data = fs.readFileSync(fileName, "utf8")
    console.log("sync", data);
}
function getNameText(fileName, text) {
    const fs = require("fs");
    fs.appendFile(fileName, text, err => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports.arrSum = arrSum;
module.exports.arrSumBlue = arrSumBlue;
module.exports.arrSumBoldY = arrSumBoldY;
module.exports.addText = addText;
module.exports.fileNameAsync = fileNameAsync;
module.exports.fileNameSync = fileNameSync;
module.exports.getNameText = getNameText;