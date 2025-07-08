import React from "react";

export default function NisCoachesPage() {
  const tableData = [
    {
      srNo: 1,
      name: "Ashok Dudhae",
      district: "Nashik",
      course: "NIS Certificate Course",
    },
    {
      srNo: 2,
      name: "Mrs. Nirmala Choudhari",
      district: "Nashik",
      course: "NIS Certificate Course",
    },
    {
      srNo: 3,
      name: "Smt. Rekha Nene",
      district: "Sangali",
      course: "NIS Certificate Course",
    },
  ];
  return (
    <div>
          <div className="w-full px-4 lg:px-32 py-20 bg-yellow-50">
        <h1
           style={{
              fontFamily: "CodeProBlack",
            }}
          className="text-4xl lg:text-9xl text-start mt-4 mb-4 font-bold uppercase"
        >
          nis-coaches
        </h1>
        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#51B85D] flex flex-col lg:flex-row">
          <div className="rounded-lg leading-relaxed  w-full">
            <div className=" ">
        <table className="min-w-full bg-white border-collapse border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="border border-gray-300 px-4 py-2">Sr. No</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">District</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over tableData to create rows */}
            {tableData.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{row.srNo}</td>
                <td className="border border-gray-300 px-4 py-2">{row.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.district}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {row.course}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
          </div>
        </div>
      </div>
   
    </div>
  );
}
