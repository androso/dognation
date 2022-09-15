import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;
import session from 'express-session';
import passport from 'passport';

app.use(express.json());
app.use(express.static(__dirname + '/src/public'));

app.get("/", (req, res) => {
	res.send("Hello world!!");
})

app.listen(PORT, () => {
	console.log("app listening on port", PORT);
})