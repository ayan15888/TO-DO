"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const deleteHandler=(i)=>{
let copytask=[...maintask]
copytask.splice(i,1)
setMaintask(copytask)
  }
  const [maintask, setMaintask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMaintask([...maintask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(maintask);
  };

  let rendertask = (
    <h2 className="font-bold">
      No Task Avialable <span class="emoji">🙄</span>
    </h2>
  );
  if(maintask.length>0){
  rendertask = maintask.map((t, i) => {

      return (
        <li id="taskli" className="flex justify-between items-center">
          <div id="taskbox" className="my-1  ml-3 mb-5 items-center w-2/3">
            <h3 className=" bg-yellow-300 text-black rounded py-2 px-4 my-6 text-1xl font-semibold">
              {t.title}
            </h3>
            <h4 id="desc" className=" font-normal ">
              {t.desc}
            </h4>
            <hr />
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            id="delete"
            className=" bg-red-500 rounded"
          >
            Delete
          </button>
        </li>
      );
  });
}
  return (
    <>
      <h1 id="mainh1" className="  text-center  my-5">
        TO-DO
      </h1>
      <div id="main" className="items-center flex justify-center">
        <div id="box">
          <form onSubmit={submitHandler}>
            <h1 className="text-2xl font-normal mx-6 py-3 ">Task</h1>
            <input
              type="text"
              className="m-4 mx-6  py-2 rounded  "
              placeholder="   Enter Task here"
              value={title}
              onChange={(e) => {
                console.log(e);
                settitle(e.target.value);
              }}
            />
            <input
              type="text"
              className="m-5 mx-6  py-2 rounded  "
              placeholder="   Enter Description here"
              value={desc}
              onChange={(e) => {
                console.log(e);
                setdesc(e.target.value);
              }}
            />
            <button>Add Task🧾</button>
          </form>
        </div>
      </div>
      <div id="page2">
        <div id="second">
          <ul>{rendertask}</ul>
        </div>
      </div>
    </>
  );
};

export default page;
