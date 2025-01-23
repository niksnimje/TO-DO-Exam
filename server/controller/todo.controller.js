const TodoModel = require("../model/todo.model");


const Task=async(req,res)=>{
    const { title } = req.body;
    if(!title){
        return res.status(400).json({ message: "Please Fill all information" });
    }

    
    try {
        await TodoModel.create({ title});
        return res.status(200).json({ message: "TODO Created Successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

const GetTask=async(req,res)=>{
  

    try {
        const task = await TodoModel.find()
        if (!(task.length) > 0) {
            return res.status(404).json({ message: "Task Is Not Found" })
        }
        return res.status(200).json({ message: "Task Get Successfully", task })
        
    }
    catch (error) {
        return res.status(400).json({ message: error })
    }


}


const DeleteTask=async(req,res)=>{
    const { todoID } = req.params
    const isExistTODO= await TodoModel.findById(todoID)
    if (!isExistTODO) {
        return res.status(404).json({ message: "TODO Not Found" })
    }

    await TodoModel.findByIdAndDelete(todoID)
    return res.status(200).json({ message: "TODO Deleted Successfully" })

}


const UpdateTask=async(req,res)=>{
    const { todoID } = req.params
    const isExistTODO= await TodoModel.findById(todoID)
    if (!isExistTODO) {
        return res.status(404).json({ message: "TODO Not Found" })
    }

    try {
        await TodoModel.findByIdAndUpdate(todoID,req.body)
        return res.status(200).json({ message: "TODO Update Successfully" })
    } catch (error) {
        return res.status(404).json({ message:error })
    }


}




module.exports={Task,GetTask,DeleteTask,UpdateTask}



