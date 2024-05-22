import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import useAxios from "../UseHooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Update = () => {

    const card=useLoaderData()
    const [startDate, setStartDate] = useState(new Date(card.deadline));
    const axiosSecure = useAxios();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleUpdateAssignment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const marks = parseInt(form.mark.value);
    const image = form.image.value;
    const level = form.level.value;
    const deadline = startDate;

    const assignmentData = {
      title,
      description,
      image,
      marks,
      level,
      deadline,
      creator: {
        email: user?.email,
        name: user?.displayName,
        image: user?.photURL,
      },
    };
    // console.log(assignmentData);

    try {
      const { data } = await axiosSecure.put(`/assignments/${card._id}`, assignmentData);
      // console.log(data);
      toast.success("successfully Updated Assignment ");
      navigate("/assignments");
    } catch (err) {
      console.log(err);
      toast.error(`${err.message}`);
    }
  };



  return (
    <form
    onSubmit={handleUpdateAssignment}
    className=" my-8 bg-slate-200 p-10 rounded-2xl border-amber-500 border min-h-screen"
  >
    {/* 1st row */}
    <div className="grid grid-cols-1  md:grid-cols-2  gap-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Title</span>
        </label>
        <input
          type="text"
          placeholder="title"
          defaultValue={card.title}
          name="title"
          className="input input-bordered "
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Description</span>
        </label>
        <input
          type="text"
          placeholder="description"
          defaultValue={card.description}
          name="description"
          className="input input-bordered "
          required
        />
      </div>
    </div>
    {/* 2ns row */}
    <div className="grid grid-cols-1  md:grid-cols-2  gap-6">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Thumbnail Image</span>
        </label>
        <input
          type="text"
          placeholder="url"
          defaultValue={card.image}
          name="image"
          className="input input-bordered "
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Marks</span>
        </label>
        <input
          type="number"
          placeholder="marks"
          name="mark"
          defaultValue={card.marks}
          className="input input-bordered "
          required
        />
      </div>
    </div>
    {/* 3rd row */}
    <div className="grid grid-cols-1  md:grid-cols-2  gap-2">
      <div>
        <label className="label">
          <span className="label-text">Difficulty Level</span>
        </label>
        <select
          name="level"
          defaultValue={card.level}

          id="level"
          required
          className="border py-2 px-4 w-full rounded-lg"
        >
          <option disabled defaultValue={"Select an option"}>
            Select an option
          </option>

          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Due Date</span>
        </label>
        {/* Date Picker Input Field */}
        <DatePicker
          className="p-2 border w-full rounded-lg"
          name="date"
          defaultValue={card.deadline}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
    {/* 4th row */}
    <div>
      <button
        type="submit"
        className="btn mt-16 md:w-1/4 hover:text-amber-500 hover:bg-slate-700 border-amber-500"
      >
        Update Assignment
      </button>
    </div>
  </form>
  )
  ;
};

export default Update;
