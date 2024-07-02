import React from 'react';

const FCard = ({card}) => {
const {title,description,image}=card

    return (
        <div className="card transition hover:-translate-y-1 delay-150 duration-300  hover:scale-x-110 bg-base-100 shadow-xl">
        <div><img src={image} className='w-[300px] h-[230px] rounded-2xl ' /></div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-slate-500 '>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-circle text-2xl hover:text-amber-500 hover:bg-slate-700 animate-bounce -300 ">❯</button>
          </div>
        </div>
      </div>
    );
};

export default FCard;

