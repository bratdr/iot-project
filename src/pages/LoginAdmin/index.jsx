import { useNavigate } from "react-router-dom";
import UserSearch from "../../components/AdminSearch";
import adminGif from "../../assets/manage-admin.gif";

const AdminLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black text-white  flex flex-col text-center gap-4 px-4 items-center justify-center w-screen h-screen">
        <h1 className="font-bold text-3xl">
          Manage Your Tracking
          <br />
          Application Here
        </h1>
        <p className="pb-6">Insert Your Admin Key For Login!</p>
        <img className="max-w-xs" src={adminGif} alt="my-gif" />
        <div className="pt-6">
          <UserSearch />
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-sm mt-4 bg-black text-white w-18 font-medium flex items-center justify-center border-rose-500 border rounded-full hover:bg-rose-500"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default AdminLogin;
