import express from "express";
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
var today = new Date();
var currentDay = today.getDay();
var day ="";
switch(currentDay){
case 0:
    day = "Sunday";
    break;
case 1:
    day = "Monday";
    break;
case 2:
    day = "Tuesday";
    break;
case 3:
    day = "Wednesday";
    break;
case 4:
    day = "Thursday";
    break;
case 5:
    day = "Friday";
    break;
case 6:
    day = "Saturday";
    break;
default:
    console.log("Error:current day is equal to :"+ currentDay);
}

res.render("list",{
    kindofday: day
});
});
app.listen(3000,()=>{
    console.log("server is listening on port 3000");

});