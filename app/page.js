"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const submithandler=(e)=>{
    e.preventDefault();
    setmaintask([...maintask,{title,Desc}])
    settitle("");
    setDesc("");
    console.log(maintask);
  }
  
  const deletehandler=(i)=>{
      let copytask=[...maintask];
      copytask.splice(i,1);
      setmaintask(copytask);
  }
  let rendertask="No Task avilable";
  if(maintask.length>0){
  rendertask=maintask.map((t,i)=>{
    return <li key={i} className='flex items-center justify-between mb-4'>
      <div className=' w-3/5 flex justify-between mb-3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-medim'>{t.Desc}</h6>
    </div>
    <button 
    onClick={()=>{
      {deletehandler(i)}
    }}
    className='bg-red-800 text-white px-4 py-2 rounded-sm text-xl '>Delete</button>
    </li>
  })
}
  return (
   <>
   <h1 className='bg-black text-white text-center text-2xl py-4 font-bold tracking-widest font-mono'>
    My Todo-List
   </h1>
   <form onSubmit={submithandler}>
    <input 
    type="text"    
    className='border-2 bg-slate-300 border-zinc-800 text-xl px-3 py-3 m-8 rounded-lg border-solid'
    placeholder='Enter the task'
    value={title}
    onChange={(e)=>{
      settitle(e.target.value);
    }
  }

    />
    <input 
    type="text"    
    className="border-2 bg-slate-300 text-xl px-3 py-3 m-8 	border-zinc-800 border-solid rounded-lg"
    placeholder='Enter Description here'
    value={Desc}
    onChange={(e)=>{
      setDesc(e.target.value);
    }}
    />
    <button className='border-4 bg-rose-950 px-3 py-2 m-8 text-white rounded-lg text-2lg font-bold font-mono'>Add Task</button>
   </form>
   <hr />
    <div className='p-8 bg-slate-200'>
      <ul>
        {rendertask}
      </ul>
    </div>
   </>
   
  )
}

export default page