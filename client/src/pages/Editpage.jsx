import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function Editpage() {

  const [title,settitle]=useState()


    const navigate=useNavigate()



    const handelSubmit=(e)=>{
        e.preventDefault()
        
        
          const TodoUpdatedata={title}

        axios.patch(`http://localhost:8080/api/todo/updatetask/${_id}`,TodoUpdatedata,{withCredentials:true})
        .then((res)=>{
         navigate("/")
        })
        .catch((err)=>{
        console.log(err)
        })
    

    }



  return (
    <>
        <form action="" onSubmit={handelSubmit}>
            <input type="text" placeholder='Add' onChange={(e)=>settitle(e.target.value)} />
            {/* <input type="submit" /> */}
            <button onClick={()=>handelUpadete()}> Sumbit</button>

        </form>
        
    </>
  )
}

export default Editpage
