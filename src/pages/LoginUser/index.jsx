import { useNavigate } from "react-router-dom";
import trackingGif from "../../assets/tracking.gif";

const UserLogin = () => {
  const navigate = useNavigate();

  const handleLoginButtonClick = () => {
    navigate("/login/user/keys");
  };

  const handleBackButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold">
        Tracking Your <br />
        Childern Location
      </h1>
      <p className="pb-6">Insert Your Childern Tracking Code!</p>
      <img className="max-w-xs" src={trackingGif} alt="my-gif" />
      <div className="flex flex-col items-center justify-center gap-6 pt-6">
        <div className="flex flex-row items-center justify-center gap-2">
          <button
            onClick={handleLoginButtonClick}
            className="mt-12 flex w-24 items-center justify-center rounded-lg bg-black text-sm font-medium text-white hover:bg-rose-500 hover:font-bold hover:text-white"
          >
            Login
          </button>
          <button
            onClick={handleBackButtonClick}
            className="mt-12 flex w-24 items-center justify-center rounded-lg border border-black bg-transparent text-sm font-medium text-black hover:bg-rose-500 hover:font-bold hover:text-white"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
