const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const articleRouter = require("./routes/articles");

app.engine("hbs", exphbs());

app.set("view engine", "hbs");

app.use(express.static("public"));

const hbs = exphbs.create({
  defaultLayout: "main",
  layoutsDir: "views/layouts",
  partialsDir: "views/partials",
  extname: ".hbs",
});

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  articles = {
    user: {
      title: "Test Article",
      createAt: Date.now(),
      description: "Test description",
    },
    style: "style.css",
  };
  res.render("index", articles);
});

app.get("/about", (req, res) => {
  aboutapp = {
    style: "about.css",
  };
  res.render("about", aboutapp);
});

app.listen(5000, () => {
  console.log("Server is starting at port wait.. ", 5000);
});
