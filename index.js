// --1--
const printToConsle = require("./modules");
printToConsle.arrSum([2, 4, 2]);
printToConsle.arrSumBlue([2, 4, 2]);
printToConsle.arrSumBoldY([2, 4, 2]);
printToConsle.addText(" added text");
printToConsle.fileNameAsync("only_text.txt");
printToConsle.fileNameSync("only_text.txt");
printToConsle.getNameText("only_text.txt", " another blala");
// printToConsle.loadDoc();

//--3--
// השימוש בסיפוריות חיצוניות מקל עלינו את השימוש בשרת עם פונקציות שאדם אחר פיתח

//--4--
// מודולים מובנים הם מודולים שמובנים בג'אווה סקריפט על מנת להקל את השימוש של במשתמש
// מודולים חיצוניים הם מודולים שנכתבו ע"י גורם חיצוני והם פתוחים לשימוש
// מודולים של המפתח הם פונקציות שהמפתח כותב על מנת להשתמש בהם 

//--5--
const axios = require("axios").default;
axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (res) {
        if (res.status === 200) {
            console.log(res.data);
            printToConsle.addText(JSON.stringify(res.data));
        }
    })
    .catch(function (err) {
        console.log(err);
    })