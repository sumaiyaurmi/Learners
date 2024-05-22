import { useEffect, useState } from "react";
import useAxios from "../UseHooks/useAxios";
import AssignmentCard from "../Layouts/AssignmentCard";

const Assignments = () => {
  const axiosSecure = useAxios();
  const [assignments, setAssignments] = useState([]);
const [itemsPerPage,setItemParPage] =useState(4)
const [count,setCount] =useState(0)
const [currentPage,setCurrentPage]=useState(1)
const [filter,setFilter]=useState('')


  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/all-assignments?page=${currentPage}&size=${itemsPerPage}&filter=${filter}`);
      setAssignments(data);
      // console.log(data);
    };
    getData();
    
  }, [axiosSecure,currentPage,itemsPerPage,filter]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axiosSecure.get(`/assignments-count?filter=${filter}`);
      setCount(data.count);
    };
    getCount();
  }, [axiosSecure,filter]);

const numbarOfPages =Math.ceil(count/itemsPerPage)
  const pages = [...Array(numbarOfPages).keys()].map(element => element +1)

const handlePaginationButton=(value)=>{
// console.log(value)
setCurrentPage(value)

}
const handleReset=()=>{
  setFilter('')
}

  return (
    <div className="mt-8 min-h-screen">
      <div className=" flex justify-center gap-5">
        <div>
          <select
            name="category"
            id="category"
            onChange={e => setFilter(e.target.value)}
            value={filter}
            className="border-amber-500 border p-2 rounded-lg"
          >
            {/* <option value="" disabled  defaultValue={}>Difficulty Level</option> */}
            <option disabled value=''>Filter By Level</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
        onClick={handleReset}
          className="btn hover:text-amber-500 hover:bg-slate-700
             border-amber-500"
        >
          Reset
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-12 my-10 ">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            setAssignments={setAssignments}
            assignments={assignments}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>


{/* Pagination  */}
      <div className="flex justify-center mb-10">

        {/* Previous Button */}
        <button 
        disabled={currentPage === 1}
        onClick={()=>handlePaginationButton(currentPage-1)}
        className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-amber-500 hover:bg-slate-700">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
          onClick={()=>handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${currentPage === btnNum ? "text-amber-500 bg-slate-700 " : ""} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:text-amber-500 hover:bg-slate-700`}
          >
            {btnNum}
          </button>
        ))}

{/* Next Button */}

        <button
                disabled={currentPage === numbarOfPages}

                onClick={()=>handlePaginationButton(currentPage+1)}

        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md  disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-amber-500 hover:bg-slate-700 disabled:cursor-not-allowed disabled:text-gray-500">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Assignments;
