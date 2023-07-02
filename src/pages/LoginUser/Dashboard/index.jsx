import Navigation from "../../../components/Navigation";
import mapsIMG from "../../../assets/Union.png";
import { drivers } from "../../../data/Drivers";
import { users } from "../../../data/Users";

const Dashboard = () => {
  const user = users.find((user) => user.id === "1");
  const driver = drivers.find((driver) => driver.id === "1");

  if (!driver) {
    // Handle case when driver is not found
    return null;
  }

  if (!user) {
    // Handle case when user is not found
    return null;
  }
  return (
    <>
      <div className="z-0 flex flex-row w-screen h-screen">
        <div className="z-10 absolute">
          <Navigation />
        </div>
        <div className="w-screen ml-16 px-2 grid grid-cols-2 grid-rows-4 gap-2">
          {/* Tracking Map */}
          <div className="border border-black flex flex-col bg-black col-span-2 row-span-2 sm:bg-white items-center sm:justify-center sm:gap-6">
            <h1 className="text-white py-2 text-sm font-bold sm:text-black sm:text-2xl">
              Tracking Location
            </h1>
            <img
              className="object-cover w-fit h-full sm:w-96 sm:object-fill sm:h-80 sm:rounded-xl sm:border sm:border-black"
              src={mapsIMG}
              alt="maps"
            />
          </div>
          {/* Passagers Info */}
          <div className="border border-black flex flex-col bg-white col-span-2 row-start-3">
            <h1 className="text-white text-xs font-medium p-2 bg-black">
              passager info :
            </h1>
            <div className="pt-4 pl-2 flex flex-col gap-2">
              <div className="flex flex-row items-center gap-6">
                <h1 className="text-sm font-bold ">Name :</h1>
                <p className="text-xs font-medium">{user.name}</p>
              </div>
            </div>
            <div className="pt-4 pl-2 flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <h1 className="text-sm font-bold ">School :</h1>
                <p className="text-xs font-medium">{user.school}</p>
              </div>
            </div>
            <div className="pt-4 pl-2 flex flex-col gap-2">
              <div className="flex flex-row items-center gap-4">
                <h1 className="text-sm font-bold ">ID Card :</h1>
                <p className="text-xs font-medium">{user.card_id}</p>
              </div>
            </div>
          </div>
          {/* Driver Info */}
          <div className="border border-black flex flex-col bg-white col-span-2 row-start-4">
            <h1 className="text-white text-xs font-medium p-2 bg-black">
              driver info :
            </h1>
            <div className="pt-4 pl-2 flex flex-col gap-2">
              <div className="flex flex-row items-center gap-6">
                <h1 className="text-sm font-bold ">Name :</h1>
                <p className="text-xs font-medium">{driver.name}</p>
              </div>
              <div className="flex flex-row items-center gap-6">
                <h1 className="text-sm font-bold ">Buses :</h1>
                <p className="text-xs font-medium">{driver.buses}</p>
              </div>
              <div className="flex flex-row items-center gap-5">
                <h1 className="text-sm font-bold ">Pickup :</h1>
                <p className="text-xs font-medium">{driver.pickup}</p>
              </div>
              <div className="flex flex-row items-center gap-8">
                <h1 className="text-sm font-bold ">Drop :</h1>
                <p className="text-xs font-medium">{driver.drop}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
