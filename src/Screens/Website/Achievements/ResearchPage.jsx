import React from "react";

export default function ResearchPage() {
  // Data for Research Work in Fencing
  const researchData = [
    {
      srNo: 1,
      name: "Dr. Uday Dongare",
      degree: "M.Phil.",
      university: "Bharthiyar University",
      year: "2007",
      additionalDegree: "Ph.D.",
      additionalUniversity: "Dr. B.A.M.U. Aurangabad",
      additionalYear: "2009",
    },
    {
      srNo: 2,
      name: "Dr. Pandurang Ranmal",
      degree: "M.Phil.",
      university: "Bharthiyar University",
      year: "2007",
      additionalDegree: "Ph.D.",
      additionalUniversity: "J.J.T.U. Jhunjhunu",
      additionalYear: "2013",
    },
    {
      srNo: 3,
      name: "Dr. Saima Siddiqui",
      degree: "Ph.D.",
      university: "R. T. M. University, Nagpur",
      year: "2012",
    },
    {
      srNo: 4,
      name: "Dr. Suresh Jondhale",
      degree: "M. Phil",
      university: "Savitribai Phule Pune University, Pune",
    },
  ];

  return (
    <div className="  ">
      <div className="overflow-x-scroll">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-black text-white">
              <th className="py-3 px-6 text-left">Sr. No.</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Degree</th>
              <th className="py-3 px-6 text-left">University</th>
              <th className="py-3 px-6 text-left">Year</th>
            </tr>
          </thead>
          <tbody>
            {researchData.map((person, index) => (
              <React.Fragment key={index}>
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } border-b border-gray-300`}
                >
                  <td className="py-3 px-6">{person.srNo}</td>
                  <td className="py-3 px-6">{person.name}</td>
                  <td className="py-3 px-6">{person.degree}</td>
                  <td className="py-3 px-6">{person.university}</td>
                  <td className="py-3 px-6">{person.year}</td>
                </tr>
                {/* Add additional row for extra degree if available */}
                {person.additionalDegree && (
                  <tr
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } border-b border-gray-300`}
                  >
                    <td className="py-3 px-6"></td>
                    <td className="py-3 px-6"></td>
                    <td className="py-3 px-6">{person.additionalDegree}</td>
                    <td className="py-3 px-6">{person.additionalUniversity}</td>
                    <td className="py-3 px-6">{person.additionalYear}</td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
