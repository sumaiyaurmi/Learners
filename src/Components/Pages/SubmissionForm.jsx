import React, { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import useAxios from '../UseHooks/useAxios';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';

const SubmissionForm = () => {

    const form=useLoaderData()
    const { _id, title, image, description, level, marks, deadline, creator } =form
    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext);

    

    return (
        <div className='text-center'>
            <form className='my-6 bg-slate-200 p-4 rounded-3xl '>
            <div className="form-control ">
        <label className="label">
          <span className="label-text"> PDF/Doc link</span>
        </label>
        <input
          type="text"
        
          placeholder="link"
          name="title"
          className="input input-bordered md:w-1/2"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text"> A Quick Note</span>
        </label>
        <textarea name="feedback" id="" type='text' placeholder='write here' className='border md:w-1/2 rounded-lg p-3' cols='6' rows="5"></textarea>
      </div>
      <div className='text-center md:text-left'>
        <button type='submit' className='btn my-4 w-1/2 md:w-1/4  hover:text-amber-500 hover:bg-slate-700 border-amber-500'>Submit</button>

      </div>
        </form>
        </div>
    );
};

export default SubmissionForm;