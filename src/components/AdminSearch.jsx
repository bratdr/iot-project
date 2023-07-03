import { useNavigate } from "react-router-dom";

const AdminSearch = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center">
        <div className="flex border border-slate-200">
          <input
            type="text"
            className="block w-60  px-4 py-2 text-slate-700 bg-white border focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Input the admin key..."
          />
          <button
            onClick={() => navigate("/dashboard_admin")}
            className=" text-black bg-rose-500 border-l rounded-none hover:bg-black hover:text-white"
          >
            Enter
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminSearch;
