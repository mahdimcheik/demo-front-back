const express = require("express");
const cors = require("cors");
const apiDemo = express();

apiDemo.use(cors({}));

const dbUser = [
  {
    id: 10,
    name: "Mahdi",
  },
  {
    id: 1,
    name: "Dimitri",
  },
  {
    id: 3,
    name: "Manon",
  },
  {
    id: 4,
    name: "Elea",
  },
];
const port = 5000;
apiDemo.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("app is working");
  }
});

apiDemo.get("/", (req, res) => {
  const id = +req.query.id;
  console.log("id : ", id);
  const user = dbUser.find((user) => user.id === id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "utilisateur inconnu" });
  }
});
