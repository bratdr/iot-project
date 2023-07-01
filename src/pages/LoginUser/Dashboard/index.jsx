import Navigation from "../../../components/Navigation";
import mapsIMG from "../../../assets/Union.png";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row w-screen min-h-screen">
        <div className="z-10">
          <Navigation />
        </div>
        <div className="z-0 flex bg-white rounded-md w-screen mx-4 items-center justify-center">
          <img
            className="object-fill w-screen h-screen absolute"
            src={mapsIMG}
            alt="maps"
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
