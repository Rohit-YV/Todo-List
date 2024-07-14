import express from "express";
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
let items = []; 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 

app.get("/", (req, res) => {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    const day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindofday: day,
        newlistitems: items 
    });
});

app.post("/", (req, res) => {
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
