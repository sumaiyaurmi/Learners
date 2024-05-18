import React, { useEffect, useState } from "react";
import useAxios from "../UseHooks/useAxios";
import AssignmentCard from "../Layouts/AssignmentCard";

const Assignments = () => {
  const axiosSecure = useAxios();
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/assignments`);
      setAssignments(data);
      console.log(data);
    };
    getData();
  }, [axiosSecure]);

  return (
    <div>
        <div>
  <select name="category" id="category" className="border-amber-500 border p-2 rounded-lg">
    {/* <option value="">Difficulty Level</option> */}
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
  </select>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10 my-10 ">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment._id}
            assignment={assignment}
          ></AssignmentCard>
        ))}
      </div>
    </div>
  );
};

export default Assignments;

;
