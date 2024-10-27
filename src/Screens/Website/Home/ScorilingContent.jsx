import React from "react";

const ScorilingContent = () => {
  const NewsScroller = [
    {
      id: 1,
      image:
        "https://play-lh.googleusercontent.com/69Liz0_qRqvT9kZCQHow1anTKwRr59EbvrLkZ9-oXETnCajZ_9UiM-BRbUv3l5RSfic=w600-h300-pc0xffffff-pd",
      alt: "Description for image 1",
    },
    {
      id: 2,
      image:
        "https://play-lh.googleusercontent.com/DH5tL6HDZBUZs_DcXEH-qoUwJF62nsdouqkZrvy5di13mSGdEMnN_TLzNLHUPbrX2fI=w600-h300-pc0xffffff-pd",
      alt: "Description for image 2",
    },
    {
      id: 3,
      image:
        "https://lh3.googleusercontent.com/proxy/GhzaOS2WMwThv-2xzXwbTaWzxnkxJ3SOb1mjYnKd7MedXCd7MD9qWZRwPWLpZlz4olvuCwdE-tdawO5qpvJr",
      alt: "Description for image 3",
    },
    {
      id: 4,
      image:
        "https://play-lh.googleusercontent.com/-VGm_ZN3IS0grqFBVKi7C-Vq3Oj8h43rCQCPBHdHd9wu1SOat-SGBjFVkbqtMc3uv-k",
      alt: "Description for image 4",
    },
    {
      id: 5,
      image:
        "https://w1.pngwing.com/pngs/456/600/png-transparent-pharmacist-bowl-of-hygieia-pharmacy-pharmaceutical-drug-logo-pharmacy-residency-medical-prescription-multistate-pharmacy-jurisprudence-examination.png",
      alt: "Description for image 4",
    },
    {
      id: 6,
      image:
        "https://etimg.etb2bimg.com/thumb/msid-105641477,width-1200,height-900,resizemode-4/.jpg",
      alt: "Description for image 4",
    },
  ];
  return (
    <>
      <div className="group relative overflow-hidden py-2">
        {/* Scrolling Images */}
        <div className="overflow-hidden">
          <div className="flex space-x-10 md:space-x-20 animate-scroll">
            {NewsScroller.map((item) => (
              <span key={item.id} className="py-2 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="object-contain h-16 sm:h-24  lg:h-20 xl:h-28 w-auto"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ScorilingContent;
