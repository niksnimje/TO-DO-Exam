const express = require("express");
const connection = require("./utils/db");
const dotenv=require("dotenv");
const userRoutes = require("./routes/user.routes");
dotenv.config()
const cors=require("cors");


const app = express();
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:5173","http://localhost:3000"],
  credentials:true
}))



app.use("/api/todo", userRoutes);



app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Server is running on port ");
    console.log("Connected to DB");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
  }
  
});