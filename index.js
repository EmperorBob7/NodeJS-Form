const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.static("public"));

app.listen(3000, () => {
    console.log('server started');
});

app.post("/login", (req, res) => {
    const data = req.body;
    console.log(data);
    res.redirect("redirect.html");
});