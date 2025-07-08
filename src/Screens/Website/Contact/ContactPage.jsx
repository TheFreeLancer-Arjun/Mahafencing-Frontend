import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div>
      <div className="bg-yellow-50">

     <div className="w-full px-4 lg:px-32 py-20 bg-yellow-50">
        <h1
           style={{
              fontFamily: "CodeProBlack",
            }}
          className="text-4xl lg:text-9xl text-start mt-4 mb-4 font-bold uppercase"
        >
         Send A Message
        </h1>
        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#51B85D] flex flex-col lg:flex-row">
          
              {/* Contact Us Section */}
        <div className="min-h-screen  p-10">
          <div className="max-w-6xl mx-auto   rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Form */}

              <div className="space-y-6">
                
                <div className="relative">
                  <FaUser className="absolute textred left-3 top-3 text-green-800" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-b-[5px] border-r-[5px] border-[#51B85D] rounded-t-xl "
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-green-800" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 border border-b-[5px] border-r-[5px] border-[#51B85D] rounded-t-xl"
                  />
                </div>

                <div className="relative">
                  <FaPhoneAlt className="absolute left-3 top-3 text-green-800" />
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full pl-10 pr-4 py-3 border border-b-[5px] border-r-[5px] border-[#51B85D] rounded-t-xl"
                  />
                </div>

                <div className="relative">
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full pl-4 pr-4 py-3 border border-b-[5px] border-r-[5px] border-[#51B85D] rounded-t-xl"
                  />
                </div>

                <button className="text-black hover:bg-red-200 text-lg md:text-xl font-semibold px-6  md:px-8 py-2 bg-white border border-b-[5px] border-r-[5px] border-[#E23A53] rounded-t-xl">
                  Send Message
                </button>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl text-center font-bold">Get In Touch</h2>
                <p className=" text-gray-700 text-center mb-7 max-w-2xl mx-auto">
                  We are here to help you. Reach out to us via any of the
                  following methods.
                </p>
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-3xl text-green-600 mr-4" />
                  <div className="">
                    <h2 className="text-xl font-bold">Our Location</h2>
                    <p>
                      MUKTANGAN",Row-House No.3, Jagatnetra,Plot No.33,Nath
                      Prangan, Behind Emrald City,Shivaji Nagar Road,
                      Aurangabad-431010,
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaPhoneAlt className="text-3xl text-blue-800 mr-4" />
                  <div>
                    <h2 className="text-xl font-bold">Phone</h2>
                    <p>Primary: + 9823389959</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FaEnvelope className="text-3xl text-yellow-500 mr-4" />
                  <div>
                    <h2 className="text-xl font-bold">Email</h2>
                    <p>
                      <a
                        href="mailto:info@shivajipharma.com"
                        className="text-blue-500 font-semibold"
                      >
                        mahafencing@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* <div className="rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x300"
                  alt="Shivaji College Campus"
                  className="w-full"
                />
              </div> */}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>















    
      </div>
    </div>
  );
}
