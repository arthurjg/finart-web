import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Toast = () => {		

	return (
		<ToastContainer position="bottom-center" autoClose={5000}
			hideProgressBar={true} closeOnClick pauseOnHover />
	)

}

export const renderSuccessToast = (msg) => {
	toast.success(msg)
}

export const renderErrorToast = (msg) => {
	toast.error(msg)
}

export const renderInfoToast = (msg) => {
	toast.info(msg)
}

export default Toast;

