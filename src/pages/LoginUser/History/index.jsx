import { FaHistory } from "react-icons/fa";
import Navigation from "../../../components/Navigation";
// import { drivers } from "../../../data/Drivers";
// import { users } from "../../../data/Users";
import { historys } from "../../../data/Historys";

const Dashboard = () => {
  // const user = users.find((user) => user.id === "1");
  // Fetch the users database with id as a key and define the users as user.
  // const driver = drivers.find((driver) => driver.id === "1");
  // Fetch the drivers database with id as a key and define the drivers as driver.
  const history = historys.find((history) => history.id === "1");
  // Fetch the drivers database with id as a key and define the drivers as driver.

  // if (!driver) {
  //   // Handle case when driver is not found
  //   return null;
  // }

  // if (!user) {
  //   // Handle case when user is not found
  //   return null;
  // }

  if (!history) {
    // Handle case when user is not found
    return null;
  }

  return (
    <>
      <div className="z-0 flex h-screen w-screen flex-row">
        <div className="absolute z-10">
          <Navigation />
        </div>
        <div className="ml-16 grid w-screen grid-cols-2 grid-rows-4 gap-2 bg-slate-100 px-2 py-2">
          {/* Tracking Map */}
          <div className="col-span-2 row-span-4 flex flex-col items-center border border-black bg-black  sm:overflow-clip sm:bg-slate-50">
            <h1 className="flex flex-row items-center justify-center gap-2 py-2 text-center text-sm font-bold text-white sm:w-full sm:bg-black sm:text-lg sm:text-white">
              <FaHistory /> History :
            </h1>
            <div className="h-full w-full overflow-auto bg-white p-2">
              <div className="w-full bg-white p-4 outline outline-1 outline-zinc-200">
                <div className=" flex flex-col gap-6">
                  {historys.map((history) => (
                    <div key={history.id}>
                      <ul className="flex flex-col gap-1 p-3 text-sm outline outline-1 outline-black">
                        <li>No. {history.id}</li>
                        <li>Tanggal : {history.date}</li>
                        <li>Supir : {history.driver.name}</li>
                        <li>Pickup :{history.pickup}</li>
                        <li>Turun :{history.drop}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
