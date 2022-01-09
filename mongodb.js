// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectId } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id.getTimestamp());

MongoClient.connect(
  connectionUrl,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to db");
    }
    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Seema",
    //     age: 45,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert");
    //     }
    //     console.log(result.insertedId);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Clean the house",
    //       completed: true,
    //     },
    //     {
    //       description: "Eat lunch",
    //       completed: true,
    //     },
    //     {
    //       description: "Buy grocery",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Error");
    //     }
    //     console.log(result.insertedIds);
    //   }
    // );
    // db.collection("users").findOne({ name: "Romir" }, (error, user) => {
    //   if (error) {
    //     return console.log("Couldn't fetch user");
    //   }
    //   console.log(user);
    // });
    // db.collection("users")
    //   .find({ name: "Romir" })
    //   .toArray((error, users) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ name: "Romir" })
    //   .count((error, count) => {
    //     if (error) {
    //       return console.log(error);
    //     }
    //     console.log(count);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("61d681f8559e4910732a7412"),
    //     },
    //     {
    //       $set: {
    //         name: "mike",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: true,
    //     },
    //     {
    //       $set: {
    //         completed: false,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("users")
      .deleteMany({ age: 21 })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
