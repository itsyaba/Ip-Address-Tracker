import React from "react";

interface Props {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  org: string;
  utc: number;
}

export default function Result({ ip, city, region, country_name, org, utc }: Props) {
  return (
    <div
      className="bg-white text-black absolute md:left-28 rounded-md p-4 mt-12 shadow-md min-h-36 md:right-28  divide-slate-700 grid grid-cols-1 md:grid-cols-4 place-content-center md:divide-x divide-y z-50 gap-6 md:divide-y-0
    "
    >
      <div className="md:px-2 ">
        <h4 className="uppercase text-slate-500 font-extrabold text-sm">ip address</h4>
        <h1 className="text-xl font-black">{ip}</h1>
      </div>
      <div className="px-2 ">
        <h4 className="uppercase text-slate-500 font-extrabold text-sm">Location</h4>
        <h1 className="text-xl font-black">
          {city} , {region} , {country_name}
        </h1>
      </div>
      <div className="px-2 ">
        <h4 className="uppercase text-slate-500 font-extrabold text-sm">timezone</h4>
        <h1 className="text-xl font-black">UTC: {utc}</h1>
      </div>
      <div className="px-2 ">
        <h4 className="uppercase text-slate-500 font-extrabold text-sm">isp</h4>
        <h1 className="text-xl font-black">{org}</h1>
      </div>
    </div>
  );
}
