import { Link } from "react-router-dom";
import React from "react";

const FaiHistoryPage = () => {
  const fencingFacts = [
    "Fencing is the most ancient sport in the world, tracking from 1190 B.C.",
    "It has been a sport of the Olympiad since its inception in 1896.",
    "Fencing became part of the Commonwealth Games in 1950 and the Asian Games in 1978.",
    "The International Fencing Federation (FIE) was founded in 1914 and currently has 115 member countries.",
    "The Asian Fencing Confederation and Commonwealth Fencing Federation were formed later.",
    "The Indian Fencing Association was founded in 1974, recognized by the Government in 1997, and is affiliated with the Indian Olympic Association, Asian Fencing Confederation, Commonwealth Fencing Federation, and FIE.",
    "There are six individual and six team events in three different weapons used in fencing: Epee, Foil, and Sabre.",
    "The total number of medals in fencing is 48, next only to Aquatics and Athletics.",
  ];

  const promotionFacts = [
    "Sports Authority of India adopted fencing under its 'Special Area Games Scheme' from 1989 to 1996.",
    "One German and two Russian coaches were brought in by the Sports Authority of India to reinforce the SAG Scheme.",
    "During this period, trainees participated in the World Junior & Cadet Championship in 1995, and the senior team participated in training-cum-competition at Belarus and an international meet at Tehran in 1996, securing a bronze medal in each tournament.",
    "Owing to intensive training in the SAG Scheme, all trainees became National champions in their respective events.",
    "After the closure of the SAG Scheme by SAI in 1996, the game became dormant.",
    "The Association has held National competitions in Sub-Junior (1999), Cadet (2004), Junior (1992), and Senior (1986) categories, for both boys/men and girls/women.",
    "They have participated in a few international events approved by the Government in recent years.",
    "Prior to international participation, the Association, with assistance from SAI, conducted limited-duration National Coaching Camps at various venues.",
    "Streamlined the functioning of affiliated units and regulated competition patterns in National Championships.",
    "Established an office in J.N. Stadium, New Delhi, for secretarial work.",
    "Created a website for the benefit of sports lovers.",
    "Started Diploma and Certificate Courses with assistance from NS NIS Patiala.",
    "Conducted IOC Solidarity Courses in 1996 (Bangalore) and 2003 (Patiala).",
    "Complied with all requirements of the IOA and SAI.",
    "Obtained the services of foreign coaches for ten months each in 2002 and 2004 to train National teams and advise SAI on improvements.",
  ];

  const achievements = [
    "Despite a lack of equipment, infrastructure, and proper training, national ranking fencers have shown modest performances in recent international competitions.",
    "Junior and senior fencers are gradually ascending the rankings in international and regional events despite constraints such as limited funding and inadequate coaching.",
    "The National Junior team (both men and women) secured 5th place in the Foil event, with one member achieving 6th place in the individual event during their maiden appearance at the Asian Championship.",
    "In the Commonwealth Championship, the Indian team secured 7th place on their debut.",
    "At the world level, juniors and seniors are steadily improving their ranking positions in competitions, despite numerous challenges.",
    "A foreign coach who visited for short periods indicated that Indian fencers could excel in international competitions with sustained training and focused efforts, leveraging their inherent talent and physiological attributes.",
  ];

  return (
    <div className="bg-yellow-50 anime">
      <div className="w-screen flex gap-2 justify-center items-center p-5">
        <Link
          className="  rounded-lg text-black hover:bg-[#059ABA] px-10 lg:text-lg xs:text-sm font-bold border py-4 border-b-[3px] border-r-[3px] border-[#059ABA] rounded-t-xl  "
          to="/history/fencing"
        >
          Fencing History
        </Link>
        <Link
          className="  rounded-lg text-black hover:bg-[#059ABA] px-10 lg:text-lg xs:text-sm font-bold border py-4 border-b-[3px] border-r-[3px] border-[#059ABA] rounded-t-xl  "
          to="/history/fai"
        >
          FAI History
        </Link>
        <Link
          className="brounded-lg text-black hover:bg-[#059ABA] px-10 lg:text-lg xs:text-sm font-bold border py-4 border-b-[3px] border-r-[3px] border-[#059ABA] rounded-t-xl  "
          to="/history/mfa"
        >
          M.F.A History
        </Link>
      </div>

      {/* Content Section */}
      <div className="w-full px-4 lg:px-32 py-20 bg-yellow-50">
        <h1
          style={{
              fontFamily: "CodeProBlack",
            }}
          className="text-5xl lg:text-9xl text-start mt-4 mb-4 font-bold uppercase"
        >
          I.F.F History
        </h1>
        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#06B4DB] flex flex-col lg:flex-row">
          <div className="rounded-lg leading-relaxed  w-full">
            <div className="anime w-full p-5">
              <div className="anime text-black mt-3 lg:mt-7 text-sm lg:text-xl">
                <p className="mb-4 font-bold">
                  Shri Rajiv Mehta, Secretary of the Indian Olympic Association,
                  took over the position as a President of Fencing Association
                  of India in 2017. Shri Bashir Ahmed Khan of Chhattisgarh and
                  Ashok Dudhare of Maharashtra elected as secretary and
                  treasurer respectively. Fencing Association caught pace in the
                  overall development in presence of Shree Rajiv Mehta. His
                  management, hard work, skill and intense practice in sports
                  have paid of. Many pending cases in the sports ministry are
                  resolved in a positive way such as fencing up gradation in
                  priority games; it is only because of Shri. Rajiv Mehtaji, a
                  large amount of funds raised to participate in international
                  competitions. At a time when there was no funding from the
                  central government, Rajiv Mehtaji sanctioned the entire cost
                  of players for international tournament.
                </p>

                <p className="mb-4 font-bold">
                  The Olympic medal game was not in the South Asian Games; with
                  the efforts of Mr. Rajiv Mehata it was included in the South
                  Asian Games, Nepal. No major international competition has
                  been held in India yet, but due to the efforts and initiative
                  of Rajiv Mehta, India has been given the title of Commonwealth
                  Championship in 2020.{" "}
                </p>

                <p className="mb-4 font-bold">
                  Fencing has gained a great reputation not only in India but
                  also in the world. All credit goes to Shri Rajiv Mehta for
                  encouraging the players. He also has taken initiative for
                  involvement of fencing in Railways and police games. Under the
                  chairmanship of Rajiv Mehta, the Fencing association of India
                  is taking the eagles ride.
                </p>

                <div>
                  <h1 className="text-3xl font-bold mt-5 mb-5">
                    History of Indian Fencing Association
                  </h1>

                  <div className="flex w-[30cm] gap-10  justify-between">
                    <div className="w-[50%] h-[8cm] ">
                      <img src="http://mahafencing.in/assets/img/olympe.png"  className=" hover:border-[6px] hover:border-[#51B85D] hover:rounded-lg"/>
                    </div>
                    <p className="w-[50%] h-[8cm] mb-4 font-bold">
                      Indian Fencing Association was founded in 1974, recognized
                      by Government in 1997 and affiliated to the Indian Olympic
                      Association. Sports Authority of India adopted this game
                      under its “Special Area Games Scheme” from 1989 to 1996.
                      One German and two Russian coaches were brought by Sports
                      Authority of India to reinforce the SAG
                      Scheme.Achievements-Despite lack of equipment,
                      infrastructure and sustained and proper training.
                    </p>
                  </div>

                  <p className="lg:w-[30cm] mb-4 font-bold ">
                    The National ranking fencers who had participated in
                    international competitions in the recent past ,have had
                    modest performance.Notwithstanding constraint of funds and
                    lack of effective long term training and non-availability of
                    competent and qualified coaches of international calibre and
                    lack of international exposure, the juniors and seniors who
                    had participated in international events are gradually
                    ascending the ranking position, both in international and
                    regional events. The Association had been holding National
                    competitions in Sub-Junior (1999), Cadet (2004), Junior
                    (1992) and Senior (1986) categories, both for boys/men and
                    girls/women. During the last few years, with the active role
                    being played by the Association and National teams
                    participating in international events with creditable
                    performance etc., have perhaps prompted the International
                    and Regional Fencing Federations to request the FAI to host
                    regional and international tournaments in Fencing.
                    Organization of such international meets etc. will immensely
                    benefit the FAI, will give an impetus to the game in the
                    country, adequate exposure to the host team, acquire
                    popularity of the game, test our organizational ability and
                    give an opportunity to visiting teams to see our country etc
                  </p>
                </div>

                <div className="bg-yellow-50 p-5 ">
                  <h2 className="text-center text-2xl font-bold mb-4">
                    Background of Fencing
                  </h2>
                  <ul className="list-disc list-inside space-y-2 font-bold">
                    {fencingFacts.map((fact, index) => (
                      <li key={index} className="text-lg text-black">
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 p-5 ">
                  <h2 className="text-center text-2xl font-bold mb-4">
                    Promotion of Fencing
                  </h2>
                  <ul className="list-disc list-inside space-y-2 font-bold">
                    {promotionFacts.map((fact, index) => (
                      <li key={index} className="text-lg text-black">
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-yellow-50 p-5 ">
                  <h2 className="text-center text-2xl font-bold mb-4">
                    Achievements in Fencing
                  </h2>
                  <ul className="list-disc list-inside space-y-2 font-bold">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="text-lg text-black">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaiHistoryPage;
