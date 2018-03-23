// import App from "../src/App";

const express = require("express");
const {json} = require("body-parser");
const app = express();
const port = 3001;

const heroCtrl = require("./controllers/heroes_controller")

app.use(json());






app.get("/api/heroes", heroCtrl.getHeroes);
app.post("/api/heroes", heroCtrl.postHeroes);
// app.put("/api/heroe/:ids", heroCtrl.putHeroes);
// app.delete("/api/heroes/:id", heroCtrl.deleteHeroes);



app.listen(port, ()=> console.log (`listening on: ${port}`));
