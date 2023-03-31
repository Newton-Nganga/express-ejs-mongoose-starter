const express = require("express");
const router = express.Router();
const connection = require("./db");
//import the schemas
const { User, Book } = require("./models/models");

//try to connect to the db
console.log("____ TRYING TO CONNECT TO DB ____");
connection();


//Home route

router.get("/", (req, res) => res.render("index")); //render the homepage

router.post("/", async (req, res) => {
  //destructure all the fields received from user
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  //check to ensure all the fields have values
  if (!name || !email || !password) {
    console.log("Ensure all your fields have values");
    return res
      .status(400)
      .json({ message: "Ensure all your fields have values" });
  }

  //waait for the user document to be created
  const userCreated = await User.create({ name, email, password });
  //if userwas not created log the error
  if (!userCreated) {
    console.log(`user was not created the error was`);
  }
  //if user created successfully log him/her
  console.log(`user created : ${userCreated}`);

  res.redirect("/users");
});

router.get("/users", async (req, res) => {
  //find all the users
  await User.find({})
    .then((fetchedUsers) => {
      //render fetchedUsers at the /users
      res.render("users", { users: fetchedUsers });
    })
    .catch((err) =>
      console.log(`couldnt fetch users coz this error occurred, ${err}`)
    );
});

module.exports = router;
