//dotenv
require("dotenv").config();

// Connect DB
const { connectDB } = require("./configs/db"); 
connectDB();

const express = require("express");
const cors = require("cors");

const app = express();
const authRoute = require("./routes/authRoute")
const port = process.env.APP_PORT;

// Cors
app.use(cors());

// Body Parser
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "Success",
    data: {
      post: ["dsadaaaaaa"],
    },
  });
});

app.use("/api/v1/auth", authRoute)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
