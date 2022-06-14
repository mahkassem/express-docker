const app = require("express")();
const dotenv = require("dotenv");

dotenv.config();
const name = process.env.NAME || "Amr";

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send(`Docker is easy 🐳 Test. ${name}`);
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});