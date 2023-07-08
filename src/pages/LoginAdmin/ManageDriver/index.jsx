import Navigation from "../../../components/AdminNav";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa6";
import { drivers } from "../../../data/Drivers";

const ManageDriver = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="z-0 flex h-screen w-screen flex-row">
        <div className="absolute z-10">
          <Navigation />
        </div>
        <div className="flex w-full flex-col items-center justify-center bg-slate-100 pl-20 pt-16 sm:w-full">
          <div className="w-full overflow-scroll">
            <div className="mb-4">
              <h2 className="pb-8 text-4xl font-bold">Drivers Management</h2>
              <button
                onClick={() => navigate("/admin/dashboard/driver/add")}
                className="flex flex-row items-center justify-center gap-4 rounded-md bg-black text-sm font-semibold text-white outline outline-1 outline-gray-200 hover:bg-white hover:text-black"
              >
                <FaUser size={16} />
                Tambah Supir
              </button>
            </div>
            <div className="overflow-x-scroll overflow-y-scroll border-b border-gray-200 shadow sm:overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Alamat
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      No. Telp
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {drivers.map((driver) => (
                    <tr key={driver.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">{driver.id}</div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {driver.name}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {driver.alamat}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {driver.no_telp}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex gap-2 text-sm">
                          <button
                            onClick={() =>
                              navigate("/admin/dashboard/driver/edit")
                            }
                            className="bg-sky-50 text-gray-900 hover:text-sky-800"
                          >
                            Edit
                          </button>
                          <button className="bg-rose-50 hover:text-red-800">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageDriver;
