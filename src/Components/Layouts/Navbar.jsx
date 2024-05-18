import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut =async ()=>{
      await logOut()
      try{
        toast.success("Log out Successfully");

      }
      catch (err) {
          console.log(err);
          toast.error(err?.message);

        }
  }

    const links=<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/assignment'}>Assignments</NavLink></li>
    {user?.email && <>
      <li><NavLink to={'/create-assignment'}> Create Assignments</NavLink></li>
      <li><NavLink to={'/pending-assignment'}>pending  Assignments</NavLink></li>
    </>}

    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {links}
      </ul>
    </div>
   <div className='flex gap-1 items-center'>
    <img src="https://i.postimg.cc/1z26dS9m/O7DCE10.jpg" className='w-14' alt="" />
<p className='text-2xl font-medium'><span className='text-4xl font-semibold text-amber-500'>L</span>earners</p> 
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
{
  user?.email ? 
<div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title={user?.displayName}>
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             
              <li>
                <Link to={'/attempted-assignment'}> My Attempted Assignments</Link>
              </li>
              <li className="mt-2">
                
                <button onClick={handleLogOut} className="bg-gray-200 block text-center">
                  Logout
                </button>
              </li>
            </ul>
          </div>  :<Link to={'/login'}><button className='btn hover:text-amber-500 hover:bg-slate-700'>Login</button></Link>
 
}
 
  </div>
</div>
    );
};

export default Navbar;