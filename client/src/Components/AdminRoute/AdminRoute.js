import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const state = useSelector((state) => state.authReducer);
  console.log(state.user.role);

  return (
    <div>
      {token && state.user.role == 1 ? children : <Navigate to="/warning" />}
    </div>
  );
}

export default AdminRoute;
