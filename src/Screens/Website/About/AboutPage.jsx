import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-yellow-50">
      {/* Content Section */}
      <div className="w-full px-4 lg:px-32 py-20 bg-yellow-50">
        <h1
          style={{ fontWeight: "900", fontFamily: "DynaPuff" }}
          className="text-2xl lg:text-5xl text-start mt-4 mb-4 font-bold uppercase"
        >
          Mahafencing Association
        </h1>
        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#06B4DB] flex flex-col lg:flex-row">
          <div className="rounded-lg leading-relaxed  w-full">
            <div className="anime w-full p-5">
              <div className="anime text-black mt-3 lg:mt-7 text-sm lg:text-xl">
                <p className="mb-4 font-bold">
                  "Shri Chhatrapati Shivaji Maharaj established Swaraj (Own
                  Kingdom) in the country using his sword and wrote the glorious
                  history of the Marathas in golden words. But in the meantime
                  European countries gave the appearance of a sword fighting
                  skill. Sword fighting game is known as fencing in worldwide."
                </p>
                <p className="mb-4 font-bold">
                  "Fencing came to India in 1974 with modern rules and modern
                  equipments. The game also started in Maharashtra during this
                  period. In the early days, the task of spreading and
                  propagating the sword in Maharashtra began to overcome many
                  obstacles."
                </p>
                <p className="mb-4 font-bold">
                  "Fencing is being played in all the districts of Maharashtra
                  today and Maharashtra fencing association has more than
                  fifteen thousand registered players. Maharashtra isranking
                  first in the country as the most widely circulated and
                  propagated state of fencing. On behalf of Maharashtra fencing
                  Association, state tournaments are organized every year in
                  under ten years, under twelve, under 14, under 17, under 20,
                  under 23, senior age categories and Federation Cup."
                </p>
                <p className="mb-4 font-bold">
                  "Shiv Chhatrapati State Sports Award is a highest and most
                  prestigious sports award in Maharashtra given by government of
                  Maharashtra to the sports sector. In the fencing, 29 players
                  are honored with four coaches and 14 organizers by Shiv
                  Chhatrapati State Sports Award and one female organizerhonored
                  by Jijamata State Sports Award."
                </p>
                <p className="mb-4 font-bold">
                  "Maharashtra fencers have excelled in recent times both
                  nationally and internationally. Every year, fencers achieve
                  approximately 80 to 90 medals in national levels in almost all
                  groups. Approximately 10 to 15 Maharashtra fencers
                  representing India in international events every year."
                </p>
                <p className="mb-4 font-bold">
                  "On behalf of Maharashtra fencing Association, financial
                  assistance has been given to the coaches who complete the NIS
                  training course, financially backing to the district
                  association to buy electronic apparatus, felicitate to fencers
                  and coaches who excel at the national and international level
                  by excellent award. And many more innovative practices to
                  motivate the fencers, coaches and district organizers run by
                  Maharashtra fencing association."
                </p>
                <p className="mb-4 font-bold">
                  "The Maharashtra Fencing Association aims to spread the sport
                  of fencing to the grassroots in the countryside and to create
                  international, Asian and Olympic-level players."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
