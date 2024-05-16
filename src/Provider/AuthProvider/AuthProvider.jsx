import React from 'react';
import { createContext } from 'react';

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {


const userInfo={}
  return (
    <div>
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;