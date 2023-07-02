import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { data_dashboard } from "../data/Dashboard";
import { users } from "../data/Users";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const user = users.find((user) => user.id === "1");

  if (!user) {
    // Handle case when user is not found
    return null;
  }

  return (
    <>
      <div>
        <section className="flex gap-2">
          <div
            className={`bg-[#fff] min-h-screen border border-l-0 border-y-0 border-black ${
              open ? "w-screen sm:w-64 " : "w-16"
            } duration-500 text-gray-100 px-4`}
          >
            <div className="py-3 flex justify-end">
              <HiMenuAlt3
                size={26}
                className="cursor-pointer text-black"
                onClick={() => setOpen(!open)}
              />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
              {data_dashboard?.map((data_ds, i) => (
                <Link
                  to={data_ds?.link}
                  key={i}
                  className={` ${
                    data_ds?.margin && "mt-4"
                  } group flex items-center text-sm gap-3.5 font-medium p-2 text-black hover:bg-gray-300 rounded-md`}
                >
                  <div>
                    {React.createElement(data_ds?.icon, { size: "20" })}
                  </div>
                  <div className="w-4 sm:w-auto">
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre text-black duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {data_ds?.name}
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {data_ds?.name}
                    </h2>
                    <p
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre text-sm text-black duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {data_ds?.desc}
                    </p>
                    <p
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-medium whitespace-pre text-sm text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {data_ds?.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Navigation;
