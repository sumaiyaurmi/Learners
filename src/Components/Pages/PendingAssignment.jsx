import React, { useEffect, useState } from "react";
import useAxios from "../UseHooks/useAxios";

const PendingAssignment = () => {
  const [pendingAssignments, setPendingAssignments] = useState([]);
  const axiosSecure = useAxios();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/pendings`);
      setPendingAssignments(data);
      console.log(data);
    };
    getData();
  }, [axiosSecure]);

  console.log(pendingAssignments);


  const handleGiveMark = async (e)=>{
e.preventDefault()
const form=e.target;
const myMark=form.givenMark.value;
const feedback=form.feedback.value;
console.log(myMark,feedback, )

  }

  const handleStatus=async (id, prevStatus, status)=>{
    console.log(id, prevStatus, status);
    if (prevStatus === status) return console.log("srb bhi hbe na");

    const { data } = await axiosSecure.patch(
      `/submissions/${id}`,
      { status }
    );
    console.log(data);
    // const remaining=pendingAssignments.filter(penAssignment => penAssignment._id === !id)
    // setPendingAssignments(remaining)
     }

  return (
    <section className="container px-4 mx-auto pt-1 my-10 ">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">Pending Assignment</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {pendingAssignments.length} Pending Assignments
        </span>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-3 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Assignment Marks
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Examinee Name</span>
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    ></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-left ">
                  {pendingAssignments.map((pendingAssign) => (
                    <tr key={pendingAssign._id}>
                      <td className=" py-4 px-2 text-sm text-gray-500  whitespace-nowrap">
                        {pendingAssign.title}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="px-3 py-1 rounded-full text-amber-500 font-semibold bg-slate-100
                             "
                          >
                            {pendingAssign.marks}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {pendingAssign.name}
                      </td>
                      <td className=" py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <button
                          className="btn hover:text-amber-500 hover:bg-slate-700 border-amber-500"
                          onClick={() =>
                            document.getElementById("my_modal_5").showModal()
                          }
                        >
                          Give Mark
                        </button>
                        <dialog
                          id="my_modal_5"
                          className="modal modal-bottom sm:modal-middle"
                        >
                          <div className="modal-box">
                            <h4 className="font-bold text-lg">PDF/Docs link : <br /> <a href={pendingAssign.pdf}
                            target="blank"
                            className="font-normal hover:underline text-sm"
                            >{pendingAssign.pdf}</a></h4>
                            <p className="py-4 font-bold text-lg">
                              Note: <span className="text-slate-500 font-medium text-[16px]">{pendingAssign.note}</span>
                            </p>

<form onSubmit={ handleGiveMark}

 >
<div className="form-control">
        <label className="label">
          <span className="label-text font-medium">Give Mark </span>
        </label>
        <input
          type="number"
          placeholder="marks"
          name="givenMark"
          
          className="input input-bordered md:w-1/2 "
          required
        />
      </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text font-medium">Provide a feedback</span>
          </label>
          <textarea
            name="feedback"
            id=""
            type="text"
            placeholder="Type here"
            className="border md:w-1/2 rounded-lg p-3"
            cols="6"
            rows="4"
          ></textarea>
           <div className="text-center md:text-left">
          <button  onClick={()=>handleStatus(pendingAssign._id,pendingAssign.
  status,"Complete")}
            type="submit"
            className="btn my-4 w-1/2 md:w-1/4  hover:text-amber-500 hover:bg-slate-700 border-amber-500"
          >
            Submit
          </button>
        </div>
        </div>
</form>

                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn hover:text-amber-500 hover:bg-slate-700 border-amber-500">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendingAssignment;
