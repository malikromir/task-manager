require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("61d709ab714a567b70d0ac53")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((count) => {
//     console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return { task, count };
};
deleteTaskAndCount("61d7eadac01a14263e648199")
  .then((result) => {
    console.log(result.task);
    console.log(result.count);
  })
  .catch((e) => {
    console.log(e);
  });
