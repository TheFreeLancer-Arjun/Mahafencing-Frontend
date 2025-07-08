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
        <div className="text-center mt-2 w-full pt-4 bg-[#F6F2DF] text-black h-28 md:h-40 border border-[#059ABA] border-t-[10px] flex flex-col p-3 md:p-5">
          <span className="text-black text-md md:text-xl font-semibold px-1 py-1 md:py-2 bg-white border border-b-[3px] border-r-[3px] border-[#51B85D] rounded-t-xl">
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
        photo: "http://mahafencing.in/assets/img/all/Shivaji%20Rajejadhav.jpeg",
      },
      {
        name: "Vice President 2",
        position: "Vice President",
        photo: "http://mahafencing.in/assets/img/all/Uday%20Dongare1.jpeg",
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
        photo: "http://mahafencing.in/assets/img/all/Prakash%20Katole.jpg",
      },
      {
        name: "Member 2",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/Govind%20Deshmukh.jpeg",
      },
      {
        name: "Member 3",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/Kavita.jpg",
      },
      {
        name: "Member 4",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/Sunil.jpg",
      },
      {
        name: "Member 5",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/Raju%20Shinde.jpeg",
      },
      {
        name: "Member 6",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/Kailas%20Kankhare.jpeg",
      },
      {
        name: "Member 7",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/sanjeev_kumar.png",
      },
      {
        name: "Member 8",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/Ranmal.jpg",
      },
      {
        name: "Member 9",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/Shubham%20Jadhav.jpg",
      },
      {
        name: "Member 10",
        position: "Member",
        photo: "http://mahafencing.in/assets/img/all/suwarna-kakde.jpeg",
      },
    ];

    return (
      <div className="bg-yellow-50 px-4 py-8 md:px-8 md:py-12">
        <div className="w-full px-4 lg:px-32 py-20 bg-yellow-50">
        <h1
           style={{
              fontFamily: "CodeProBlack",
            }}
          className="text-4xl lg:text-9xl text-start mt-4 mb-4 font-bold uppercase"
        >
          OUR TEAM
        </h1>
        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#51B85D] flex flex-col lg:flex-row">
          <div className="rounded-lg leading-relaxed  w-full">
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
        </div>
      </div>
       
      </div>
    );
  };

  return <HierarchyComponent />;
}
