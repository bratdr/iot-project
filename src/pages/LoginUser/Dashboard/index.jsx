import Navigation from "../../../components/Navigation";
import mapsIMG from "../../../assets/Union.png";
import { drivers } from "../../../data/Drivers";
import { users } from "../../../data/Users";

const Dashboard = () => {
  const user = users.find((user) => user.id === "1");
  // Fetch the users database with id as a key and define the users as user.
  const driver = drivers.find((driver) => driver.id === "1");
  // Fetch the drivers database with id as a key and define the drivers as driver.

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
      <div className="z-0 flex h-screen w-screen flex-row">
        <div className="absolute z-10">
          <Navigation />
        </div>
        <div className="ml-16 grid w-screen grid-cols-2 grid-rows-4 gap-2 bg-slate-100 px-2 py-2 sm:grid-cols-4 sm:bg-slate-300">
          {/* Tracking Map */}
          <div className="col-span-2 row-span-2 flex flex-col items-center border border-black bg-black sm:col-span-3 sm:col-start-2 sm:row-span-4 sm:row-start-1 sm:justify-start sm:gap-6 sm:overflow-clip sm:rounded-xl sm:bg-slate-200">
            <h1 className="py-2 text-center text-sm font-bold text-white sm:w-full sm:bg-black sm:text-lg sm:text-white">
              Tracking Location :
            </h1>
            <img
              className="h-full w-fit object-cover sm:mt-6 sm:h-5/6 sm:w-auto sm:rounded-xl sm:border sm:border-black sm:object-cover"
              src={mapsIMG}
              alt="maps"
            />
          </div>
          {/* Passagers Info */}
          <div className="col-span-2 row-start-3 flex flex-col border border-black bg-white sm:col-auto sm:col-start-1 sm:row-span-2 sm:row-start-1 sm:overflow-clip sm:rounded-xl sm:bg-slate-200">
            <h1 className="bg-black p-2 text-xs font-medium text-white sm:text-base">
              passager info :
            </h1>
            <div className="flex flex-col gap-2 pl-2 pt-4">
              <div className="flex flex-row items-center gap-6">
                <h1 className="text-sm font-bold ">Name :</h1>
                <p className="text-xs font-medium">{user.name}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pl-2 pt-2">
              <div className="flex flex-row items-center gap-4">
                <h1 className="text-sm font-bold ">School :</h1>
                <p className="text-xs font-medium">{user.school}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 pl-2 pt-2">
              <div className="flex flex-row items-center gap-4">
                <h1 className="text-sm font-bold ">ID Card :</h1>
                <p className="text-xs font-medium">{user.card_id}</p>
              </div>
            </div>
          </div>
          {/* Driver Info */}
          <div className="col-span-2 row-start-4 flex flex-col border border-black bg-white sm:col-auto sm:row-span-2 sm:row-start-3 sm:overflow-clip sm:rounded-xl sm:bg-slate-200">
            <h1 className="bg-black p-2 text-xs font-medium text-white sm:text-base">
              driver info :
            </h1>
            <div className="flex flex-col gap-2 pl-2 pt-4">
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
