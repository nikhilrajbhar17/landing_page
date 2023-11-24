const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 8000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", require("./routes/index"));
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
