require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const UserRouter = require("./routes/userRoutes");
const SprintTask = require("./routes/sprintRoutes");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json()); //this is imp for acceptting data from body;
app.use("/api/user", UserRouter);
app.use("/api/sprint", SprintTask);
connect();
app.listen(PORT, () => {
  console.log("server started");
});
