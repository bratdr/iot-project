import UserSearch from "../../components/UserSearch";
import trackingGif from "../../assets/tracking.gif";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col text-center gap-4 px-4 items-center justify-center w-screen h-screen">
        <h1 className="font-bold text-3xl">
          Tracking Your <br />
          Childern Location
        </h1>
        <p className="pb-6">Insert Your Childern Tracking Code!</p>
        <img className="max-w-xs" src={trackingGif} alt="my-gif" />
        <div className="pt-6">
          <UserSearch />
        </div>
        <button
          onClick={() => navigate("/")}
          className="text-sm mt-4 bg-slate-100 text-black w-18 font-medium flex items-center justify-center border-rose-500 border rounded-full hover:text-white hover:bg-rose-500"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default UserLogin;
