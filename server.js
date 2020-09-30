const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send('Hello');
});

app.get("/:echo", (req, res) => {
    res.send('   ' + req.params.echo);
});

app.listen(PORT, () => {
   console.log('8000');
});