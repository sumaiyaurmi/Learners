import React from "react";

const AssignmentCard = ({ assignment }) => {
  const { _id, title, thumbnail, description, level, marks, due_date } =
    assignment;

  return (
    <div className="card transition hover:-translate-y-1 delay-150 duration-300  hover:scale-110 flex gap-2 items-center justify-center card-side bg-base-100 shadow-xl">
      <div className="space-y-3 w-1/2">
      <img src={thumbnail} className="rounded-xl w-[200px] h-[150px] " alt="Movie" />

        <div className=" flex  w-full justify-evenly py-2">
          <button className="btn hover:text-amber-500 hover:bg-slate-700 border-amber-500">Update</button>
          <button className="btn hover:text-amber-500 hover:bg-slate-700 border-amber-500">Delete</button>
        </div>
        <div>
          <button className="w-full mr-10 btn hover:text-amber-500 hover:bg-slate-700 border-amber-500"> View Assignment</button>
        </div>
      </div>
      <div className="card-body space-y-3 w-1/2">
        <h2 className="card-title">{title}</h2>
        <p className="text-slate-500">{description}</p>
        <button className="py-1  border bg-green-300 rounded-full"> <span className="font-bold">mark:</span> {marks}</button>
          <button className="py-1  border bg-amber-300 rounded-full"><span className="font-bold">Level:</span> {level}</button>
        
        
      </div>
    </div>
  );
};

export default AssignmentCard;
