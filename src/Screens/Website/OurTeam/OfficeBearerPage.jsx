import React from "react";

export default function OfficeBearerPage() {
  const MemberCard = ({ name, position, photo, size }) => {
    return (
      <div
        className={`flex flex-col items-center p-4 ${
          size === "large"
            ? "w-80 md:w-96"
            : size === "medium"
            ? "w-48 md:w-60"
            : "w-36 md:w-48"
        } bg-white rounded-lg shadow-lg`}
      >
        <img
          className="rounded-lg w-full h-full object-cover object-center border border-white"
          src={photo}
          alt={name}
        />
        <div className="text-center mt-2 w-full pt-4 bg-[#F6F2DF] text-black h-28 md:h-32 border border-[#06B4DB] border-t-[10px] flex flex-col p-3 md:p-5">
          <span className="text-white text-md md:text-xl font-semibold px-1 py-1 md:py-2 bg-white border border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl">
            {name}
          </span>
          <span className="mt-2 md:mt-5 mx-2 md:mx-5 text-xs md:text-sm font-semibold bg-white border py-1 md:py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl">
            {position}
          </span>
        </div>
      </div>
    );
  };

  const HierarchyComponent = () => {
    const president = {
      name: "President Name",
      position: "President",
      photo: "http://mahafencing.in/assets/img/all/satej_patil.png",
    };
    const vicePresidents = [
      {
        name: "Vice President 1",
        position: "Vice President",
        photo: "https://via.placeholder.com/100",
      },
      {
        name: "Vice President 2",
        position: "Vice President",
        photo: "https://via.placeholder.com/100",
      },
      {
        name: "Vice President 3",
        position: "Vice President",
        photo: "http://mahafencing.in/assets/img/all/Somvanshi.jpg",
      },
    ];
    const members = [
      {
        name: "Member 1",
        position: "Member",
        photo: "https://via.placeholder.com/80",
      },
      {
        name: "Member 2",
        position: "Member",
        photo: "https://via.placeholder.com/80",
      },
      {
        name: "Member 3",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/Kavita.jpg",
      },
      {
        name: "Member 4",
        position: "Member",
        photo: "https://via.placeholder.com/80",
      },
      {
        name: "Member 5",
        position: "Member",
        photo: "https://via.placeholder.com/80",
      },
      {
        name: "Member 6",
        position: "Member",
        photo: "https://via.placeholder.com/80",
      },
      {
        name: "Member 7",
        position: "Member",
        photo: "https://via.placeholder.com/80",
      },
      {
        name: "Member 8",
        position: "Member",
        photo: "https://via.placeholder.com/80",
      },
      {
        name: "Member 9",
        position: "Member",
        photo: "https://via.placeholder.com/80",
      },
      {
        name: "Member 10",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/suwarna-kakde.jpeg",
      },
    ];

    return (
      <div className="bg-yellow-50 px-4 py-8 md:px-8 md:py-12">
        <div className="flex flex-col items-center mt-10">
          {/* President */}
          <div className="mb-8">
            <MemberCard
              name={president.name}
              position={president.position}
              photo={president.photo}
              size="large"
            />
          </div>

          {/* Vice Presidents */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {vicePresidents.map((vp, index) => (
              <MemberCard
                key={index}
                name={vp.name}
                position={vp.position}
                photo={vp.photo}
                size="medium"
              />
            ))}
          </div>

          {/* Members */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                name={member.name}
                position={member.position}
                photo={member.photo}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return <HierarchyComponent />;
}
