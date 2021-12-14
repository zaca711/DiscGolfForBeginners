const express = require("express");
const ejs = require("ejs");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("DiscGolf");
});

app.get("/contact.html", (req, res) => {
    res.render("contact");
});  

app.get("/DiscBlog.html", (req, res) => {
    res.render("DiscBlog");
});

app.get("/DiscGolf.html", (req, res) => {
  res.render("DiscGolf");
});

app.get("/DistanceDriver.html", (req, res) => {
  res.render("DistanceDriver");
});  

app.get("/FairwayDriver.html", (req, res) => {
  res.render("FairwayDriver");
});  

app.get("/Midrange.html", (req, res) => {
  res.render("Midrange");
});  

app.get("/Putter.html", (req, res) => {
  res.render("Putter");
});  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
