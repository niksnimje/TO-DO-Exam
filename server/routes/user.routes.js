const express=require("express")
const { Task, GetTask,DeleteTask, UpdateTask } = require("../controller/todo.controller")

const userRoutes=express.Router()

userRoutes.post("/task",Task)
userRoutes.get("/gettask",GetTask)
userRoutes.delete("/deteletask/:todoID",DeleteTask)
userRoutes.patch("/updatetask/:todoID",UpdateTask)


module.exports=userRoutes   