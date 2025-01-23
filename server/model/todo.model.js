const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    title : String,
},{
    timestamps:true,
    versionKey:false
}
)


const TodoModel=mongoose.model("todo",todoSchema)

module.exports=TodoModel