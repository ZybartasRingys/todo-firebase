/* eslint-disable no-undef */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function useRequireAuth({ children }) {
  const currentUser = useSelector((state) => state.user);

  return currentUser ? children : <Navigate to="/login" />;
}
