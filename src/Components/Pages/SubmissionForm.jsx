import  { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import useAxios from "../UseHooks/useAxios";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SubmissionForm = () => {
  const cardData = useLoaderData();
  const { _id, title, image, description, level, marks, deadline, creator } =
    cardData;
  const axiosSecure = useAxios();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
const form=e.target
    const pdf = e.target.pdf.value;
    const note = e.target.note.value;
    const email = user?.email;
    const name=user?.displayName;
const myMark="Haven't got it yet";
const feedback="Haven't got it yet";

    const status='pending';
    const submissionData = {
      title,
      image,
      description,
      level,
      marks,
      myMark,
      feedback,
      deadline,
      creator,
      pdf,
      note,
      status,
      email,
      name
    };

    try {
        const { data } = await axiosSecure.post(`/submissions`, submissionData);
        // console.log(data);
        toast.success("successfully Submitted Assignment ");
        navigate("/my-assignment");
        form.reset('')
      } catch (err) {
        console.log(err);
        toast.error(`${err.message}`);
      }

  };

  return (
    <div className="text-center min-h-screen  rounded-3xl  my-4">
      <form className="my-6 bg-slate-100 p-4 rounded-3xl " onSubmit={handleSubmit}>
        <div className="form-control ">
          <label className="label">
            <span className="label-text"> PDF/Doc link</span>
          </label>
          <input
            type="text"
            placeholder="link"
            name="pdf"
            className="input input-bordered md:w-1/2"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"> A Quick Note</span>
          </label>
          <textarea
            name="note"
            id=""
            type="text"
            placeholder="Type here"
            className="border md:w-1/2 rounded-lg p-3"
            cols="6"
            rows="5"
          ></textarea>
        </div>
        <div className="text-center md:text-left">
          <button
            type="submit"
            className="btn my-4 w-1/2 md:w-1/4  hover:text-amber-500 hover:bg-slate-700 border-amber-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
