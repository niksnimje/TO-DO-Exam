import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

function GetTask() {
    const [data,setdata]=useState([])
     const [title,settitle]=useState()
     const [newdata,setnewdata]=useState()
    const navigate=useNavigate()

    const getAllTODO = () => {
    axios.get("http://localhost:8080/api/todo/gettask",{withCredentials:true})
    .then((res)=>{
        setdata(res.data.task)
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    const handelDelete=(_id)=>{
        axios.delete(`http://localhost:8080/api/todo/deteletask/${_id}`,{withCredentials:true})
    .then((res)=>{
        console.log("data delete")
        getAllTODO()
    })
    .catch((err)=>{
        console.log(err)
    })
    }

    const handelUpdate=(_id)=>{
        const TodoUpdatedata={title}

        axios.patch(`http://localhost:8080/api/todo/updatetask/${_id}`,TodoUpdatedata,{withCredentials:true})
    .then((res)=>{
        navigate("/editpage")
        setnewdata(res.data)
        getAllTODO()
    })
    .catch((err)=>{
        console.log(err)
    })
    }
    


  useEffect(() => {
    getAllTODO()
  }, [])

  return (
    <>
        <div className="d-flex flex-column flex-md-row h-100 " style={{ minHeight: "100vh" }}>
        <div className="w-100 h-100 p-4">
          <p>All TODO </p>
        <div>
            
        {
                data.map((el)=>(
                    <div key={el._id}>
                        <h1>{el.title}</h1>
                        
                        <button onClick={()=>handelDelete(el._id)}>delete</button>
                        <button onClick={()=>handelUpdate(el._id)}>Edit</button>
                    </div>
                ))
            }
        </div>
        </div>
      </div>
    </>
  )
}

export default GetTask
