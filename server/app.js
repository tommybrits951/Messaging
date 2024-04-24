require("dotenv").config;
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.NODE_PORT || 9000;
const userRouter = require("./routes/userRouter");
const messageRouter = require("./routes/messageRouter");

app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173"
  })
);

app.use(express.json());

app.use(cookieParser(JSON.stringify(process.env.REFRESH_SECRET)));

app.use("/users", userRouter);

app.use("/messages", messageRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
