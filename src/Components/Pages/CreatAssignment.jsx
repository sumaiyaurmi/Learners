import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreatAssignment = () => {
    const [startDate, setStartDate] = useState(new Date());


    return (
       <form className=' my-5 bg-slate-200 p-4 rounded-2xl border-amber-500 border'>
        {/* 1st row */}
       <div className='grid grid-cols-2  gap-6'> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="title" className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="description" className="input input-bordered " required />
        </div>
        </div>
        {/* 2ns row */}
       <div className='grid grid-cols-2  gap-6'> 
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail Image</span>
          </label>
          <input type="text" placeholder="url" className="input input-bordered " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Marks</span>
          </label>
          <input type="number" placeholder="marks" className="input input-bordered " required />
        </div>
        </div>
        {/* 3rd row */}
       <div className='grid grid-cols-2  gap-6'> 
     <div>
     <label className="label">
            <span className="label-text">Difficulty Level</span>
          </label>
     <select
              name='category'
              id='category'
              className='border py-3 px-4 w-full rounded-lg'
            >
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select></div>  
     
        <div className="form-control">
        <label className="label">
            <span className="label-text">Due Date</span>
          </label>
        <DatePicker selected={startDate} className='input w-full' onChange={(date) => setStartDate(date)} />
        </div>
        </div>
        {/* 4th row */}
        <div>
            <button className='btn mt-6 w-1/4 hover:text-amber-500 hover:bg-slate-700 border-amber-500'>Create</button>
        </div>
        
       </form>
    );
};

export default CreatAssignment;