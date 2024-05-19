import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const card = useLoaderData();
  const { _id, title, image, description, level, marks, deadline, creator } =
    card;
  return (
 <div className="bg-slate-200 rounded-2xl my-5">
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
<p><span className="font-semibold">Name:  </span> {creator.email}</p>
<p><span className="font-semibold">Email:</span> {creator.name}</p>

    </div> 
     </div>
    </div>
    <div>
    <button
        type="submit"
        className="btn my-4 w-1/4 hover:text-amber-500 hover:bg-slate-700 border-amber-500"
      >
        Take Assignment
      </button>
    </div>
 </div>
  );
};

export default ViewDetails;
