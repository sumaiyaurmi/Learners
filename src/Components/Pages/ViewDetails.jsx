import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const card = useLoaderData();
  const { _id, title, image, description, level, marks, deadline, creator } =
    card;
  return (
 <div className=" rounded-2xl my-5 min-h-screen">
       <div className="flex gap-4 flex-col md:flex-row my-6">
      <div className="md:w-1/2">
        <img src={image} className="rounded-3xl p-4" alt="" />
      </div>
      <div className=" mt-5 space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
        <p>{description}</p>
        <div className="mt-4 space-x-6">
          <button className="px-3 py-2  border bg-green-300 rounded-full">
            {" "}
            <span className="font-bold">mark:</span> {marks}
          </button>
          <button className="px-3 py-2  border bg-amber-300 rounded-full">
            <span className="font-bold">Level:</span> {level}
          </button>
        </div>
        <p className="md:text-left">
          <span className="font-bold">
            Deadline:{" "}
           
          </span>
          {new Date(deadline).toLocaleDateString()}

        </p>
<div >
<h4 className="font-extrabold text-lg md:text-left">Creator:</h4>
<div className="flex flex-col  md:items-start">
<p><span className="font-semibold">Name:  </span> {creator.name}</p>
<p><span className="font-semibold">Email:</span> {creator.email}</p>

</div>
    </div> 
     </div>
    </div>
    <div>
   <Link to={`/submission-form/${_id}`}> <button
        type="submit"
        className="btn my-4 md:w-1/4 hover:text-amber-500 hover:bg-slate-700 border-amber-500"
      >
        Take Assignment
      </button></Link>
    </div>
 </div>
  );
};

export default ViewDetails;
