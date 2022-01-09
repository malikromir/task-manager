require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("61d708885edcb67a74dba8f1", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return { user: user, count: count };
};

updateAgeAndCount("61d708885edcb67a74dba8f1", 2)
  .then((obj) => {
    console.log(obj.user);
    console.log(obj.count);
  })
  .catch((e) => {
    console.log(e);
  });
