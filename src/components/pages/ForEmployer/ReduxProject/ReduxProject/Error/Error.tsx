import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  clearError,
  selectErrorMessage,
} from "../../../../../../redux/slices/errorSlice";

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearError());
    }
  }, [errorMessage, dispatch]);
  return <ToastContainer position="top-right" autoClose={3000} theme="dark" />;
};

export default Error;
