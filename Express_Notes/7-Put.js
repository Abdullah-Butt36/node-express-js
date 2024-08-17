const express = require("express");
const app = express();
let { people } = require("./data");

// built-in middlewares
app.use(express.static("./methods-public"));

//built-in midlewrare
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "Please add cardentials" });
  }
  res.status(201).send({ success: true, person: name });
});

app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(401).json({ success: false, msg: "Please add cardentials" });
  }
  res.status(201).send({ sucess: true, data: [...people, name] });
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(404).send("please provide cardentials");
});

// Update data
app.put("/api/people/:id" , (req , res) => {
    const {id} = req.params;
    const {name} = req.body;
   
    const person = people.find((person) => person.id === Number(id))
    if (!person) {
      res.status(404)
      .json({ success: false, msg: `no person with id ${id}` });
    }
    const newPeople = people.map((person) => {
      if(person.id === Number(id)){
        person.name = name
      }
      return person
    })
    res.status(200).json({success:true , data : newPeople})
})


app.listen(5000, () => {
  console.log("port is running on server 5000");
});
