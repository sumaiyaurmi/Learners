import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full rounded-2xl h-[600px] my-2">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.postimg.cc/QVGTdJFR/entrepreneurs-meeting-office-1.jpg" className="w-full" />
          <div className='absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white'>
          <div className='pl-4 pt-28 space-y-4'>  <h2 className='text-2xl  md:text-3xl lg:text-5xl font-semibold'><span className='font-bold text-amber-500 mb-4'>Study</span> Together <br /> Succeed <span className='text-amber-500'> Together</span></h2>
          <p>Empower Your Learning Community with Collaborative Study!</p>
          <button className='btn hover:text-amber-500 hover:bg-slate-700 border-0 '> JOIN NOW</button>
          </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide3" className="btn btn-circle hover:bg-slate-700 text-amber-500">❮</a> 
            <a href="#slide2" className="btn btn-circle hover:bg-slate-700 text-amber-500">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.postimg.cc/RZTX2N8M/academy-certification-curriculum-school-icon.jpg" className="w-full" />
          <div className='absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white'>
          <div className='pl-4 pt-28 space-y-4'>  <h2 className='text-2xl  md:text-3xl lg:text-5xl font-semibold'><span className='font-bold text-amber-500 mb-4'>Study</span> Together <br /> Succeed <span className='text-amber-500'> Together</span></h2>
          <p>Empower Your Learning Community with Collaborative Study!</p>
          <button className='btn hover:text-amber-500 hover:bg-slate-700 border-0 '> JOIN NOW</button>
          </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide1" className="btn btn-circle hover:bg-slate-700 text-amber-500">❮</a> 
            <a href="#slide3" className="btn btn-circle hover:bg-slate-700 text-amber-500">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.postimg.cc/RZmgPcgs/team-meeting-startups.jpg" className="w-full" />
          <div className='absolute h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white'>
          <div className='pl-4 pt-28 space-y-4'>  <h2 className='text-2xl  md:text-3xl lg:text-5xl font-semibold'><span className='font-bold text-amber-500 mb-4'>Study</span> Together <br /> Succeed <span className='text-amber-500'> Together</span></h2>
          <p>Empower Your Learning Community with Collaborative Study!</p>
          <button className='btn hover:text-amber-500 hover:bg-slate-700 border-0 '> JOIN NOW</button>
          </div>
          </div>
          <div className="absolute flex gap-4 transform -translate-y-1/2  right-5 bottom-5">
            <a href="#slide2" className="btn btn-circle hover:bg-slate-700 text-amber-500">❮</a> 
            <a href="#slide1" className="btn btn-circle hover:bg-slate-700 text-amber-600">❯</a>
          </div>      
            </div> 
        
      </div>
    );
};

export default Banner;