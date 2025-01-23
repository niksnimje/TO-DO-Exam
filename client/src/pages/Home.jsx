import React, { useState } from 'react'
import GetTask from './GetTask'
import axios from 'axios'

function Home() {

    const [title,settitle]=useState()

    const handelSubmit=(e)=>{
        e.preventDefault()
        const Tododata={title}

        axios.post(`http://localhost:8080/api/todo/task`,Tododata,{
            withCredentials:true
        })
        .then((res)=>{
        console.log(res)
        window.location.reload()

        })
        .catch((err)=>{
        console.log(err)
        })
    }



  return (
    <>
        <h1>
            hello
        </h1>

        <form action="" onSubmit={handelSubmit}>
            <input type="text" placeholder='Add' onChange={(e)=>settitle(e.target.value)} />
            <input type="submit" />

        </form>
        
        <GetTask/>


    </>
  )
}

export default Home


