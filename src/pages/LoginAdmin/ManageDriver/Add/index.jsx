import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AddDriver = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic

    // Reset form values
    setName("");

    // Clear file input
    if (formRef.current) {
      formRef.current.reset();
    }

    // Show alert window
    window.alert("Form submitted successfully!");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-200 px-8">
      <div className="flex w-full flex-col rounded bg-slate-800 p-4 sm:w-3/6 xl:w-1/4">
        <h1 className="text-3xl font-bold text-gray-50">Add User Data</h1>
      </div>
      <div className="flex w-full flex-col rounded bg-slate-100 p-4 sm:w-3/6 xl:w-1/4">
        <form
          className="flex flex-col gap-4 rounded bg-white p-4 text-sm font-medium outline outline-1 outline-slate-200"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className="flex flex-col gap-2">
            Driver Name
            <input
              className="rounded p-2 text-sm font-normal outline outline-1 outline-slate-200 focus:bg-sky-50 focus:duration-700"
              type="text"
              placeholder="Enter the driver name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <div className="flex flex-col gap-2">
            <label className="flex flex-col">Driver License</label>
            <input
              className="block w-full cursor-pointer rounded border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 focus:outline-none"
              id="default_size"
              type="file"
              // onChange={(e) => setKtmCard(e.target.files[0])}
            />
            <p className="text-xs text-gray-300">
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <input
              className="rounded bg-sky-400 p-3 text-base font-semibold text-white hover:bg-sky-500 hover:duration-300"
              type="submit"
            />
            <button
              onClick={() => navigate("/admin/dashboard/driver")}
              className="rounded bg-rose-500 p-3 text-base font-semibold text-white hover:bg-rose-600 hover:duration-300"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDriver;
