import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useAxios from "../UseHooks/useAxios";
import { FaFilePdf } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";

const MyAssignments = () => {
  const axiosSecure = useAxios();
  const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    getData();
  }, [user, setSubmissions]);

  const getData = async () => {
    const { data } = await axiosSecure(`/submissions/${user?.email}`);
    setSubmissions(data);
  };



  return (
    <section className="container px-4 mx-auto pt-1 my-10  ">
      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Assignment</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          {submissions.length} Assignments
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
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Deadline</span>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Preview
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Assignment Marks
                    </th>
                    

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                     Obtained Mark & FeedBack
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 text-left ">
                  {submissions.map((submission) => (
                    <tr key={submission._id}>
                      <td className=" py-4 px-4 text-sm text-gray-500  whitespace-nowrap">
                        {submission.title}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        {new Date(submission.deadline).toLocaleDateString()}
                      </td>

                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                            submission.status === 'pending' &&
                            'bg-yellow-100/60 text-yellow-500'
                          } ${
                            submission.status === 'Complete' &&
                            'bg-emerald-100/60 text-emerald-500'
                          } `}>
                            <span  className={`h-1.5 w-1.5 rounded-full ${
                              submission.status === 'pending' && 'bg-yellow-500'
                            }  ${submission.status === 'Complete' && 'bg-green-500'}  `}></span>
                            <h2 className="text-sm font-normal ">
                              {submission.status}
                            </h2>
                          </div>
                        </td>{" "}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                        <div>
                          <a href={submission.pdf} target="_blank">
                            <FaFilePdf size={25} color="red" />
                          </a>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p
                            className="px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                           text-xs"
                          >
                            {submission.marks}
                          </p>
                        </div>
                      </td>
                     
                      <td className="px-16 py-4 text-sm whitespace-nowrap">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button
                          className="btn"
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                        >
<MdFeedback />
                        </button>
                        <dialog id="my_modal_1" className="modal">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg">Mark!</h3>
                            <p className="py-4">
                              {submission.myMark}
                              
                            </p>
                            <h3 className="font-bold text-lg">FeedBack!</h3>
                            <p className="py-4">
                              {submission.feedback}
                              
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
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

export default MyAssignments;
