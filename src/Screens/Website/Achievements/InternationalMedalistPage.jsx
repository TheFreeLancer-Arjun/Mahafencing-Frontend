import React from "react";

export default function InternationalMedalistPage() {
  const pdfData = [
    {
      pdfName: " 2014-15",
      pdfUrl: "/path-to-your-pdf-1.pdf",
    },
    {
      pdfName: "Example PDF 2",
      pdfUrl: "/path-to-your-pdf-2.pdf",
    },
    {
      pdfName: "Example PDF 3",
      pdfUrl: "/path-to-your-pdf-3.pdf",
    },
  ];

  // PdfCard component
  const PdfCard = ({ pdfName }) => {
    return (
      <div className="rounded-2xl shadow-lg overflow-hidden w-60 my-5 p-1">
        {/* Single card */}
        <div className="rounded-2xl shadow-lg overflow-hidden p-1 duration-300 ease-in-out bg-white border-[2px] border-black">
          <img
            className="w-72 h-60 object-cover object-center border border-white"
            src="data:image/png;base64,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"
            alt="Profile"
          />
          <div className="text-center pt-4 bg-[#F6F2DF] text-black h-[4cm] border border-[#06B4DB] border-t-[10px]">
            <span className="text-xl font-semibold px-1 py-2 bg-white border border-b-[3px] border-r-[3px] border-green-400 rounded-t-xl">
              {pdfName}
            </span>
            <p className="mt-5 mx-5 text-sm font-semibold bg-white border py-2 border-b-[3px] border-r-[3px] border-black rounded-t-xl">
              Download
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-yellow-50">
       <div className="w-full px-4 lg:px-32 py-20 bg-yellow-50">
        <h1
           style={{
              fontFamily: "CodeProBlack",
            }}
          className="text-4xl lg:text-9xl text-start mt-4 mb-4 font-bold uppercase"
        >
         International Medalist
        </h1>
        <div className="p-2 border-t-[15px] border-r-[15px] rounded-2xl border-[#E23A53] flex flex-col lg:flex-row">
          <div className="rounded-lg leading-relaxed  w-full">
             {/* Render PdfCards */}
      <div className="flex flex-wrap justify-start items-center w-screen gap-5 p-10">
        {pdfData.map((pdf, index) => (
          <PdfCard
            key={index}
            pdfName={pdf.pdfName}
            pdfUrl={pdf.pdfUrl}
            pdfImage={pdf.pdfImage}
          />
        ))}
      </div>
          </div>
        </div>
      </div>
  
     
    </div>
  );
}
