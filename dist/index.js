const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const session = require('express-session');
const passport = require('passport');
app.use(express.json());
app.use(express.static(__dirname + '/src/public'));
app.get("/", (req, res) => {
    res.send("Hello world!!");
});
app.listen(PORT, () => {
    console.log("app listening on port", PORT);
});
//# sourceMappingURL=index.js.map