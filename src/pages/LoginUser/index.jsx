import UserSearch from "../../components/users/UserSearch";
import trackingGif from "../../assets/tracking.gif";

const UserLogin = () => {
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
      </div>
    </>
  );
};

export default UserLogin;
