import { useNavigate } from "react-router-dom";
import userGif from "../assets/user.gif";
import adminGif from "../assets/admin.gif";

const SelectAccount = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center px-4">
        <h1 className="font-bold text-3xl">Select Account</h1>
        <p className="pb-6">Choose your account type!</p>
        <div className="flex gap-3">
          <div
            onClick={() => navigate("/user_login")}
            className="flex flex-col gap-7 py-6 px-4 w-1/2 justify-center items-center outline-slate-300 outline outline-1 overflow-hidden hover:outline-slate-700"
          >
            <img src={userGif} alt="my-gif" />
            <h1 className="text-xl font-bold">User</h1>
          </div>
          <div
            onClick={() => navigate("/admin_login")}
            className="flex flex-col gap-7 py-6 px-4 w-1/2 justify-center items-center outline-slate-300 outline outline-1 overflow-hidden hover:outline-slate-700"
          >
            <img src={adminGif} alt="my-gif" />
            <h1 className="text-xl font-bold">Admin</h1>
          </div>
        </div>
        {/* <button
          onClick={() => navigate("/login")}
          className="text-white font-semibold w-32"
        >
          Login
        </button> */}
      </div>
    </>
  );
};

export default SelectAccount;
