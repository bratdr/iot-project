import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiSolidBusSchool } from "react-icons/bi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { TbMoodKidFilled } from "react-icons/tb";
import { FaAddressCard, FaSchool, FaUserAlt, FaHistory } from "react-icons/fa";
import { FaMapLocationDot, FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navigation = () => {
  const menus = [
    {
      name: "ID Kartu",
      desc: "id: 10A98DB321",
      icon: FaAddressCard,
    },
    {
      name: "Nama Anak",
      desc: "Udin Susetyo",
      icon: TbMoodKidFilled,
    },
    {
      name: "Sekolah",
      desc: "Politeknik Negri Jakarta",
      icon: FaSchool,
    },
    {
      name: "Posisi Naik",
      desc: "Politeknik Negri Jakarta",
      icon: FaMapLocationDot,
    },
    {
      name: "Posisi Turun",
      desc: "Halte Universitas Indonesia",
      icon: FaMapLocation,
    },
    {
      name: "Bus Info",
      desc: "[B 1234 ABC]",
      icon: BiSolidBusSchool,
    },
    {
      name: "Driver",
      desc: "Jaenudin Gofar",
      icon: FaUserAlt,
    },
    {
      name: "History",
      link: "/dashboard_user/history",
      icon: FaHistory,
      margin: true,
    },
    { name: "Logout", link: "/", icon: RiLogoutBoxRFill, margin: true },
  ];
  const [open, setOpen] = useState(true);
  return (
    <>
      <div>
        <section className="flex gap-2">
          <div
            className={`bg-[#fff] min-h-screen ${
              open ? "w-72" : "w-16"
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
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin && "mt-4"
                  } group flex items-center text-sm gap-3.5 font-medium p-2 text-black hover:bg-gray-300 rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                  <div>
                    <h2
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre text-black duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.name}
                    </h2>
                    <h2
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {menu?.name}
                    </h2>
                    <p
                      style={{
                        transitionDelay: `${i + 3}00ms`,
                      }}
                      className={`whitespace-pre text-sm text-black duration-500 ${
                        !open && "opacity-0 translate-x-28 overflow-hidden"
                      }`}
                    >
                      {menu?.desc}
                    </p>
                    <p
                      className={`${
                        open && "hidden"
                      } absolute left-48 bg-white font-medium whitespace-pre text-sm text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                    >
                      {menu?.desc}
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
