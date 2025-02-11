import { useContext } from "react";
import useAxios from "../UseHooks/useAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const AssignmentCard = ({ assignment ,assignments,setAssignments}) => {
  const { _id, title, image, description, level, marks, deadline,creator } =assignment;
    const axiosSecure = useAxios();
const {user}=useContext(AuthContext)


    const handleDelete= id=>{
      if(creator?.email !== user?.email) return (
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          
        })
      );

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then((result) => {
        if (result.isConfirmed) {
          const {data}= axiosSecure.delete(`/assignments/${id}`)
  // console.log(data)
  const remaining=assignments.filter(assignment => assignment._id !== id)
  setAssignments(remaining)
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
      
        }

  return (
    <div className="card transition hover:-translate-y-1 delay-150 duration-300  hover:scale-110 flex gap-2 items-center justify-center card-side bg-base-300 shadow-xl">
      <div className="space-y-3 w-1/2">
      <img src={image} className="rounded-xl w-[200px] h-[150px] " alt="Movie" />

        <div className=" flex  w-full justify-evenly py-2">
          <Link to={`/assignments-update/${_id}`}><button className="btn hover:text-amber-500 hover:bg-slate-700 border-amber-500">Update</button></Link>
          <button onClick={()=>handleDelete(_id)} className="btn hover:text-amber-500 hover:bg-slate-700 border-amber-500">Delete</button>
        </div>
        <div>
       <Link to={`/assignments/${_id}`}>   <button className="w-full mr-10 btn hover:text-amber-500 hover:bg-slate-700 border-amber-500"> View Assignment</button></Link>
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


