const express = require("express");
const mongoose = require("mongoose");


const { UserRouter } = require("./routes/user-route");
const { CourseRouter } = require("./routes/course-route");
const { AdminRouter } = require("./routes/admin-route");
const app = express();
app.use(express.json())

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/courses", CourseRouter);
app.use("api/v1/admin", AdminRouter);



async function main() {
  await mongoose.connect(
    "mongodb+srv://ajinkyashinde7756:ajinkya%407756@todo.jlwttog.mongodb.net/"
  );

  app.listen(3000);
}

main();
