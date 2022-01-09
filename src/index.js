const express = require("express");
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

//express middleware

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("Get request disabled!");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("Site under maintainence!");
// });

app.use(express.json()); //configure express to automatically parse json data
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

//get Owner details from task.owner ObjectID

const Task = require("./models/task");
const User = require("./models/user");

// const main = async () => {
//   to get User who created the Task
//   const task = await Task.findById("61dabada333d4a10f0f9de69");
//   await task.populate("owner");
//   console.log(task.owner);

//   to get all tasks of a user, using VIRTUAL property. see userSchema

//   const user = await User.findById("61dabac1333d4a10f0f9de63");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };

// main();
