import { ToastContainer, Bounce } from "react-toastify";

export default function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
      style={{
        cursor: "pointer",
        fontWeight: "600",
      }}
    />
  );
}
